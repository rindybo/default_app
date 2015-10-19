var remote = require('remote');
var Menu = remote.require('menu');
var MenuItem = remote.require('menu-item');

var $menu;

function initContextMenu() {

	$menu = new Menu();
	$menu.append(new MenuItem({
		label: 'Copy',
		click: function () {
			//clipboard.writeText(editor.getSelection(), 'copy');
		}
	}));

	$menu.append(new MenuItem({
		label: 'Cut',
		click: function () {
			// clipboard.writeText(editor.getSelection(), 'copy');
		}
	}));

	$menu.append(new MenuItem({
		label: 'Paste',
		click: function () {
			// editor.replaceSelection(clipboard.readText('copy'));
		}
	}));

	window.addEventListener('contextmenu', function (ev) {
		ev.preventDefault();
		$menu.popup(remote.getCurrentWindow(), ev.x, ev.y);
	}, false);
};

module.exports = initContextMenu;
