function initStyles() {
  var h = smarthelper.rootDocument.getElementsByTagName("head")[0];
  var s = document.createElement("style");
  s.innerHTML =
    ".smarthelper-hint{position: fixed;bottom: 10px;right: 10px;border: none;width: 400px;height: 350px;}";
  h.appendChild(s);
}

function initPageHintFrame() {
  var b = smarthelper.rootDocument.getElementsByTagName("body")[0];
  var f = document.createElement("iframe");
  f.setAttribute("src", "http://localhost:3000/");
  f.setAttribute("id", "smarthelper-hint");
  f.setAttribute("class", "smarthelper-hint");
  b.appendChild(f);
}

function initSmartHelper() {
  window.smarthelper = {};
  smarthelper.rootWindow = window;
  smarthelper.rootDocument = smarthelper.rootWindow.document;

  initStyles();
  initPageHintFrame();
}

!(function () {
  if ("undefined" == typeof smarthelper) {
    initSmartHelper();
  }
})();
