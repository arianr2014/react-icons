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

var MdiFormatColorFill = function (_React$Component) {
    _inherits(MdiFormatColorFill, _React$Component);

    function MdiFormatColorFill() {
        _classCallCheck(this, MdiFormatColorFill);

        return _possibleConstructorReturn(this, (MdiFormatColorFill.__proto__ || Object.getPrototypeOf(MdiFormatColorFill)).apply(this, arguments));
    }

    _createClass(MdiFormatColorFill, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 18.9994,11.499C 18.9994,11.499 16.9994,13.666 16.9994,14.999C 16.9994,16.103 17.8954,16.999 18.9994,16.999C 20.1034,16.999 20.9994,16.103 20.9994,14.999C 20.9994,13.666 18.9994,11.499 18.9994,11.499 Z M 5.20639,9.99902L 9.99939,5.20703L 14.7924,9.99902M 16.5604,8.93802L 7.62039,-0.000976563L 6.20639,1.41302L 8.58539,3.79202L 3.43839,8.93802C 2.85339,9.52402 2.85339,10.474 3.43839,11.06L 8.93839,16.56C 9.23138,16.853 9.61539,16.999 9.99939,16.999C 10.3834,16.999 10.7674,16.853 11.0604,16.56L 16.5604,11.06C 17.1454,10.474 17.1454,9.52402 16.5604,8.93802 Z ' })
                )
            );
        }
    }]);

    return MdiFormatColorFill;
}(React.Component);

exports.default = MdiFormatColorFill;
module.exports = exports['default'];