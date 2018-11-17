import {
  getCSSVariable,
  getRealPosValue
} from "./utils.js";

let canvasSize = 0;
let lineColor;
let crosshairColor;

const lineThickness = 2;

const crosshairSize = 15;
const crosshairThickness = crosshairSize / 5;
const crosshairRadius = crosshairThickness;


function drawStatic(ctx) {
  ctx.fillStyle = lineColor;
  ctx.strokeStyle = lineColor;
  ctx.lineWidth = lineThickness;

  //draw x axis
  ctx.fillRect(0, canvasSize / 2 - lineThickness / 2, canvasSize / 2 - crosshairThickness * crosshairRadius * 1.5, lineThickness);
  ctx.fillRect(canvasSize / 2 + crosshairThickness * crosshairRadius * 1.5, canvasSize / 2 - lineThickness / 2, canvasSize, lineThickness);

  //draw y axis
  ctx.fillRect(canvasSize / 2 - lineThickness / 2, 0, lineThickness, canvasSize / 2 - crosshairThickness * crosshairRadius * 1.5);
  ctx.fillRect(canvasSize / 2 - lineThickness / 2, canvasSize / 2 + crosshairThickness * crosshairRadius * 1.5, lineThickness, canvasSize / 2);

  //diagonal x
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(canvasSize / 2 - crosshairThickness * crosshairRadius, canvasSize / 2 - crosshairThickness * crosshairRadius);
  ctx.moveTo(canvasSize / 2 + crosshairThickness * crosshairRadius, canvasSize / 2 + crosshairThickness * crosshairRadius);
  ctx.lineTo(canvasSize, canvasSize);
  ctx.stroke();
  ctx.closePath();

  //diagonal y
  ctx.beginPath();
  ctx.moveTo(canvasSize, 0);
  ctx.lineTo(canvasSize / 2 + crosshairThickness * crosshairRadius, canvasSize / 2 - crosshairThickness * crosshairRadius);
  ctx.moveTo(canvasSize / 2 - crosshairThickness * crosshairRadius, canvasSize / 2 + crosshairThickness * crosshairRadius);
  ctx.lineTo(0, canvasSize);
  ctx.stroke();
  ctx.closePath();

  // fill with circles
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
  ctx.arc(canvasSize / 2, canvasSize / 2, canvasSize / 2.1, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.closePath();
}

function drawCrosshair(ctx, stickXPos, stickYPos) {
  const crosshairInitPos = canvasSize / 2 - crosshairSize / 2;
  const x = getRealPosValue(stickXPos);
  const y = getRealPosValue(stickYPos);

  ctx.fillStyle = crosshairColor;

  // draw crosshair
  ctx.fillRect(crosshairInitPos + x * crosshairInitPos, crosshairInitPos + y * crosshairInitPos + crosshairThickness * 2, crosshairSize, crosshairThickness);
  ctx.fillRect(crosshairInitPos + x * crosshairInitPos + crosshairThickness * 2, crosshairInitPos + y * crosshairInitPos, crosshairThickness, crosshairSize);
}

export function drawStick(stickXPos = 0, stickYPos = 0) {
  const canvas = document.getElementById("stick");
  const ctx = canvas.getContext("2d");

  canvasSize = canvas.offsetWidth - crosshairThickness * 2 + 2;

  lineColor = getCSSVariable("border-color");
  crosshairColor = getCSSVariable("crosshair-color");

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawStatic(ctx);

  drawCrosshair(ctx, stickXPos, stickYPos)
}