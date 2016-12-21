'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdiUsb = function (_React$Component) {
    _inherits(MdiUsb, _React$Component);

    function MdiUsb() {
        _classCallCheck(this, MdiUsb);

        return _possibleConstructorReturn(this, (MdiUsb.__proto__ || Object.getPrototypeOf(MdiUsb)).apply(this, arguments));
    }

    _createClass(MdiUsb, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 14.9994,6.99807L 14.9994,10.9981L 15.9994,10.9981L 15.9994,12.9981L 12.9994,12.9981L 12.9994,4.99807L 14.9994,4.99807L 11.9994,0.998068L 8.9994,4.99807L 10.9994,4.99807L 10.9994,12.9981L 7.9994,12.9981L 7.9994,10.9281C 8.7034,10.5611 9.1994,9.84707 9.1994,8.99807C 9.1994,7.78307 8.2144,6.79807 6.9994,6.79807C 5.7844,6.79807 4.7994,7.78307 4.7994,8.99807C 4.7994,9.84707 5.2954,10.5611 5.9994,10.9281L 5.9994,12.9981C 5.9994,14.1031 6.8934,14.9981 7.9994,14.9981L 10.9994,14.9981L 10.9994,18.0491C 10.2894,18.4141 9.7994,19.1451 9.7994,19.9981C 9.7994,21.2131 10.7844,22.1981 11.9994,22.1981C 13.2144,22.1981 14.1994,21.2131 14.1994,19.9981C 14.1994,19.1451 13.7084,18.4141 12.9994,18.0491L 12.9994,14.9981L 15.9994,14.9981C 17.1044,14.9981 17.9994,14.1031 17.9994,12.9981L 17.9994,10.9981L 18.9994,10.9981L 18.9994,6.99807L 14.9994,6.99807 Z ' })
                )
            );
        }
    }]);

    return MdiUsb;
}(React.Component);

exports.default = MdiUsb;
module.exports = exports['default'];