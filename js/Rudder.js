const canvasWidth = 300;
const canvasHeight = 30;

const lineThickness = 2;
const lineColor = "green";

const crosshairThickness = 2.5;
const crosshairColor = "red";


function init(ctx) {
  ctx.fillStyle = lineColor;

  // draw horizontal line
  ctx.fillRect(0, canvasHeight / 2 - lineThickness / 2, canvasWidth, lineThickness);
}

function drawCrosshair(ctx, rudderXPos) {
  const crosshairPos = canvasWidth / 2 - crosshairThickness / 2;

  const x = parseFloat(Math.round(rudderXPos * 100) / 100);

  ctx.fillStyle = crosshairColor;

  // draw crosshair
  ctx.fillRect(crosshairPos + x * crosshairPos, 0, crosshairThickness, canvasHeight);
}

export function drawRudder(rudderXPos = 0) {
  const canvas = document.getElementById("rudder");
  const ctx = canvas.getContext("2d");

  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  init(ctx);

  drawCrosshair(ctx, rudderXPos);
}