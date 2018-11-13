import {
	getCSSVariable,
	getRealPosValue
} from "./utils.js";

let canvasSize = 0;
let crosshairColor;

const crosshairThickness = 2.5;

function drawCrosshair(ctx, rotaryXPos, rotaryYPos) {
	const crosshairInitPos = canvasSize / 2 - crosshairThickness / 2;
	const x = getRealPosValue(rotaryXPos);
	const y = getRealPosValue(rotaryYPos);

	ctx.fillStyle = crosshairColor;

	// draw crosshair
	ctx.fillRect(0, crosshairInitPos + crosshairInitPos * y, canvasSize, crosshairThickness);
	ctx.fillRect(crosshairInitPos + crosshairInitPos * x, 0, crosshairThickness, canvasSize);
}

export function drawRotary(rotaryXPos, rotaryYPos) {
	const canvas = document.getElementById("rotary");
	const ctx = canvas.getContext("2d");

	canvasSize = canvas.offsetWidth;

	crosshairColor = getCSSVariable("crosshair-color");

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	drawCrosshair(ctx, rotaryXPos, rotaryYPos);
}