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

var MdiMicrophoneSettings = function (_React$Component) {
    _inherits(MdiMicrophoneSettings, _React$Component);

    function MdiMicrophoneSettings() {
        _classCallCheck(this, MdiMicrophoneSettings);

        return _possibleConstructorReturn(this, (MdiMicrophoneSettings.__proto__ || Object.getPrototypeOf(MdiMicrophoneSettings)).apply(this, arguments));
    }

    _createClass(MdiMicrophoneSettings, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 19,10L 17.3,10C 17.3,13 14.76,15.1 12,15.1C 9.24,15.1 6.7,13 6.7,10L 5,10C 5,13.41 7.72,16.23 11,16.72L 11,20L 13,20L 13,16.72C 16.28,16.23 19,13.41 19,10 Z M 15,24L 17,24L 17,22L 15,22M 11,24L 13,24L 13,22L 11,22M 12,13C 13.66,13 14.99,11.66 14.99,10L 15,4C 15,2.34 13.66,1 12,1C 10.34,1 9,2.34 9,4L 9,10C 9,11.66 10.34,13 12,13 Z M 7,24L 9,24L 9,22L 7,22L 7,24 Z ' })
                )
            );
        }
    }]);

    return MdiMicrophoneSettings;
}(React.Component);

exports.default = MdiMicrophoneSettings;
module.exports = exports['default'];