window.onload = function() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("apple");
    ctx.drawImage(img, 10, 10);
  };
  