function pageRender(){
	draw_Rotary();
	requestAnimationFrame(pageRender);
}

function connected(){
	if(get_id('10-Button USB Joystick (Vendor: 0458 Product: 3019)')){
		$("#Rotary").css("display","inline");
		$("#log").css("display","none");
		console.log("10-Button USB Joystick (Vendor: 0458 Product: 3019)" + " connected");
		pageRender();
	}
	else if(get_id('Pro Flight X65 Control System (Vendor: 06a3 Product: 0b6a)')){
		$("#Rotary").css("display","inline");
		$("#log").css("display","none");
		console.log("Pro Flight X65 Control System (Vendor: 06a3 Product: 0b6a)" + " connected");
		pageRender();
	}
}

function disconnected(){
	$("#Rotary").css("display","none");
	$("#log").css("display","table-cell");
}