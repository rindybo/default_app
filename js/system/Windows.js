var remote = require('remote');
var Promise = require('es6-promise').Promise;

var MessageQueue = {};

window.onkeydown = function (e) {
	if (e.which === 116) {
		remote.getCurrentWindow().reload();
	}
	else if (e.which === 123) {
		remote.getCurrentWindow().toggleDevTools();
	}
};

/*
 * 远程监听系统
 */

window.main_ipc = {
	on: function () {
		var args = arguments;
		if (args.length === 1 && typeof args[0] === 'object') {
			var target = args[0];
			for (var event in target) {
				MessageQueue[event] = target[event];
			}
		} else if (args.length === 2 && typeof args[0] === 'string') {
			MessageQueue[args[0]] = args[1];
		}

		console.log(MessageQueue)
	},
	emit: function () {
		var name,
			args = arguments;

		if (args.length > 0) {

			name = args[0];

			if (MessageQueue[name]) {

				return new Promise(function (resolve, reject) {

					resolve(MessageQueue[name].apply(window, [].slice.call(args, 1)));

				});

			}
		} else {
			throw new TypeError('main_ipc:'+name+' is undefine');
		}
	}
} 