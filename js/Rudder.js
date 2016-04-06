function init_Rudder(){
	canvas = document.getElementById("Rudder");
	ctx = canvas.getContext("2d");
	canvas.height = $('#Rudder_var').css('height').replace('px', '');
	canvas.width = $('#Stick_var').css('width').replace('px', '');
	canvas.style.borderWidth = $('#Rudder_var').css('border-width');
	canvas.style.borderStyle = $('#Rudder_var').css('border-style');
	canvas.style.borderColor = $('#Rudder_var').css('border-color');
	canvas.style.left = parseInt($('#Throttle_var').css('width').replace('px', ''))*2 + parseInt($('#Throttle_var').css('border-right').replace('px', '')) + parseInt($('#Stick_var').css('border-right').replace('px', '')) + 12 - parseInt($('#Rudder_var').css('border-width').replace('px', '')) + "px";
	//draw horizontal line
	Line_thickness = $('#Rudder_var').css('width').replace('px', '');
	ctx.fillStyle = $('#Rudder_var').css('background-color');
	ctx.fillRect (0,canvas.height/2-Line_thickness/2, canvas.width, Line_thickness);
}

function draw_Rudder(){
	if(get_id('VKB Tiny BOX  (Vendor: 231d Product: 011d)')){
		gp = get_id('VKB Tiny BOX  (Vendor: 231d Product: 011d)');
		Rudder_height = $('#Rudder_var').css('height').replace('px', '');
		Rudder_width = $('#Stick_var').css('width').replace('px', '');
		Rudder_thickness = $('#Ruder_crosshair_var').css('width').replace('px', '');
		Rudder_pos = Rudder_width/2 - Rudder_thickness/2;
		
		init_Rudder();

		//draw rudder
		canvas = document.getElementById("Rudder");
		ctx = canvas.getContext("2d");
		x_Rudder = parseFloat(Math.round(gp.axes[0] * 100) / 100);
		//canvas.clearRect(0,0,Rudder_width,Rudder_height);
		ctx.fillStyle = $('#Ruder_crosshair_var').css('background-color');
		ctx.fillRect (Rudder_pos + x_Rudder*Rudder_pos, 0, Rudder_thickness, Rudder_height);
	}
	else if(get_id('10-Button USB Joystick (Vendor: 0458 Product: 3019)')){
		gp = get_id('10-Button USB Joystick (Vendor: 0458 Product: 3019)');
		Rudder_height = $('#Rudder_var').css('height').replace('px', '');
		Rudder_width = $('#Stick_var').css('width').replace('px', '');
		Rudder_thickness = $('#Ruder_crosshair_var').css('width').replace('px', '');
		Rudder_pos = Rudder_width/2 - Rudder_thickness/2;
		
		init_Rudder();

		//draw rudder
		canvas = document.getElementById("Rudder");
		ctx = canvas.getContext("2d");
		x_Rudder = parseFloat(Math.round(gp.axes[0] * 100) / 100);
		//canvas.clearRect(0,0,Rudder_width,Rudder_height);
		ctx.fillStyle = $('#Ruder_crosshair_var').css('background-color');
		ctx.fillRect (Rudder_pos + x_Rudder*Rudder_pos, 0, Rudder_thickness, Rudder_height);
	}
}