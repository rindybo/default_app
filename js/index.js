/// <reference path="../node_modules/vue/dist/vue.js" />

require('./module/TabsMenu.js');
require('./module/SideMenu.js');


var Config = require('./config.js');
var BaseEntry = require('./module/BaseEntry.js');

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
        
        this.
        $action('/home',function($app){
            $app.$data.currentView = "pageA";
        })
        .$action('/setting',function($app){
             $app.$data.currentView = "pageB";
        })
        
    }
});

window.$entry = new entry("#app");
