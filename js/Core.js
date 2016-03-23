function reportOnGamepad() {
	draw_Crosshair();
	draw_Throttle1();
	draw_Throttle2();
	draw_Rudder();
}

function canGame() {
	return "getGamepads" in navigator;
}

var hasGP = false;
var repGP;
	
$(document).ready(function() {
	if(canGame()) {
		//if connected
		$(window).on("gamepadconnected", function() {
			if(get_id('10-Button USB Joystick (Vendor: 0458 Product: 3019)')){
				document.getElementById("Throttle1").style.display = 'inline';
				document.getElementById("Stick").style.display = 'inline';
				document.getElementById("Throttle2").style.display = 'inline';
				document.getElementById("Rudder").style.display = 'block';
			}
			if(get_id('Pro Flight X65 Control System (Vendor: 06a3 Product: 0b6a)')){
				document.getElementById("Throttle1").style.display = 'inline';
				document.getElementById("Stick").style.display = 'inline';
				document.getElementById("Throttle2").style.display = 'inline';
				document.getElementById("Rudder").style.display = 'block';
			}
			if(get_id('VKB Tiny BOX  (Vendor: 231d Product: 011d)')){
				document.getElementById("Throttle1").style.display = 'inline';
				document.getElementById("Stick").style.display = 'inline';
				document.getElementById("Throttle2").style.display = 'inline';
				document.getElementById("Rudder").style.display = 'block';
			}
			hasGP = true;
			repGP = window.setInterval(reportOnGamepad,100);
		});
		//if disconnected
		$(window).on("gamepaddisconnected", function() {
			init_Crosshair();
			init_Throttle1();
			init_Throttle2();
			init_Rudder();
			console.log("gamepad disconnected");
			window.clearInterval(repGP);
		});
		//setup an interval for Chrome
		var checkGP = window.setInterval(function() {
			console.log('checking for changes');
			if(navigator.getGamepads()) {
				if(!hasGP) $(window).trigger("gamepadconnected");
				window.clearInterval(checkGP);
			}
		}, 500);
	}
});