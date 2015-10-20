/// <reference path="../node_modules/vue/dist/vue.js" />

var Config = require('./config.js');
var BaseEntry = require('./module/BaseEntry.js');

var Entry = BaseEntry.extend({
    init: function (_context) {
        this.$app = new Vue({
            el: _context,
            data: {
                currentView: 'page-a',
                data_tabs_menu: Config.menu.tabs,
                data_side_menu: Config.menu.side
            }
        });

        this.$app.$data.currentView = "pageB";
    },
    $routers: function () {

        this.$action('/home', function ($app) {
            $app.$data.currentView = "page-a";
        }).$action('/setting', function ($app) {
            
            $app.$data.currentView = "page-b";

            window.main_ipc.emit('test', 111, new Date().toISOString()).then(function(rs){
                alert(rs)
            });
            
            

        })

    }
});

window.$entry = new Entry("#app");
