let canvasWidth = 0;
let canvasHeight = 0;

const lineThickness = 2;
const lineColor = "green";

const crosshairThickness = 2.5;
const crosshairColor = "red";


function init(ctx) {
  ctx.fillStyle = lineColor;

  // draw vertical line
  ctx.fillRect(canvasWidth / 2 - lineThickness / 2, 0, lineThickness, canvasHeight);
}

export function drawCrosshair(ctx, throttleYPos) {
  const crosshairPos = canvasHeight / 2 - crosshairThickness / 2;

  const y = parseFloat(Math.round(throttleYPos * 100) / 100);

  ctx.fillStyle = crosshairColor;

  // draw crosshair
  ctx.fillRect(0, crosshairPos + throttleYPos * crosshairPos, canvasWidth, crosshairThickness);
}

export function drawThrottle(throttleNumber, throttleYPos) {
  const canvas = document.getElementById(`throttle${throttleNumber}`);
  const ctx = canvas.getContext("2d");

  canvasWidth = canvas.offsetWidth;
  canvasHeight = canvas.offsetHeight;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  init(ctx);

  drawCrosshair(ctx, throttleYPos);
}