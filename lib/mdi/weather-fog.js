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

var MdiWeatherFog = function (_React$Component) {
    _inherits(MdiWeatherFog, _React$Component);

    function MdiWeatherFog() {
        _classCallCheck(this, MdiWeatherFog);

        return _possibleConstructorReturn(this, (MdiWeatherFog.__proto__ || Object.getPrototypeOf(MdiWeatherFog)).apply(this, arguments));
    }

    _createClass(MdiWeatherFog, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '2', 'stroke-linejoin': 'round', d: 'M 3,15L 13,15C 13.5523,15 14,15.4477 14,16C 14,16.5523 13.5523,17 13,17L 3,17C 2.44772,17 2,16.5523 2,16C 2,15.4477 2.44772,15 3,15 Z M 16,15L 21,15C 21.5523,15 22,15.4477 22,16C 22,16.5523 21.5523,17 21,17L 16,17C 15.4477,17 15,16.5523 15,16C 15,15.4477 15.4477,15 16,15 Z M 1,12C 1,9.23919 3.23759,7.001 5.99817,7C 6.97773,4.65105 9.29605,3.00001 12,3.00001C 15.4328,3.00001 18.2441,5.66115 18.4835,9.03305L 19,9C 21.1928,9 22.9735,10.7645 22.9994,13L 21,13C 21,11.8954 20.1046,11 19,11L 17,11L 17,10C 17,7.23858 14.7614,5.00001 12,5.00001C 9.51284,5.00001 7.44982,6.816 7.06456,9.19438C 6.73372,9.06877 6.37489,9.00001 6,9.00001C 4.34315,9.00001 3,10.3432 3,12C 3,12.3506 3.06016,12.6872 3.17071,13L 1.10002,13L 1,12 Z M 3,19L 5,19C 5.55228,19 6,19.4477 6,20C 6,20.5523 5.55228,21 5,21L 3,21C 2.44772,21 2,20.5523 2,20C 2,19.4477 2.44772,19 3,19 Z M 8,19L 21,19C 21.5523,19 22,19.4477 22,20C 22,20.5523 21.5523,21 21,21L 8,21C 7.44771,21 7,20.5523 7,20C 7,19.4477 7.44771,19 8,19 Z ' })
                )
            );
        }
    }]);

    return MdiWeatherFog;
}(React.Component);

exports.default = MdiWeatherFog;
module.exports = exports['default'];