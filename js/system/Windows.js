var remote = require('remote');

window.onkeydown = function(e){
	if(e.which === 116){
		remote.getCurrentWindow().reload();
	}
	else if(e.which === 123){	
		remote.getCurrentWindow().toggleDevTools();
	}
}