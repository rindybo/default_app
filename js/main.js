var ipc = require('ipc');
var remote = require('remote');
var Menu = remote.require('menu');
var MenuItem = remote.require('menu-item');
var dialog = remote.require('dialog');
var fs = require("fs");
var clipboard = require('clipboard');

var ipc = require('ipc');

require('./js/system/Windows');

var BrowserWindow = remote.require('browser-window');

var loginWindow = null;


var app = {
    logout: function () {
        ipc.sendSync('msg-login-show');
	}
};

//document.getElementById('j-logout').onclick = function () {
//    app.logout();
//}



