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

var MdiXboxControllerOff = function (_React$Component) {
    _inherits(MdiXboxControllerOff, _React$Component);

    function MdiXboxControllerOff() {
        _classCallCheck(this, MdiXboxControllerOff);

        return _possibleConstructorReturn(this, (MdiXboxControllerOff.__proto__ || Object.getPrototypeOf(MdiXboxControllerOff)).apply(this, arguments));
    }

    _createClass(MdiXboxControllerOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 2,5.26848L 3.27711,4L 20,20.7229L 18.7315,22L 12.4815,15.75L 8.75,15.75C 6.75,15.75 6,18 4,19C 2.01476,19 0.522174,16.0441 4.41889,7.68736L 2,5.26848 Z M 9.3259,6.22772L 14.6741,6.22772C 16,5.00001 18.8148,6.66676 18.8148,6.66676L 19.25,7.50001L 19.4933,7.50002C 23.0197,14.9811 22.2805,18.2017 20.6891,18.8664L 7.62304,5.80035C 8.25002,5.72719 8.87432,5.80958 9.3259,6.22772 Z M 12,7.00001C 11.4477,7.00001 11,7.44773 11,8.00001C 11,8.55229 11.4477,9.00001 12,9.00001C 12.5523,9.00001 13,8.55229 13,8.00001C 13,7.44773 12.5523,7.00001 12,7.00001 Z ' })
                )
            );
        }
    }]);

    return MdiXboxControllerOff;
}(React.Component);

exports.default = MdiXboxControllerOff;
module.exports = exports['default'];