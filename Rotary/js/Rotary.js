function init_Rotary(){
	Rotary_size = $('#Rotary_var').css('width').replace('px', '');
	canvas = document.getElementById("Rotary");
	ctx = canvas.getContext("2d");
	canvas.width = Rotary_size;
	canvas.height = Rotary_size;
	canvas.style.borderWidth = $('#Rotary_var').css('border-width');
	canvas.style.borderStyle = $('#Rotary_var').css('border-style');
	canvas.style.borderColor = $('#Rotary_var').css('border-color');
	ctx.clearRect(0,0,Rotary_size,Rotary_size);
}

function draw_Rotary(){
	if(get_id('Pro Flight X65 Control System (Vendor: 06a3 Product: 0b6a)')){
		gp = get_id('Pro Flight X65 Control System (Vendor: 06a3 Product: 0b6a)');
		Rotary_size = $('#Rotary_var').css('width').replace('px', '');
		Rotary_thickness = $('#Rotary_crosshair_var').css('width').replace('px', '');
		Rudder_pos = Rotary_size/2 - Rotary_thickness/2;

		init_Rotary();

		//draw crosshair
		canvas = document.getElementById("Rotary");
		ctx = canvas.getContext("2d");
		x = -1 * parseFloat(Math.round(gp.axes[3] * 100) / 100);
		y = parseFloat(Math.round(gp.axes[4] * 100) / 100);
		//canvas.clearRect(0,0,Rudder_width,Rudder_height);
		ctx.fillStyle = $('#Rotary_crosshair_var').css('background-color');
		ctx.fillRect (0, Rudder_pos+Rudder_pos*y, Rotary_size, Rotary_thickness);
		ctx.fillRect (Rudder_pos+Rudder_pos*x, 0, Rotary_thickness, Rotary_size);
	}
	else if(get_id('10-Button USB Joystick (Vendor: 0458 Product: 3019)')){
		gp = get_id('10-Button USB Joystick (Vendor: 0458 Product: 3019)');
		Rotary_size = $('#Rotary_var').css('width').replace('px', '');
		Rotary_thickness = $('#Rotary_crosshair_var').css('width').replace('px', '');
		Rudder_pos = Rotary_size/2 - Rotary_thickness/2;

		init_Rotary();

		//draw crosshair
		canvas = document.getElementById("Rotary");
		ctx = canvas.getContext("2d");
		x = parseFloat(Math.round(gp.axes[0] * 100) / 100);
		y = parseFloat(Math.round(gp.axes[1] * 100) / 100);
		//canvas.clearRect(0,0,Rudder_width,Rudder_height);
		ctx.fillStyle = $('#Rotary_crosshair_var').css('background-color');
		ctx.fillRect (0, Rudder_pos+Rudder_pos*y, Rotary_size, Rotary_thickness);
		ctx.fillRect (Rudder_pos+Rudder_pos*x, 0, Rotary_thickness, Rotary_size);
	}
}