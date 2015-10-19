/// <reference path="../../node_modules/vue/dist/vue.js" />

require('./module/TabsMenu.js');
require('./module/SideMenu.js');


var Config = require('./config.js');
var BaseEntry = require('./module/BaseEntry.js');

var pa = require('./module/PageA.js');
var pb = require('./module/PageB.js');

var entry = BaseEntry.extend({
    init: function (_context) {
        this.$app = new Vue({
            el: _context,
            data: {
                currentView:'pageA',
                data_tabs_menu: Config.menu.tabs,
                data_side_menu: Config.menu.side
            },
            components: {
                pageA: {
                    replace: true,
                    template: '<div>page-a</div>'
                },
                pageB: {
                    replace: true,
                    template: '<div>page-b</div>'
                }
            }
        });

        this.$app.$data.currentView= "pageB"
    },
    $routers: function () {
        var self = this;
        return {
            '/home': function () {
                self.page_home();
            },
            '/setting': function () {
                self.page_setting();
            }
        };
    },
    page_home: function () {
        this.$app.$data.currentView = "pageA";
    },
    page_setting: function () {
        console.log(this)
        this.$app.$data.currentView = "pageB";
    }
});

window.$entry = new entry("#app");
