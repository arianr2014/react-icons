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

var MdiWeatherSunsetDown = function (_React$Component) {
    _inherits(MdiWeatherSunsetDown, _React$Component);

    function MdiWeatherSunsetDown() {
        _classCallCheck(this, MdiWeatherSunsetDown);

        return _possibleConstructorReturn(this, (MdiWeatherSunsetDown.__proto__ || Object.getPrototypeOf(MdiWeatherSunsetDown)).apply(this, arguments));
    }

    _createClass(MdiWeatherSunsetDown, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 3,12L 7,12C 7,9.23855 9.23858,6.99997 12,6.99997C 14.7614,6.99997 17,9.23855 17,12L 21,12C 21.5523,12 22,12.4477 22,13C 22,13.5523 21.5523,14 21,14L 3,14C 2.44772,14 2.00001,13.5523 2.00001,13C 2.00001,12.4477 2.44772,12 3,12 Z M 15,12C 15,10.3431 13.6568,8.99998 12,8.99998C 10.3431,8.99998 9,10.3431 9,12L 15,12 Z M 12,2L 14.3941,5.42008C 13.6471,5.14826 12.8409,4.99998 12,4.99998C 11.1591,4.99998 10.3528,5.14826 9.60593,5.42008L 12,2 Z M 3.34495,7.009L 7.50388,6.64573C 6.89501,7.15666 6.36348,7.78077 5.94302,8.509C 5.52258,9.23724 5.24786,10.0096 5.10981,10.7924L 3.34495,7.009 Z M 20.646,7.00379L 18.8812,10.7872C 18.7431,10.0044 18.4684,9.23203 18.0479,8.50379C 17.6275,7.77556 17.096,7.15145 16.4871,6.64052L 20.646,7.00379 Z M 12.7123,20.7071L 15.8235,17.5959C 16.2141,17.2053 16.2141,16.5722 15.8235,16.1816C 15.433,15.7911 14.7999,15.7911 14.4093,16.1816L 11.9996,18.5913L 9.58996,16.1816C 9.19944,15.7911 8.56627,15.7911 8.17575,16.1816C 7.78522,16.5722 7.78522,17.2053 8.17575,17.5959L 11.287,20.7071C 11.4838,20.9039 11.7421,21.0015 12,21C 12.2576,21.0013 12.5157,20.9037 12.7123,20.7071 Z ' })
                )
            );
        }
    }]);

    return MdiWeatherSunsetDown;
}(React.Component);

exports.default = MdiWeatherSunsetDown;
module.exports = exports['default'];