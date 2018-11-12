const canvasSize = 300;

const crosshairThickness = 2.5;
const crosshairColor = "red";

function drawCrosshair(ctx, rotaryXPos, rotaryYPos) {
	const crosshairPos = canvasSize / 2 - crosshairThickness / 2;

	const x = parseFloat(Math.round(rotaryXPos * 100) / 100);
	const y = parseFloat(Math.round(rotaryYPos * 100) / 100);

	ctx.fillStyle = crosshairColor;

	// draw crosshair
	ctx.fillRect(0, crosshairPos + crosshairPos * y, canvasSize, crosshairThickness);
	ctx.fillRect(crosshairPos + crosshairPos * x, 0, crosshairThickness, canvasSize);
}

export function drawRotary(rotaryXPos, rotaryYPos) {
	const canvas = document.getElementById("rotary");
	const ctx = canvas.getContext("2d");

	canvas.width = canvasSize;
	canvas.height = canvasSize;

	drawCrosshair(ctx, rotaryXPos, rotaryYPos);
}