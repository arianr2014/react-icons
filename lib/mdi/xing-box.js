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

var MdiXingBox = function (_React$Component) {
    _inherits(MdiXingBox, _React$Component);

    function MdiXingBox() {
        _classCallCheck(this, MdiXingBox);

        return _possibleConstructorReturn(this, (MdiXingBox.__proto__ || Object.getPrototypeOf(MdiXingBox)).apply(this, arguments));
    }

    _createClass(MdiXingBox, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 4.8,2.9978C 3.80375,2.9978 2.9975,3.80375 2.9975,4.8L 2.9975,19.1987C 2.9975,20.195 3.80375,21.0012 4.8,21.0012L 19.1988,21.0012C 20.1953,21.0012 21.0013,20.195 21.0013,19.1987L 21.0013,4.8C 21.0013,3.80375 20.1953,2.9978 19.1988,2.9978M 16.0688,5L 18.105,5C 18.2275,5 18.325,5.04375 18.3738,5.1275C 18.4275,5.215 18.4275,5.3275 18.3687,5.44L 13.9012,13.3588L 16.7475,18.56C 16.8062,18.6712 16.8062,18.7838 16.7525,18.8725C 16.6988,18.955 16.6063,18.9988 16.485,18.9988L 14.4675,18.9988C 14.155,18.9988 14.0038,18.7937 13.9063,18.6138L 11.035,13.35C 11.1763,13.1 15.5275,5.38625 15.5275,5.38625C 15.635,5.19 15.7662,5 16.0688,5 Z M 7.085,7.76375L 9.10125,7.76375C 9.41375,7.76375 9.565,7.96375 9.6675,8.145L 11.055,10.5662C 10.9712,10.7075 8.8775,14.4187 8.8775,14.4187C 8.77,14.605 8.6275,14.81 8.325,14.81L 6.30375,14.81C 6.18125,14.81 6.09375,14.7563 6.04,14.6725C 5.98625,14.585 5.98625,14.4725 6.04,14.36L 8.18375,10.5662L 6.82125,8.2025C 6.7675,8.09125 6.7525,7.97875 6.80625,7.89C 6.86,7.8075 6.9625,7.76375 7.085,7.76375 Z ' })
                )
            );
        }
    }]);

    return MdiXingBox;
}(React.Component);

exports.default = MdiXingBox;
module.exports = exports['default'];