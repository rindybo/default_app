var Linwork = require('./Linwork');

var Router = require('director').Router;
var routers = {};

var BaseEntry = Linwork.define({
    init: function () {
        
        this.$routers && this.$routers();
        
        setTimeout(function () {
            console.log(routers)
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