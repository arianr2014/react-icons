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

var MdiBluetoothSettings = function (_React$Component) {
    _inherits(MdiBluetoothSettings, _React$Component);

    function MdiBluetoothSettings() {
        _classCallCheck(this, MdiBluetoothSettings);

        return _possibleConstructorReturn(this, (MdiBluetoothSettings.__proto__ || Object.getPrototypeOf(MdiBluetoothSettings)).apply(this, arguments));
    }

    _createClass(MdiBluetoothSettings, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 14.88,14.29L 13,16.17L 13,12.41L 14.88,14.29 Z M 13,3.83L 14.88,5.71L 13,7.59M 17.71,5.71L 12,0L 11,0L 11,7.59L 6.41,3L 5,4.41L 10.59,10L 5,15.59L 6.41,17L 11,12.41L 11,20L 12,20L 17.71,14.29L 13.41,10L 17.71,5.71 Z M 15,24L 17,24L 17,22L 15,22M 7,24L 9,24L 9,22L 7,22M 11,24L 13,24L 13,22L 11,22L 11,24 Z ' })
                )
            );
        }
    }]);

    return MdiBluetoothSettings;
}(React.Component);

exports.default = MdiBluetoothSettings;
module.exports = exports['default'];