require('./component/_TabsMenu');
require('./component/_SideMenu');
require('./component/_Rooms');

var Linwork = require('./Linwork');
var Router = require('director').Router;
var Guid = require('node-uuid');


var routers = {};

var BaseEntry = Linwork.define({
    init: function () {
        
        this._init_menu_data();
        
        this.$routers && this.$routers();
        
        setTimeout(function () {
            Router(routers).init();
        }, 1);
    },
    //初始化菜单数据
    _init_menu_data:function(){
        
        window.main_ipc.emit('exeSql','select * from menu').then(function (data) {
            
            this.$menu_data = data;
            
        }.bind(this));
    },
    $guid:function(){
        return Guid.v1();
    },
    $action:function(path,callback){
        var self = this;
        routers[path] = function() {
            callback.call(self,self.$app);
        }
        
        return this;
    }
});

module.exports = BaseEntry;