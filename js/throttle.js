const canvasWidth = 30;
const canvasHeight = 200;

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
  const throttlePos = canvasHeight / 2 - lineThickness / 2;

  const y = parseFloat(Math.round(throttleYPos * 100) / 100);

  ctx.fillStyle = crosshairColor;

  // draw crosshair
  ctx.fillRect(0, throttlePos + throttleYPos * throttlePos, canvasWidth, crosshairThickness);
}

export function drawThrottle(throttleNumber, throttleYPos) {
  const canvas = document.getElementById(`throttle${throttleNumber}`);
  const ctx = canvas.getContext("2d");

  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  init(ctx);

  drawCrosshair(ctx, throttleYPos);
}