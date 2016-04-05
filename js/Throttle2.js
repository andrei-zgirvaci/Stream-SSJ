function init_Throttle2(){
	canvas = document.getElementById("Throttle2");
	canvas.height = $('#Throttle_var').css('height').replace('px', '');
	canvas.width = $('#Throttle_var').css('width').replace('px', '');
}

function draw_Throttle2(){
	if(get_id('Pro Flight X65 Control System (Vendor: 06a3 Product: 0b6a)')){
		gp = get_id('Pro Flight X65 Control System (Vendor: 06a3 Product: 0b6a)');
		Throttle_height = $('#Throttle_var').css('height').replace('px', '');
		Throttle_width = $('#Throttle_var').css('width').replace('px', '');
		Throttle_thickness = $('#Throttle2_crosshair_var').css('width').replace('px', '');;
		Throttle_pos = Throttle_height/2 - Throttle_thickness/2;

		init_Throttle2();

		//draw Throttle2
		canvas = document.getElementById("Throttle2");
		ctx = canvas.getContext("2d");
		y_Throttle2 = parseFloat(Math.round(gp.axes[6] * 100) / 100);
		//canvas.clearRect(0,0,Throttle_width,Throttle_height);
		ctx.fillStyle = $('#Throttle2_crosshair_var').css('background-color');
		//throttle deadzone
		ctx.fillRect (0, Throttle_pos + y_Throttle2*Throttle_pos, Throttle_width, Throttle_thickness);
	}
	else if(get_id('10-Button USB Joystick (Vendor: 0458 Product: 3019)')){
		gp = get_id('10-Button USB Joystick (Vendor: 0458 Product: 3019)');
		Throttle_height = $('#Throttle_var').css('height').replace('px', '');
		Throttle_width = $('#Throttle_var').css('width').replace('px', '');
		Throttle_thickness = $('#Throttle1_crosshair_var').css('width').replace('px', '');;
		Throttle_pos = Throttle_height/2 - Throttle_thickness/2;

		init_Throttle2();

		//draw Throttle2
		canvas = document.getElementById("Throttle2");
		ctx = canvas.getContext("2d");
		y_Throttle2 = parseFloat(Math.round(gp.axes[5] * 100) / 100);
		//canvas.clearRect(0,0,Throttle_width,Throttle_height);
		ctx.fillStyle = $('#Throttle2_crosshair_var').css('background-color');
		//throttle deadzone
		ctx.fillRect (0, Throttle_pos + y_Throttle2*Throttle_pos, Throttle_width, Throttle_thickness);
	}
}