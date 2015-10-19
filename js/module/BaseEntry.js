var Linwork = require('./Linwork');

var Router = require('director').Router;
var routers = null;

var BaseEntry = Linwork.define({
    init: function () {

        if (this.$routers) {
            routers = this.$routers();
        }
        setTimeout(function () {
            Router(routers).init();
        }, 1);
    }
});

module.exports = BaseEntry;