function draw_XY(){
	//Throttle_width = document.getElementById("Throttle").width;
	XY_size = 250;
	XY_thickness = 2;
	canvas = document.getElementById("Stick");
	ctx = canvas.getContext("2d");
	//change canvas size dynamically
	canvas.height = XY_size;
	canvas.width = XY_size;
	ctx.fillStyle = "rgba(0, 128, 0, 1)";
    //draw x
	ctx.fillRect (0,XY_size/2-XY_thickness/2, XY_size, XY_thickness);
	//draw y
	ctx.fillRect (XY_size/2-XY_thickness/2, 0, XY_thickness, XY_size);
	//fill with circles
	ctx.strokeStyle = "rgba(0, 128, 0, 1)";
	ctx.lineWidth = 2;
	ctx.beginPath();
	ctx.arc(XY_size/2,XY_size/2,XY_size/8,0,2*Math.PI);
	ctx.stroke();
	ctx.closePath();
	ctx.beginPath();
	ctx.arc(XY_size/2,XY_size/2,XY_size/4,0,2*Math.PI);
	ctx.stroke();
	ctx.closePath();
	ctx.beginPath();
	ctx.arc(XY_size/2,XY_size/2,XY_size/2.7,0,2*Math.PI);
	ctx.stroke();
	ctx.closePath();
	ctx.beginPath();
	ctx.arc(XY_size/2,XY_size/2,XY_size/2,0,2*Math.PI);
	ctx.stroke();
	ctx.closePath();	
}

function draw_Crosshair(){
	if(get_id('Pro Flight X65 Control System (Vendor: 06a3 Product: 0b6a)')){
		gp = get_id('Pro Flight X65 Control System (Vendor: 06a3 Product: 0b6a)');
		XY_size = 250;
		crosshair_size = 15;
		crosshair_thickness = 3;
		crosshair_pos = XY_size/2 - crosshair_size/2;
		dont_know = 3;

		draw_XY();

		//draw crosshair
		canvas = document.getElementById("Stick");
		ctx = canvas.getContext("2d");
		x = parseFloat(Math.round(gp.axes[0] * 100) / 100).toFixed(2);
		y = parseFloat(Math.round(gp.axes[1] * 100) / 100).toFixed(2);
		//canvas.clearRect(0,0,XY_size,XY_size);
		ctx.fillStyle = "rgba(255, 0, 0, 1)";
		ctx.fillRect (crosshair_pos+x*crosshair_pos, crosshair_pos+y*crosshair_pos+crosshair_thickness+dont_know, crosshair_size, crosshair_thickness);
		ctx.fillRect (crosshair_pos+x*crosshair_pos+crosshair_thickness+dont_know, crosshair_pos+y*crosshair_pos, crosshair_thickness, crosshair_size);
	}
	else if(get_id('10-Button USB Joystick (Vendor: 0458 Product: 3019)')){
		gp = get_id('10-Button USB Joystick (Vendor: 0458 Product: 3019)');
		XY_size = 250;
		crosshair_size = 15;
		crosshair_thickness = 3;
		crosshair_pos = XY_size/2 - crosshair_size/2;
		dont_know = 3;

		draw_XY();

		//draw crosshair
		canvas = document.getElementById("Stick");
		ctx = canvas.getContext("2d");
		x = parseFloat(Math.round(gp.axes[0] * 100) / 100).toFixed(2);
		y = parseFloat(Math.round(gp.axes[1] * 100) / 100).toFixed(2);
		//canvas.clearRect(0,0,XY_size,XY_size);
		ctx.fillStyle = "rgba(255, 0, 0, 1)";
		ctx.fillRect (crosshair_pos+x*crosshair_pos, crosshair_pos+y*crosshair_pos+crosshair_thickness+dont_know, crosshair_size, crosshair_thickness);
		ctx.fillRect (crosshair_pos+x*crosshair_pos+crosshair_thickness+dont_know, crosshair_pos+y*crosshair_pos, crosshair_thickness, crosshair_size);
	}
}