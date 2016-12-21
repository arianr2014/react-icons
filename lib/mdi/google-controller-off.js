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

var MdiGoogleControllerOff = function (_React$Component) {
    _inherits(MdiGoogleControllerOff, _React$Component);

    function MdiGoogleControllerOff() {
        _classCallCheck(this, MdiGoogleControllerOff);

        return _possibleConstructorReturn(this, (MdiGoogleControllerOff.__proto__ || Object.getPrototypeOf(MdiGoogleControllerOff)).apply(this, arguments));
    }

    _createClass(MdiGoogleControllerOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 2,5.26848L 3.27711,4L 20,20.7229L 18.7315,22L 12.7315,16L 7.97489,16L 4.98745,18.9874C 4.67076,19.3041 4.23325,19.5 3.75,19.5C 2.7835,19.5 2,18.7165 2,17.75L 2.01959,17.4873L 3.01603,10.1174C 3.10217,9.09423 3.53068,8.16845 4.1866,7.45507L 2,5.26848 Z M 5,10L 5,11L 6.99999,11L 6.99999,13L 7.99999,13L 7.99999,11.2685L 6.73154,10L 5,10 Z M 16.5,6C 18.8564,6 20.7898,7.81122 20.984,10.1174L 21.9804,17.4873L 22,17.75C 22,18.4073 21.6376,18.9799 21.1018,19.2791L 7.82269,6L 16.5,6 Z M 16.5,8.00001C 16.0858,8.00001 15.75,8.3358 15.75,8.75001C 15.75,9.16423 16.0858,9.50001 16.5,9.50001C 16.9142,9.50001 17.25,9.16423 17.25,8.75001C 17.25,8.3358 16.9142,8.00001 16.5,8.00001 Z M 14.75,9.75001C 14.3358,9.75001 14,10.0858 14,10.5C 14,10.9142 14.3358,11.25 14.75,11.25C 15.1642,11.25 15.5,10.9142 15.5,10.5C 15.5,10.0858 15.1642,9.75001 14.75,9.75001 Z M 18.25,9.75001C 17.8358,9.75001 17.5,10.0858 17.5,10.5C 17.5,10.9142 17.8358,11.25 18.25,11.25C 18.6642,11.25 19,10.9142 19,10.5C 19,10.0858 18.6642,9.75001 18.25,9.75001 Z M 16.5,11.5C 16.0858,11.5 15.75,11.8358 15.75,12.25C 15.75,12.6642 16.0858,13 16.5,13C 16.9142,13 17.25,12.6642 17.25,12.25C 17.25,11.8358 16.9142,11.5 16.5,11.5 Z ' })
                )
            );
        }
    }]);

    return MdiGoogleControllerOff;
}(React.Component);

exports.default = MdiGoogleControllerOff;
module.exports = exports['default'];