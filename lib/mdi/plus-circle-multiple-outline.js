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

var MdiPlusCircleMultipleOutline = function (_React$Component) {
    _inherits(MdiPlusCircleMultipleOutline, _React$Component);

    function MdiPlusCircleMultipleOutline() {
        _classCallCheck(this, MdiPlusCircleMultipleOutline);

        return _possibleConstructorReturn(this, (MdiPlusCircleMultipleOutline.__proto__ || Object.getPrototypeOf(MdiPlusCircleMultipleOutline)).apply(this, arguments));
    }

    _createClass(MdiPlusCircleMultipleOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 16.0012,7.9975L 13.9987,7.9975L 13.9987,11.0012L 11.0013,11.0012L 11.0013,12.9975L 13.9987,12.9975L 13.9987,16.0012L 16.0012,16.0012L 16.0012,12.9975L 18.9988,12.9975L 18.9988,11.0012L 16.0012,11.0012M 2.0025,12.0025C 2.0025,9.20875 3.6375,6.80125 6.01125,5.67875L 6.01125,3.52C 2.52,4.76125 0,8.09125 0,12.0025C 0,15.9088 2.52,19.2388 6.01125,20.4787L 6.01125,18.32C 3.6375,17.2025 2.0025,14.79 2.0025,12.0025 Z M 15,2.9978C 10.0387,2.9978 6.00125,7.04125 6.00125,12.0025C 6.00125,16.9575 10.0387,21.0012 15,21.0012C 19.9613,21.0012 23.9987,16.9575 23.9987,12.0025C 23.9987,7.04125 19.9613,2.9978 15,2.9978 Z M 15,18.9988C 11.1375,18.9988 7.9975,15.8587 7.9975,12.0025C 7.9975,8.14 11.1375,5 15,5C 18.8625,5 22.0025,8.14 22.0025,12.0025C 22.0025,15.8587 18.8625,18.9988 15,18.9988 Z ' })
                )
            );
        }
    }]);

    return MdiPlusCircleMultipleOutline;
}(React.Component);

exports.default = MdiPlusCircleMultipleOutline;
module.exports = exports['default'];