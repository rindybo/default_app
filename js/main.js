var ipc = require('ipc');
var remote = require('remote');
var Menu = remote.require('menu');
var MenuItem = remote.require('menu-item');
var dialog = remote.require('dialog');
var fs = require("fs");
var clipboard = require('clipboard');

var ipc = require('ipc');
var mysql = require('./js/system/Mysql');

require('./js/system/Windows');

var BrowserWindow = remote.require('browser-window');

var loginWindow = null;


var app = {
    logout: function () {
        ipc.sendSync('msg-login-show');
	}
};

var uuid = require('node-uuid');

window.main_ipc.on({
	test: function () {
		
		mysql('insert into rooms (guid,name) values("'+uuid.v1()+'","456")', function (rows, field) {

			this.returnValue(rows)


		}.bind(this));

	}
});




