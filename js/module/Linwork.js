'use strict';

var Linwork = {
    version:'1.0.1',
    define: (function () {
        var define = function (props) {
            var _ = function () {
                if (this.__$init) {
                    if (typeof this.__$init === 'function') {
                        this.__$init.apply(this, arguments);
                    } else {
                        this.__$init[0].apply(this, arguments);
                    }
                }
            };

            _.prototype = props;

            //模拟构造器
            if (_.prototype.init) {
                _.prototype.__$init = _.prototype.init;
                delete _.prototype.init;
            }

            _.extend = function (_ext) {

                var item,
                    _this = this,
                    _func = function () {
                        if (typeof this.__$init === 'function') {
                            this.__$init.apply(this, arguments);
                        } else {
                            var init = this.__$init || [];
                            for (var i = 0; i < init.length; i++) {
                                init[i].apply(this, arguments);
                            }
                        }
                    };

                for (item in _this) {
                    if (_this.hasOwnProperty(item)) {
                        _func[item] = _this[item];
                    }
                }

                var Noop = function () {
                    this.constructor = _func;
                };

                Noop.prototype = _this.prototype;

                _func.prototype = new Noop();

                for (item in _ext) {

                    if (_ext.hasOwnProperty(item)) {
                        if (item === 'init') {
                            _func.prototype.__$init = [].concat(_func.prototype.__$init || [], _ext.init);
                        } else {
                            _func.prototype[item] = _ext[item];
                        }
                    }
                }

                return _func;
            };

            return _;
        };

        return define;
    }())
}

window.Linwork = Linwork;

module.exports = window.Linwork;