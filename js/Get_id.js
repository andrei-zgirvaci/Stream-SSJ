function get_id(id){
	try {
		for (i = 0; i < navigator.getGamepads().length; i++)
			if(navigator.getGamepads()[i].id == id){
				return navigator.getGamepads()[i];
				console.log(navigator.getGamepads()[i].id+" connected");
			}
	}catch(e){
		console.log("I cant find "+id);
	}
}