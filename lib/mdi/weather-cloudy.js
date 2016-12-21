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

var MdiWeatherCloudy = function (_React$Component) {
    _inherits(MdiWeatherCloudy, _React$Component);

    function MdiWeatherCloudy() {
        _classCallCheck(this, MdiWeatherCloudy);

        return _possibleConstructorReturn(this, (MdiWeatherCloudy.__proto__ || Object.getPrototypeOf(MdiWeatherCloudy)).apply(this, arguments));
    }

    _createClass(MdiWeatherCloudy, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 6,19C 3.23858,19 1,16.7614 1,14C 1,11.2392 3.23758,9.00099 5.99817,9C 6.97773,6.65105 9.29605,5 12,5C 15.4328,5 18.2441,7.66115 18.4835,11.033L 19,11C 21.2091,11 23,12.7909 23,15C 23,17.2091 21.2091,19 19,19L 6,19 Z M 19,13L 17,13L 17,12C 17,9.23858 14.7614,7 12,7C 9.51284,7 7.44982,8.81599 7.06456,11.1944C 6.73372,11.0688 6.37489,11 6,11C 4.34315,11 3,12.3431 3,14C 3,15.6569 4.34315,17 6,17L 19,17C 20.1046,17 21,16.1046 21,15C 21,13.8954 20.1046,13 19,13 Z ' })
                )
            );
        }
    }]);

    return MdiWeatherCloudy;
}(React.Component);

exports.default = MdiWeatherCloudy;
module.exports = exports['default'];