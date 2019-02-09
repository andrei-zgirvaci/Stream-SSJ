import {
  getCSSVariable,
  getRealPosValue
} from "./utils.js";

let canvasWidth = 0;
let canvasHeight = 0;
let lineColor;
let crosshairColor;

const lineThickness = 2;

const crosshairThickness = 2.5;


function drawStatic(ctx) {
  ctx.fillStyle = lineColor;

  // draw horizontal line
  ctx.fillRect(0, canvasHeight / 2 - lineThickness / 2, canvasWidth, lineThickness);
}

function drawCrosshair(ctx, rudderXPos) {
  const crosshairInitPos = canvasWidth / 2 - crosshairThickness / 2;

  const x = getRealPosValue(rudderXPos);

  ctx.fillStyle = crosshairColor;

  // draw crosshair
  ctx.fillRect(crosshairInitPos + x * crosshairInitPos, 0, crosshairThickness, canvasHeight);
}

export function drawRudder(rudderXPos = 0) {
  const canvas = document.getElementById("rudder");
  const ctx = canvas.getContext("2d");

  canvasWidth = canvas.offsetWidth - crosshairThickness * 2 + 1;
  canvasHeight = canvas.offsetHeight;

  lineColor = getCSSVariable("border-color");
  crosshairColor = getCSSVariable("crosshair-color");

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawStatic(ctx);

  drawCrosshair(ctx, rudderXPos);
}
