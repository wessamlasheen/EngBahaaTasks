(function () {
  var hour = document.querySelector(".hour-hand");
  var minute = document.querySelector(".minute-hand");
  var second = document.querySelector(".second-hand");
  if (!hour || !minute || !second) return;

  function tick() {
    var now = new Date();
    var ms = now.getMilliseconds();
    var s = now.getSeconds() + ms / 1000;
    var m = now.getMinutes() + s / 60;
    var h = (now.getHours() % 12) + m / 60;

    second.style.transform =
      "translateX(-50%) rotate(" + s * 6 + "deg)";
    minute.style.transform =
      "translateX(-50%) rotate(" + m * 6 + "deg)";
    hour.style.transform =
      "translateX(-50%) rotate(" + h * 30 + "deg)";

    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
})();
