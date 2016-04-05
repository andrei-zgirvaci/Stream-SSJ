function draw_XY(){
	XY_size = $('#Stick_var').css('width').replace('px', '');
	XY_thickness = 2;
	canvas = document.getElementById("Stick");
	ctx = canvas.getContext("2d");
	canvas.height = XY_size;
	canvas.width = XY_size;
	canvas.style.borderWidth = $('#Stick_var').css('border-width');
	canvas.style.borderStyle = $('#Stick_var').css('border-style');
	canvas.style.borderColor = $('#Stick_var').css('border-color');
	ctx.fillStyle = $('#Stick_xy_color_var').css('background-color');
    //draw x
	ctx.fillRect (0,XY_size/2-XY_thickness/2, XY_size/2-crosshair_thickness*4, XY_thickness);
	ctx.fillRect (XY_size/2+crosshair_thickness*4,XY_size/2-XY_thickness/2, XY_size, XY_thickness);
	//draw y
	ctx.fillRect (XY_size/2-XY_thickness/2, 0, XY_thickness, XY_size/2-crosshair_thickness*4);
	ctx.fillRect (XY_size/2-XY_thickness/2, XY_size/2+crosshair_thickness*4, XY_thickness, XY_size/2);
	//diagonalele
	ctx.strokeStyle = $('#Stick_xy_diag_color_var').css('background-color');
    ctx.lineWidth = XY_thickness;
    crosshair_size = $('#Stick_crosshair_var').css('width').replace('px', '');
	crosshair_thickness = crosshair_size/5;
	//diagonala x
	ctx.beginPath();
    ctx.moveTo(crosshair_thickness*2,crosshair_thickness*2);
    ctx.lineTo(XY_size/2-crosshair_thickness*2.83, XY_size/2-crosshair_thickness*2.83);
    ctx.moveTo(XY_size/2+crosshair_thickness*2.83, XY_size/2+crosshair_thickness*2.83);
    ctx.lineTo(XY_size-crosshair_thickness*2,XY_size-crosshair_thickness*2);
    ctx.stroke();
    ctx.closePath();
	//diagonala y
	ctx.beginPath();
    ctx.moveTo(XY_size-crosshair_thickness*2, crosshair_thickness*2);
    ctx.lineTo(XY_size/2+crosshair_thickness*2.83, XY_size/2-crosshair_thickness*2.83);
    ctx.moveTo(XY_size/2-crosshair_thickness*2.83, XY_size/2+crosshair_thickness*2.83);
    ctx.lineTo(crosshair_thickness*2,XY_size-crosshair_thickness*2);
    ctx.stroke();
    ctx.closePath();
	//fill with circles
	ctx.strokeStyle = $('#Stick_circle_color_var').css('background-color');
	ctx.lineWidth = 2;
	ctx.beginPath();
	ctx.arc(XY_size/2,XY_size/2,XY_size/10,0,2*Math.PI);
	ctx.stroke();
	ctx.closePath();
	ctx.beginPath();
	ctx.arc(XY_size/2,XY_size/2,XY_size/5,0,2*Math.PI);
	ctx.stroke();
	ctx.closePath();
	ctx.beginPath();
	ctx.arc(XY_size/2,XY_size/2,XY_size/3.33,0,2*Math.PI);
	ctx.stroke();
	ctx.closePath();
	ctx.beginPath();
	ctx.arc(XY_size/2,XY_size/2,XY_size/2.5,0,2*Math.PI);
	ctx.stroke();
	ctx.closePath();
	ctx.beginPath();
	ctx.arc(XY_size/2,XY_size/2,XY_size/2-1.5,0,2*Math.PI);
	ctx.stroke();
	ctx.closePath();
}

function draw_Crosshair(){
	if(get_id('Pro Flight X65 Control System (Vendor: 06a3 Product: 0b6a)')){
		gp = get_id('Pro Flight X65 Control System (Vendor: 06a3 Product: 0b6a)');
		XY_size = $('#Stick_var').css('width').replace('px', '');
		crosshair_size = $('#Stick_crosshair_var').css('width').replace('px', '');
		crosshair_thickness = crosshair_size/5;
		crosshair_pos = XY_size/2 - crosshair_size/2;

		draw_XY();

		//draw crosshair
		canvas = document.getElementById("Stick");
		ctx = canvas.getContext("2d");
		x = parseFloat(Math.round(gp.axes[0] * 100) / 100);
		y = parseFloat(Math.round(gp.axes[1] * 100) / 100);
		//canvas.clearRect(0,0,XY_size,XY_size);
		ctx.fillStyle = $('#Stick_crosshair_var').css('background-color');
		ctx.fillRect (crosshair_pos+x*crosshair_pos, crosshair_pos+y*crosshair_pos+crosshair_thickness*2, crosshair_size, crosshair_thickness);
		ctx.fillRect (crosshair_pos+x*crosshair_pos+crosshair_thickness*2, crosshair_pos+y*crosshair_pos, crosshair_thickness, crosshair_size);
	}
	else if(get_id('10-Button USB Joystick (Vendor: 0458 Product: 3019)')){
		gp = get_id('10-Button USB Joystick (Vendor: 0458 Product: 3019)');
		XY_size = $('#Stick_var').css('width').replace('px', '');
		crosshair_size = $('#Stick_crosshair_var').css('width').replace('px', '');
		crosshair_thickness = crosshair_size/5;
		crosshair_pos = XY_size/2 - crosshair_size/2;

		draw_XY();

		//draw crosshair
		canvas = document.getElementById("Stick");
		ctx = canvas.getContext("2d");
		x = parseFloat(Math.round(gp.axes[0] * 100) / 100);
		y = parseFloat(Math.round(gp.axes[1] * 100) / 100);
		//canvas.clearRect(0,0,XY_size,XY_size);
		ctx.fillStyle = $('#Stick_crosshair_var').css('background-color');
		ctx.fillRect (crosshair_pos+x*crosshair_pos, crosshair_pos+y*crosshair_pos+crosshair_thickness*2, crosshair_size, crosshair_thickness);
		ctx.fillRect (crosshair_pos+x*crosshair_pos+crosshair_thickness*2, crosshair_pos+y*crosshair_pos, crosshair_thickness, crosshair_size);
	}
}