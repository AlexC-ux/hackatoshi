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

  smarthelper.initStyles = () => {
    var h = smarthelper.rootDocument.getElementsByTagName("head")[0];
    var s = smarthelper.rootDocument.createElement("style");
    s.innerHTML = `
    .smarthelper-hint{position: fixed;bottom: 10px;right: 10px;border: none;max-width: 400px;max-height: 0px; height: 100%; width: 100%;}
    .smarthelper-tour{position: absolute;top: 10px;left: 10px;border: none;max-width: 300px;max-height: 0px; height: 100%; width: 100%;}
    `;
    h.appendChild(s);
  };

  smarthelper.initPageHintFrame = () => {
    var b = smarthelper.rootDocument.getElementsByTagName("body")[0];
    var f = smarthelper.rootDocument.createElement("iframe");
    f.setAttribute("src", "http://localhost:3000/");
    f.setAttribute("id", "smarthelper-hint");
    f.setAttribute("class", "smarthelper-hint");
    b.appendChild(f);

    smarthelper.rootWindow.addEventListener("message", ({ data }) => {
      console.log(data);
      if (data && data.type == "hint:height") {
        const tour =
          smarthelper.rootDocument.getElementById("smarthelper-hint");
        if (tour) tour.style.maxHeight = `${data.value}px`;
      }
    });
  };

  smarthelper.initTourFrame = () => {
    var b = smarthelper.rootDocument.getElementsByTagName("body")[0];
    var f = smarthelper.rootDocument.createElement("iframe");
    f.setAttribute("src", "http://localhost:3000/tour/1");
    f.setAttribute("id", "smarthelper-tour");
    f.setAttribute("class", "smarthelper-tour");
    f.style.display = "none";
    b.appendChild(f);

    smarthelper.rootWindow.addEventListener("message", ({ data }) => {
      console.log(data);
      if (data && data.type == "tour:height") {
        const tour =
          smarthelper.rootDocument.getElementById("smarthelper-tour");
        if (tour) tour.style.maxHeight = `${data.value}px`;
      }
    });
  };

  smarthelper.attachTourToElement = (selector, position) => {
    const element = smarthelper.rootDocument.querySelector(selector);
    const tour = smarthelper.rootDocument.getElementById("smarthelper-tour");

    if (tour) {
      if (element) {
        const offsets = getOffset(element);

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
      } else {
        tour.style.display = "none";
      }
    }
  };

  smarthelper.initStyles();
  smarthelper.initPageHintFrame();
  smarthelper.initTourFrame();
}

!(function () {
  if ("undefined" == typeof smarthelper) {
    initSmartHelper();
  }
})();
