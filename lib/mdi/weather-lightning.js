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

var MdiWeatherLightning = function (_React$Component) {
    _inherits(MdiWeatherLightning, _React$Component);

    function MdiWeatherLightning() {
        _classCallCheck(this, MdiWeatherLightning);

        return _possibleConstructorReturn(this, (MdiWeatherLightning.__proto__ || Object.getPrototypeOf(MdiWeatherLightning)).apply(this, arguments));
    }

    _createClass(MdiWeatherLightning, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 6,16C 3.23858,16 1,13.7614 1,11C 1,8.23919 3.23758,6.00099 5.99817,6C 6.97773,3.65105 9.29605,2.00001 12,2.00001C 15.4328,2.00001 18.2441,4.66115 18.4835,8.03304L 19,8C 21.2091,8 23,9.79086 23,12C 23,14.2091 21.2091,16 19,16L 18,16C 17.4477,16 17,15.5523 17,15C 17,14.4477 17.4477,14 18,14L 19,14C 20.1046,14 21,13.1046 21,12C 21,10.8954 20.1046,10 19,10L 17,10L 17,9C 17,6.23858 14.7614,4 12,4C 9.51284,4 7.44982,5.816 7.06456,8.19437C 6.73372,8.06877 6.37489,8 6,8C 4.34315,8 3,9.34315 3,11C 3,12.6569 4.34315,14 6,14L 7,14C 7.55228,14 8,14.4477 8,15C 8,15.5523 7.55228,16 7,16L 6,16 Z M 12,11L 15,11L 13,15L 15,15L 11.25,22L 12,17L 9.5,17L 12,11 Z ' })
                )
            );
        }
    }]);

    return MdiWeatherLightning;
}(React.Component);

exports.default = MdiWeatherLightning;
module.exports = exports['default'];