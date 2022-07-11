function GetPostion() {
    this.x = 10;
    this.y = 10;
}

ctxs = new GetPostion();

window.onload = function() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("apple");
    ctx.drawImage(img, ctxs.x, ctxs.y);
  };
  