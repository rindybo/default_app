require('./component/_TabsMenu');
require('./component/_SideMenu');
require('./component/_Rooms');

var Linwork = require('./Linwork');
var Router = require('director').Router;


var routers = {};

var BaseEntry = Linwork.define({
    init: function () {
        
        this.$routers && this.$routers();
        
        setTimeout(function () {
            Router(routers).init();
        }, 1);
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