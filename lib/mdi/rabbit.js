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

var MdiRabbit = function (_React$Component) {
    _inherits(MdiRabbit, _React$Component);

    function MdiRabbit() {
        _classCallCheck(this, MdiRabbit);

        return _possibleConstructorReturn(this, (MdiRabbit.__proto__ || Object.getPrototypeOf(MdiRabbit)).apply(this, arguments));
    }

    _createClass(MdiRabbit, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 22,17.5C 22,18.3284 21.3284,19 20.5,19C 19.9219,19 19.4202,18.673 19.1697,18.1938C 18.7229,19.1698 18.6425,20.2047 18.7879,20.9349C 19,22 18,22 18,22L 10,22C 9,22 8,22 7.83333,21.5C 7.66666,21 8.33333,20 10,19.5L 10.8778,19.2954C 5.822,15.7651 12,14 12,14C 10,13 8,14.25 8,15.25C 8,17.25 8.4555,17.9623 8.25,18.25C 7,20 6,22 6,22L 3.5,22C 3,19 6,21 6,19C 6,18 7.31348,16.8558 6.5,15.5C 5.63929,14.0655 5.93097,12.7956 6.33593,11.9737C 5.39301,11.9116 3.70271,11.7027 3,11C 2,10 5,6 7,6C 7.68395,6 8.13401,6.11695 8.51014,6.35084L 9.68648,2.95591C 9.8673,2.43406 10.4369,2.15761 10.9588,2.33842C 11.4806,2.51924 11.7571,3.08887 11.5763,3.61071L 10.8193,5.79522L 12.8266,4.63634C 13.3048,4.3602 13.9164,4.52408 14.1926,5.00237C 14.4687,5.48066 14.3049,6.09225 13.8266,6.36839L 10.3872,8.35409L 11,9C 13,11 15.6395,9.00967 17.5,10.25C 21.3615,12.8244 21.2881,14.881 20.7452,16.0199C 21.457,16.137 22,16.7551 22,17.5 Z M 5.73044,7.93594C 5.27258,8.24477 4.9445,8.75608 5.25334,9.21395C 5.56217,9.67181 6.39096,9.65285 6.84882,9.34401C 7.30668,9.03518 7.22023,8.55343 6.9114,8.09557C 6.60257,7.63771 6.1883,7.62711 5.73044,7.93594 Z ' })
                )
            );
        }
    }]);

    return MdiRabbit;
}(React.Component);

exports.default = MdiRabbit;
module.exports = exports['default'];