function init_Rudder(){
	Rudder_size = 250;
	Rudder_thickness = 6;
	Rudder_pos = Rudder_size/2 - Rudder_thickness/2;
	canvas = document.getElementById("Rudder");
	//change canvas size dynamically
	canvas.height = Rudder_size/9;
	canvas.width = Rudder_size;
}

function draw_Rudder(){
	if(get_id('VKB Tiny BOX  (Vendor: 231d Product: 011d)')){
		gp = get_id('VKB Tiny BOX  (Vendor: 231d Product: 011d)');
		Rudder_size = 250;
		Rudder_thickness = 6;
		Rudder_pos = Rudder_size/2 - Rudder_thickness/2;
		
		init_Rudder();

		//draw rudder
		canvas = document.getElementById("Rudder");
		ctx = canvas.getContext("2d");
		x_Rudder = parseFloat(Math.round(gp.axes[0] * 100) / 100).toFixed(2);
		//canvas.clearRect(0,0,Rudder_size,Rudder_size);
		ctx.fillStyle = "rgba(255, 0, 0, 1)";
		ctx.fillRect (Rudder_pos + x_Rudder*Rudder_pos, 0, Rudder_thickness, Rudder_size);
	}
	else if(get_id('10-Button USB Joystick (Vendor: 0458 Product: 3019)')){
		gp = get_id('10-Button USB Joystick (Vendor: 0458 Product: 3019)');
		Rudder_size = 250;
		Rudder_thickness = 6;
		Rudder_pos = Rudder_size/2 - Rudder_thickness/2;
		
		init_Rudder();

		//draw rudder
		canvas = document.getElementById("Rudder");
		ctx = canvas.getContext("2d");
		x_Rudder = parseFloat(Math.round(gp.axes[0] * 100) / 100).toFixed(2);
		//canvas.clearRect(0,0,Rudder_size,Rudder_size);
		ctx.fillStyle = "rgba(255, 0, 0, 1)";
		ctx.fillRect (Rudder_pos + x_Rudder*Rudder_pos, 0, Rudder_thickness, Rudder_size);
	}
}