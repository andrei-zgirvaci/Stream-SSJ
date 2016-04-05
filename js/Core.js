function pageRender(){
	draw_Crosshair();
	draw_Throttle1();
	draw_Throttle2();
	draw_Rudder();
	requestAnimationFrame(pageRender);
}

function connected(){
	if(get_id('10-Button USB Joystick (Vendor: 0458 Product: 3019)')){
		$("#Throttle1").css("display","inline");
		$("#Stick").css("display","inline");
		$("#Throttle2").css("display","inline");
		$("#Rudder").css("display","block");
		$("#log").css("display","none");
		console.log("10-Button USB Joystick (Vendor: 0458 Product: 3019)" + " connected");
		pageRender();
	}
	else if(get_id('Pro Flight X65 Control System (Vendor: 06a3 Product: 0b6a)')){
		$("#Throttle1").css("display","inline");
		$("#Stick").css("display","inline");
		$("#Throttle2").css("display","inline");
		$("#Rudder").css("display","block");
		$("#log").css("display","none");
		console.log("Pro Flight X65 Control System (Vendor: 06a3 Product: 0b6a)" + " connected");
		pageRender();
	}
	else if(get_id('VKB Tiny BOX  (Vendor: 231d Product: 011d)')){
		$("#Throttle1").css("display","inline");
		$("#Stick").css("display","inline");
		$("#Throttle2").css("display","inline");
		$("#Rudder").css("display","block");
		$("#log").css("display","none");
		console.log("VKB Tiny BOX  (Vendor: 231d Product: 011d)" + " connected");
		pageRender();
	}
}

function disconnected(){
	$("#Throttle1").css("display","none");
	$("#Stick").css("display","none");
	$("#Throttle2").css("display","none");
	$("#Rudder").css("display","none");
	$("#log").css("display","table-cell");
}