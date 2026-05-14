(function () {
  var el = document.getElementById("page-loader");
  if (!el) return;

  function hide() {
    el.classList.add("is-done");
    el.setAttribute("aria-busy", "false");
  }

  if (document.readyState === "complete") {
    hide();
  } else {
    window.addEventListener("load", hide);
  }
})();
