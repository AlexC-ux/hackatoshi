function initSmartHelper() {
  function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      leftStart: rect.left + smarthelper.rootWindow.scrollX,
      leftMiddle:
        rect.left + smarthelper.rootWindow.scrollX + el.clientWidth / 2,
      leftEnd: rect.left + smarthelper.rootWindow.scrollX + el.clientWidth,
      topStart: rect.top + smarthelper.rootWindow.scrollY,
      topMiddle:
        rect.top + smarthelper.rootWindow.scrollY + el.clientHeight / 2,
      topEnd: rect.top + smarthelper.rootWindow.scrollY + el.clientHeight,
    };
  }

  window.smarthelper = {};
  smarthelper.rootWindow = window;
  smarthelper.rootDocument = smarthelper.rootWindow.document;
  smarthelper.iframes = {};

  smarthelper.initStyles = () => {
    var h = smarthelper.rootDocument.getElementsByTagName("head")[0];
    var s = smarthelper.rootDocument.createElement("style");
    s.innerHTML = `
    .smarthelper-hint{position: fixed;bottom: 70px;right: 10px;border: none;max-width: 400px;max-height: 0px; height: 100%; width: 100%;z-index: 1000000;}
    .smarthelper-chat{position: fixed;bottom: 70px;right: 10px;border: none;max-width: 400px;max-height: 600px; height: 100%; width: 100%;z-index: 1000000;box-shadow:rgb(0 0 0 / 16%) 0px 5px 40px;border-radius: 10px;}
    .smarthelper-tour{position: absolute;top: 10px;left: 10px;border: none;max-width: 300px;max-height: 0px; height: 100%; width: 100%;	transition: top 0.5s ease-out, left 0.5s ease-out, transform 0.5s ease-out;z-index: 1000001;}
    .smarthelper-button{position: fixed;bottom: 10px;right: 10px; border: none; height: 50px; width: 50px;z-index: 1000000; border-radius: 50%;}
    `;
    h.appendChild(s);
  };

  smarthelper.initChatButtonFrame = () => {
    var b = smarthelper.rootDocument.getElementsByTagName("body")[0];
    var f = smarthelper.rootDocument.createElement("iframe");
    f.setAttribute("src", "http://localhost:3000/chat-button");
    f.setAttribute("id", "smarthelper-button");
    f.setAttribute("class", "smarthelper-button");
    f.setAttribute("scrolling", "no");
    b.appendChild(f);

    smarthelper.iframes.button =
      smarthelper.rootDocument.getElementById("smarthelper-button");

    smarthelper.rootWindow.addEventListener("message", ({ data }) => {
      const tour = smarthelper.iframes.hint;
      if (data && tour) {
        if (data.type == "chat:toggle") {
          if (smarthelper.iframes.hint.style.display !== "none") {
            smarthelper.iframes.hint.style.display = "none";
            smarthelper.iframes.chat.style.display = "";
          } else if (smarthelper.iframes.chat.style.display !== "none") {
            
            smarthelper.iframes.hint.style.display = "none";
            smarthelper.iframes.chat.style.display = "none";
          } else {
            smarthelper.iframes.hint.style.display = "";
            smarthelper.iframes.chat.style.display = "none";
          }
        }
      }
    });
  };

  smarthelper.initChatFrame = () => {
    var b = smarthelper.rootDocument.getElementsByTagName("body")[0];
    var f = smarthelper.rootDocument.createElement("iframe");
    f.setAttribute("src", "http://localhost:3000/chat");
    f.setAttribute("id", "smarthelper-chat");
    f.setAttribute("class", "smarthelper-chat");
    f.setAttribute("allow", "camera;microphone");
    f.style.display = "none";
    b.appendChild(f);

    smarthelper.iframes.chat =
      smarthelper.rootDocument.getElementById("smarthelper-chat");
  };

  smarthelper.initPageHintFrame = () => {
    var b = smarthelper.rootDocument.getElementsByTagName("body")[0];
    var f = smarthelper.rootDocument.createElement("iframe");
    f.setAttribute("src", "http://localhost:3000/");
    f.setAttribute("id", "smarthelper-hint");
    f.setAttribute("class", "smarthelper-hint");
    f.addEventListener("load", () => {
      smarthelper.iframes.hint.contentWindow.postMessage(
        { type: "location:changed", location: document.location.href },
        "*"
      );
    });
    b.appendChild(f);

    smarthelper.iframes.hint =
      smarthelper.rootDocument.getElementById("smarthelper-hint");

    smarthelper.rootWindow.addEventListener("message", ({ data }) => {
      const tour = smarthelper.iframes.hint;
      if (data && tour) {
        if (data.type == "hint:height") {
          tour.style.maxHeight = `${data.value}px`;
        }
      }
    });
  };

  smarthelper.initTourFrame = () => {
    var b = smarthelper.rootDocument.getElementsByTagName("body")[0];
    var f = smarthelper.rootDocument.createElement("iframe");
    f.setAttribute("src", "");
    f.setAttribute("id", "smarthelper-tour");
    f.setAttribute("class", "smarthelper-tour");
    f.setAttribute("allow", "camera;microphone");
    f.setAttribute("scrolling", "no");
    f.style.display = "none";
    b.appendChild(f);

    smarthelper.iframes.tour =
      smarthelper.rootDocument.getElementById("smarthelper-tour");

    smarthelper.rootWindow.addEventListener("message", ({ data }) => {
      const tour = smarthelper.iframes.tour;
      if (data && tour) {
        if (data.type == "tour:height") {
          tour.style.maxHeight = `${data.value}px`;
        } else if (data.type == "tour:start") {
          tour.style.display = "none";
          tour.style.top = "";
          tour.style.left = "";
          tour.style.transform = "";
          tour.contentWindow.location.replace(
            `http://localhost:3000/tour/${data.value}`
          );
        } else if (data.type == "tour:step") {
          tour.style.display = "";
          smarthelper.attachTourToElement(data.selector, data.position);
        } else if (data.type == "tour:end") {
          tour.style.display = "none";
          tour.contentWindow.location.replace(``);
        }
      }
    });
  };

  smarthelper.attachTourToElement = (selector, position) => {
    const element = smarthelper.rootDocument.querySelector(selector);
    const tour = smarthelper.iframes.tour;

    if (tour) {
      if (element) {
        const offsets = getOffset(element);
        tour.style.zIndex = "21474836";
        if (position == "left") {
          tour.style.top = `${offsets.topMiddle}px`;
          tour.style.left = `${offsets.leftEnd}px`;
          tour.style.transform = `translateY(-50%)`;
        } else if (position == "right") {
          tour.style.left = `${offsets.leftStart}px`;
          tour.style.top = `${offsets.topMiddle}px`;
          tour.style.transform = `translate3d(-100%, -50%, 0px)`;
        } else if (position == "top") {
          tour.style.top = `${offsets.topEnd}px`;
          tour.style.left = `${offsets.leftMiddle}px`;
          tour.style.transform = `translateX(-50%)`;
        } else if (position == "bottom") {
          tour.style.top = `${offsets.topStart}px`;
          tour.style.left = `${offsets.leftMiddle}px`;
          tour.style.transform = `translate3d(-50%, -100%, 0px)`;
        }
        tour.style.display = "";

        element.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      } else {
        tour.style.display = "none";
      }
    }
  };

  smarthelper.initLocationChangeHandler = () => {
    let oldHref = document.location.href;
    new MutationObserver(() => {
      if (oldHref !== document.location.href) {
        oldHref = document.location.href;

        smarthelper.iframes.hint.contentWindow.postMessage(
          { type: "location:changed", location: document.location.href },
          "*"
        );

        smarthelper.rootWindow.postMessage({ type: "tour:end" });
      }
    }).observe(document.querySelector("body"), {
      childList: true,
      subtree: true,
    });
  };

  smarthelper.initStyles();
  smarthelper.initPageHintFrame();
  smarthelper.initTourFrame();
  smarthelper.initLocationChangeHandler();
  smarthelper.initChatFrame();
  smarthelper.initChatButtonFrame();
}

!(function () {
  if ("undefined" == typeof smarthelper) {
    initSmartHelper();
  }
})();
