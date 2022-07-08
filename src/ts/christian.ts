var canvas = document.getElementById("scene");
var ctx = canvas.getContext("2d");
var particles = [];

function drawScene() {
  canvas.width = png.width * 2;
  canvas.height = png.height * 2;

  ctx.drawImage(png, 0, 0);

  var data = ctx.getImageData(0, 0, png.width, png.height);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (var y = 0, y2 = data.height; y < y2; y += 2) {
    for (var x = 0, x2 = data.width; x < x2; x += 2) {
      var particle = {
        x0: x,
        y0: y,
        x1: png.width / 2,
        y1: png.height / 2,
        color:
          "rgb(" +
          data.data[y * 4 * data.width + x * 4] +
          "," +
          data.data[y * 4 * data.width + x * 4 + 1] +
          "," +
          data.data[y * 4 * data.width + x * 4 + 2] +
          ")",
        speed: Math.random() * 4 + 2,
      };
      TweenMax.to(particle, particle.speed, {
        x1: particle.x0,
        y1: particle.y0,
        delay: y / 130,
        ease: Elastic.easeOut,
      });
      particles.push(particle);
    }
  }

  requestAnimationFrame(render);
}
var render = function () {
  requestAnimationFrame(render);

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0, j = particles.length; i < j; i++) {
    var particle = particles[i];
    ctx.fillStyle = particle.color;
    ctx.fillRect(particle.x1 * 2, particle.y1 * 2, 2, 2);
  }
};

var png = new Image();
png.onload = drawScene;
png.src =
  "data:image/png;base64,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";
