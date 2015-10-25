/// <reference path="../node_modules/vue/dist/vue.js" />

var Config = require('./config.js');
var BaseEntry = require('./module/BaseEntry.js');

var Entry = BaseEntry.extend({
    init: function (_context) {

        this.$app = new Vue({
            el: _context,
            data: {
                currentView: 'page-a',
                menu_data_tabs: null,
                menu_data_side: null
            }
        });

        this.initMenu();
    },
    $routers: function () {

        // this.$action('/home', function ($app) {
        //     $app.$data.currentView = "page-a";
        // }).$action('/setting', function ($app) {
            
        //     $app.$data.currentView = "page-b";

        //     window.main_ipc.emit('test', 111, new Date().toISOString()).then(function(rs){
        //         console.log(rs)
        //     });
            
            

        // })

    },
    initMenu: function () {

        var self = this;
        var data = self.$menu_data;

        this.menu_data_tabs = [];
        this.menu_data_side = [];

        data.forEach(function (row) {

            self.menu_data.push(row);

            if (row.active) {

            } else {
                self.menu_data.tabs.push(row)
            }
        });

        this.$app.$data.menu_data_tabs = this.menu_data_tabs;
        this.$app.$data.menu_data_side = this.menu_data_side;

        return this;
    }
});

window.$entry = new Entry("#app");
