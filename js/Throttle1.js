function init_Throttle1(){
	canvas = document.getElementById("Throttle1");
	canvas.height = 250;
	canvas.width = 14;
}

function draw_Throttle1(){
	if(get_id('10-Button USB Joystick (Vendor: 0458 Product: 3019)')){
		gp = get_id('10-Button USB Joystick (Vendor: 0458 Product: 3019)');
		Throttle_height = 250;
		Throttle_width = 14;

		init_Throttle1();

		//draw throttle1
		canvas = document.getElementById("Throttle1");
		ctx = canvas.getContext("2d");
		y_throttle1 = parseFloat(Math.round(gp.axes[1] * 100) / 100).toFixed(2);
		//canvas.clearRect(0,0,Throttle_size,Throttle_size);
		ctx.fillStyle = "rgba(0, 128, 0, 1)";
		//throttle deadzone
		if(y_throttle1 < -0.93)
			ctx.fillRect (0, Throttle_height/2+y_throttle1*Throttle_height/2-8, Throttle_width, Throttle_height+8);
		else
			ctx.fillRect (0, Throttle_height/2+y_throttle1*Throttle_height/2, Throttle_width, Throttle_height);
	}
	else if(get_id('Pro Flight X65 Control System (Vendor: 06a3 Product: 0b6a)')){	
		gp = get_id('Pro Flight X65 Control System (Vendor: 06a3 Product: 0b6a)');
		Throttle_size = 250;

		init_Throttle1();

		//draw throttle1
		canvas = document.getElementById("Throttle1");
		ctx = canvas.getContext("2d");
		//gp.axes[2]
		y_throttle1 = parseFloat(Math.round(gp.axes[2] * 100) / 100).toFixed(2);
		//canvas.clearRect(0,0,Throttle_size,Throttle_size);
		ctx.fillStyle = "rgba(0, 128, 0, 1)";
		//throttle deadzone
		if(y_throttle1 < -0.93)
			ctx.fillRect (0, Throttle_size/2+y_throttle1*Throttle_size/2-8, Throttle_size/18, Throttle_size+8);
		else
			ctx.fillRect (0, Throttle_size/2+y_throttle1*Throttle_size/2, Throttle_size/18, Throttle_size);
	}
}