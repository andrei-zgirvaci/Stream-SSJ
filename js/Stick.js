const canvasSize = 300;

const lineThickness = 2;
const lineColor = "green";

const crosshairSize = 20;
const crosshairThickness = crosshairSize / 5;
const crosshairColor = "red";


function init(ctx) {
  ctx.fillStyle = lineColor;
  ctx.strokeStyle = lineColor;
  ctx.lineWidth = lineThickness;

  //draw x axis
  ctx.fillRect(0, canvasSize / 2 - lineThickness / 2, canvasSize / 2 - crosshairThickness * 4, lineThickness);
  ctx.fillRect(canvasSize / 2 + crosshairThickness * 4, canvasSize / 2 - lineThickness / 2, canvasSize, lineThickness);

  //draw y axis
  ctx.fillRect(canvasSize / 2 - lineThickness / 2, 0, lineThickness, canvasSize / 2 - crosshairThickness * 4);
  ctx.fillRect(canvasSize / 2 - lineThickness / 2, canvasSize / 2 + crosshairThickness * 4, lineThickness, canvasSize / 2);

  //diagonal x
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(canvasSize / 2 - crosshairThickness * 2.83, canvasSize / 2 - crosshairThickness * 2.83);
  ctx.moveTo(canvasSize / 2 + crosshairThickness * 2.83, canvasSize / 2 + crosshairThickness * 2.83);
  ctx.lineTo(canvasSize, canvasSize);
  ctx.stroke();
  ctx.closePath();

  //diagonal y
  ctx.beginPath();
  ctx.moveTo(canvasSize, 0);
  ctx.lineTo(canvasSize / 2 + crosshairThickness * 2.83, canvasSize / 2 - crosshairThickness * 2.83);
  ctx.moveTo(canvasSize / 2 - crosshairThickness * 2.83, canvasSize / 2 + crosshairThickness * 2.83);
  ctx.lineTo(0, canvasSize);
  ctx.stroke();
  ctx.closePath();

  //fill with circles
  ctx.beginPath();
  ctx.arc(canvasSize / 2, canvasSize / 2, canvasSize / 10, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();
  ctx.arc(canvasSize / 2, canvasSize / 2, canvasSize / 5, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();
  ctx.arc(canvasSize / 2, canvasSize / 2, canvasSize / 3.33, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();
  ctx.arc(canvasSize / 2, canvasSize / 2, canvasSize / 2.5, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();
  ctx.arc(canvasSize / 2, canvasSize / 2, canvasSize / 2 - 1.5, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.closePath();
}

function drawCrosshair(ctx, stickXPos, stickYPos) {
  const crosshairPos = canvasSize / 2 - crosshairSize / 2;

  const x = parseFloat(Math.round(stickXPos * 100) / 100);
  const y = parseFloat(Math.round(stickYPos * 100) / 100);

  ctx.fillStyle = crosshairColor;

  // draw crosshair
  ctx.fillRect(crosshairPos + x * crosshairPos, crosshairPos + y * crosshairPos + crosshairThickness * 2, crosshairSize, crosshairThickness);
  ctx.fillRect(crosshairPos + x * crosshairPos + crosshairThickness * 2, crosshairPos + y * crosshairPos, crosshairThickness, crosshairSize);
}

export function drawStick(stickXPos = 0, stickYPos = 0) {
  const canvas = document.getElementById("stick");
  const ctx = canvas.getContext("2d");

  canvas.width = canvasSize;
  canvas.height = canvasSize;

  init(ctx);

  drawCrosshair(ctx, stickXPos, stickYPos)
}