function init_Throttle1(){
	canvas = document.getElementById("Throttle1");
	canvas.height = $('#Throttle_var').css('height').replace('px', '');
	canvas.width = $('#Throttle_var').css('width').replace('px', '');
	canvas.style.borderWidth = $('#Throttle_var').css('border-width');
	canvas.style.borderStyle = $('#Throttle_var').css('border-style');
	canvas.style.borderColor = $('#Throttle_var').css('border-color');
}

function draw_Throttle1(){
	if(get_id('Pro Flight X65 Control System (Vendor: 06a3 Product: 0b6a)')){	
		gp = get_id('Pro Flight X65 Control System (Vendor: 06a3 Product: 0b6a)');
		Throttle_height = $('#Throttle_var').css('height').replace('px', '');
		Throttle_width = $('#Throttle_var').css('width').replace('px', '');
		Throttle_thickness = $('#Throttle1_crosshair_var').css('width').replace('px', '');;
		Throttle_pos = Throttle_height/2 - Throttle_thickness/2;

		init_Throttle1();

		//draw throttle1
		canvas = document.getElementById("Throttle1");
		ctx = canvas.getContext("2d");
		y_throttle1 = parseFloat(Math.round(gp.axes[2] * 100) / 100);
		//canvas.clearRect(0,0,Throttle_width,Throttle_height);
		ctx.fillStyle = $('#Throttle1_crosshair_var').css('background-color');
		//throttle deadzone
		ctx.fillRect (0, Throttle_pos + y_throttle1*Throttle_pos, Throttle_width, Throttle_thickness);
	}
	else if(get_id('10-Button USB Joystick (Vendor: 0458 Product: 3019)')){
		gp = get_id('10-Button USB Joystick (Vendor: 0458 Product: 3019)');
		Throttle_height = $('#Throttle_var').css('height').replace('px', '');
		Throttle_width = $('#Throttle_var').css('width').replace('px', '');
		Throttle_thickness = $('#Throttle1_crosshair_var').css('width').replace('px', '');;
		Throttle_pos = Throttle_height/2 - Throttle_thickness/2;

		init_Throttle1();

		//draw throttle1
		canvas = document.getElementById("Throttle1");
		ctx = canvas.getContext("2d");
		y_throttle1 = parseFloat(Math.round(gp.axes[5] * 100) / 100);
		//canvas.clearRect(0,0,Throttle_width,Throttle_height);
		ctx.fillStyle = $('#Throttle1_crosshair_var').css('background-color');
		//throttle deadzone
		ctx.fillRect (0, Throttle_pos + y_throttle1*Throttle_pos, Throttle_width, Throttle_thickness);
	}
}