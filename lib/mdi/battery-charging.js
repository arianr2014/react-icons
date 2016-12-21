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

var MdiBatteryCharging = function (_React$Component) {
    _inherits(MdiBatteryCharging, _React$Component);

    function MdiBatteryCharging() {
        _classCallCheck(this, MdiBatteryCharging);

        return _possibleConstructorReturn(this, (MdiBatteryCharging.__proto__ || Object.getPrototypeOf(MdiBatteryCharging)).apply(this, arguments));
    }

    _createClass(MdiBatteryCharging, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 16.6688,3.99875L 14.9987,3.99875L 14.9987,2.0025L 9,2.0025L 9,3.99875L 7.33,3.99875C 6.59751,3.99875 6.0025,4.6 6.0025,5.3325L 6.0025,20.6588C 6.0025,21.4012 6.59751,22.0025 7.33,22.0025L 16.6588,22.0025C 17.4012,22.0025 18.0025,21.4012 18.0025,20.6687L 18.0025,5.3325C 18.0025,4.6 17.4012,3.99875 16.6688,3.99875 Z M 11.0013,20L 11.0013,14.5025L 8.99875,14.5025L 12.9975,7.0025L 12.9975,12.5L 15,12.5' })
                )
            );
        }
    }]);

    return MdiBatteryCharging;
}(React.Component);

exports.default = MdiBatteryCharging;
module.exports = exports['default'];