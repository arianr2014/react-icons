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

var MdiSquareIncCash = function (_React$Component) {
    _inherits(MdiSquareIncCash, _React$Component);

    function MdiSquareIncCash() {
        _classCallCheck(this, MdiSquareIncCash);

        return _possibleConstructorReturn(this, (MdiSquareIncCash.__proto__ || Object.getPrototypeOf(MdiSquareIncCash)).apply(this, arguments));
    }

    _createClass(MdiSquareIncCash, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 5.5,3.62396e-005L 18.5,3.62396e-005C 21.5375,3.62396e-005 24,2.46247 24,5.50003L 24,18.5C 24,21.5376 21.5375,24 18.5,24L 5.5,24C 2.46243,24 0,21.5376 0,18.5L 0,5.50003C 0,2.46247 2.46243,3.62396e-005 5.5,3.62396e-005 Z M 15.385,15.1805C 15.385,16.7597 14.4922,17.8051 12.8515,17.9491L 12.8515,12.6096C 14.5498,13.1347 15.385,13.6589 15.385,15.1805 Z M 11.6496,6.01632L 11.6496,10.8806C 10.3373,10.5245 9.02976,9.9312 9.02976,8.42688C 9.02976,6.94272 10.1789,6.1152 11.6496,6.01632 Z M 15.5059,7.59648L 16.5187,6.80448C 15.6211,5.65824 14.399,4.92384 12.8496,4.7664L 12.8496,3.79968L 11.6496,3.79968L 11.6496,3.8016L 11.6496,4.7472C 9.52416,4.88544 7.67904,6.17184 7.67904,8.50656C 7.67904,10.9997 9.74208,11.7773 11.6486,12.2918L 11.6496,17.9597C 10.536,17.8416 9.288,17.3117 8.4336,16.0253L 7.3008,16.777C 8.19552,18.1229 9.76224,18.9782 11.6496,19.1366L 11.6496,20.2013L 12.0672,20.2003L 12.8515,20.2003L 12.8515,19.1606C 15.3466,18.9754 16.6992,17.3357 16.6992,15.1411C 16.6992,12.5808 14.8118,11.7638 12.8515,11.1907L 12.8515,6.04608C 13.9862,6.21696 14.8454,6.7632 15.5059,7.59648 Z ' })
                )
            );
        }
    }]);

    return MdiSquareIncCash;
}(React.Component);

exports.default = MdiSquareIncCash;
module.exports = exports['default'];