var ipc = require('ipc');
var remote = require('remote');

require('./js/Windows');
require('./js/Mysql');


var BrowserWindow = remote.require('browser-window');

var IndexWindow = null;

var login = function () {

    IndexWindow = new BrowserWindow({  height: 768, width: 1024 });
    IndexWindow.loadUrl('file://' + __dirname + '/index.html');

    IndexWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        IndexWindow = null;
        ipc.sendSync('msg-main-close');
    });

    ipc.sendSync('msg-main-hide');

    ipc.on('msg-login-show', function () {
        ipc.sendSync('msg-main-show');
    })
}

document.getElementById('btn-login').onclick = function(){
	
    login();
	
}