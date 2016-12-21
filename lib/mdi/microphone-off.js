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

var MdiMicrophoneOff = function (_React$Component) {
    _inherits(MdiMicrophoneOff, _React$Component);

    function MdiMicrophoneOff() {
        _classCallCheck(this, MdiMicrophoneOff);

        return _possibleConstructorReturn(this, (MdiMicrophoneOff.__proto__ || Object.getPrototypeOf(MdiMicrophoneOff)).apply(this, arguments));
    }

    _createClass(MdiMicrophoneOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 19.0001,10.9995C 19.0001,12.1895 18.6641,13.3045 18.0951,14.2765L 16.8661,13.0475C 17.1431,12.4325 17.3001,11.7435 17.3001,10.9995L 19.0001,10.9995 Z M 14.9835,11.1648L 9.0015,5.18282L 9.0015,4.9998C 9.0015,3.3418 10.3435,1.9998 12.0005,1.9998C 13.6555,1.9998 15.0005,3.3418 15.0005,4.9998L 15.0005,10.9998L 14.9835,11.1648 Z M 4.27299,3L 21,19.727L 19.727,21L 15.541,16.813C 14.766,17.267 13.906,17.583 13,17.717L 13,21L 11,21L 11,17.717C 7.72099,17.233 5,14.414 5,11L 6.70101,11C 6.70101,14 9.238,16.099 12,16.099C 12.81,16.099 13.598,15.914 14.311,15.583L 12.651,13.924L 12,14C 10.344,14 9.00999,12.656 9.00999,11L 9.00899,10.281L 3,4.27299L 4.27299,3 Z ' })
                )
            );
        }
    }]);

    return MdiMicrophoneOff;
}(React.Component);

exports.default = MdiMicrophoneOff;
module.exports = exports['default'];