function init_Throttle2(){
	canvas = document.getElementById("Throttle2");
	canvas.height = 250;
	canvas.width = 14;
}

function draw_Throttle2(){
	if(get_id('10-Button USB Joystick (Vendor: 0458 Product: 3019)')){
		gp = get_id('10-Button USB Joystick (Vendor: 0458 Product: 3019)');
		Throttle_height = 250;
		Throttle_width = 14;

		init_Throttle2();

		//draw throttle2
		canvas = document.getElementById("Throttle2");
		ctx = canvas.getContext("2d");
		y_throttle2 = parseFloat(Math.round(gp.axes[1] * 100) / 100).toFixed(2);
		//canvas.clearRect(0,0,Throttle_size,Throttle_size);
		ctx.fillStyle = "rgba(0, 128, 0, 1)";
		ctx.fillRect (0, Throttle_height/2+y_throttle2*Throttle_height/2, Throttle_width, Throttle_height);
	}
	else if(get_id('Pro Flight X65 Control System (Vendor: 06a3 Product: 0b6a)')){
		gp = get_id('Pro Flight X65 Control System (Vendor: 06a3 Product: 0b6a)');
		Throttle_size = 250;

		init_Throttle2();

		//draw throttle2
		canvas = document.getElementById("Throttle2");
		ctx = canvas.getContext("2d");
		//gp.axes[6]
		y_throttle2 = parseFloat(Math.round(gp.axes[6] * 100) / 100).toFixed(2);
		//canvas.clearRect(0,0,Throttle_size,Throttle_size);
		ctx.fillStyle = "rgba(0, 128, 0, 1)";
		ctx.fillRect (0, Throttle_size/2+y_throttle2*Throttle_size/2, Throttle_size/18, Throttle_size);
	}
}