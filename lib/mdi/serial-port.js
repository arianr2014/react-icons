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

var MdiSerialPort = function (_React$Component) {
    _inherits(MdiSerialPort, _React$Component);

    function MdiSerialPort() {
        _classCallCheck(this, MdiSerialPort);

        return _possibleConstructorReturn(this, (MdiSerialPort.__proto__ || Object.getPrototypeOf(MdiSerialPort)).apply(this, arguments));
    }

    _createClass(MdiSerialPort, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 7,3L 17,3L 17,5L 19,5L 19,8L 16,8L 16,14L 8,14L 8,8L 5,8L 5,5L 7,5L 7,3 Z M 17,9L 19,9L 19,14L 17,14L 17,9 Z M 11,15L 13,15L 13,22L 11,22L 11,15 Z M 5,9L 7,9L 7,14L 5,14L 5,9 Z ' })
                )
            );
        }
    }]);

    return MdiSerialPort;
}(React.Component);

exports.default = MdiSerialPort;
module.exports = exports['default'];