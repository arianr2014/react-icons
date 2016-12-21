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

var MdiAlarmOff = function (_React$Component) {
    _inherits(MdiAlarmOff, _React$Component);

    function MdiAlarmOff() {
        _classCallCheck(this, MdiAlarmOff);

        return _possibleConstructorReturn(this, (MdiAlarmOff.__proto__ || Object.getPrototypeOf(MdiAlarmOff)).apply(this, arguments));
    }

    _createClass(MdiAlarmOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 8.02,3.28L 6.6,1.86L 5.74,2.57L 7.16,3.99M 16.47,18.39C 15.26,19.39 13.7,20 12,20C 8.13,20 5,16.87 5,13C 5,11.3 5.61,9.74 6.61,8.53M 2.92,2.29L 1.65,3.57L 2.98,4.9L 1.87,5.83L 3.29,7.25L 4.4,6.31L 5.2,7.11C 3.83,8.69 3,10.75 3,13C 3,17.97 7.02,22 12,22C 14.25,22 16.31,21.17 17.89,19.8L 20.09,22L 21.36,20.73L 3.89,3.27L 2.92,2.29 Z M 22,5.72L 17.4,1.86L 16.11,3.39L 20.71,7.25L 22,5.72 Z M 12,6C 15.87,6 19,9.13 19,13C 19,13.84 18.84,14.65 18.57,15.4L 20.09,16.92C 20.67,15.73 21,14.41 21,13C 21,8.03 16.97,4 12,4C 10.59,4 9.27,4.33 8.08,4.91L 9.6,6.43C 10.35,6.16 11.16,6 12,6 Z ' })
                )
            );
        }
    }]);

    return MdiAlarmOff;
}(React.Component);

exports.default = MdiAlarmOff;
module.exports = exports['default'];