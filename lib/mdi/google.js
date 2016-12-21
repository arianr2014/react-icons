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

var MdiGoogle = function (_React$Component) {
    _inherits(MdiGoogle, _React$Component);

    function MdiGoogle() {
        _classCallCheck(this, MdiGoogle);

        return _possibleConstructorReturn(this, (MdiGoogle.__proto__ || Object.getPrototypeOf(MdiGoogle)).apply(this, arguments));
    }

    _createClass(MdiGoogle, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 21.354,11.1036L 12.18,11.1036L 12.18,13.8258L 18.6862,13.8258C 18.3648,17.6432 15.1889,19.2711 12.191,19.2711C 8.35549,19.2711 5.00866,16.2534 5.00866,12.0236C 5.00866,7.90323 8.19906,4.72992 12.1994,4.72992C 15.2858,4.72992 17.1044,6.69742 17.1044,6.69742L 19.0105,4.72357C 19.0105,4.72357 16.564,2 12.102,2C 6.42078,2 2.02525,6.79543 2.02525,11.9751C 2.02525,17.0506 6.16002,22 12.2471,22C 17.601,22 21.5201,18.3323 21.5201,12.9091C 21.5201,11.7649 21.354,11.1036 21.354,11.1036L 21.354,11.1036 Z ' })
                )
            );
        }
    }]);

    return MdiGoogle;
}(React.Component);

exports.default = MdiGoogle;
module.exports = exports['default'];