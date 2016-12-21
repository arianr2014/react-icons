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

var MdiTimerOff = function (_React$Component) {
    _inherits(MdiTimerOff, _React$Component);

    function MdiTimerOff() {
        _classCallCheck(this, MdiTimerOff);

        return _possibleConstructorReturn(this, (MdiTimerOff.__proto__ || Object.getPrototypeOf(MdiTimerOff)).apply(this, arguments));
    }

    _createClass(MdiTimerOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 12,20C 8.13,20 5,16.87 5,13C 5,11.72 5.35,10.52 5.95,9.48L 15.51,19.04C 14.48,19.65 13.28,20 12,20 Z M 3.02,4L 1.75,5.27L 4.5,8.03C 3.55,9.45 3,11.16 3,13C 3,17.97 7.02,22 12,22C 13.84,22 15.55,21.45 16.98,20.5L 19.48,23L 20.75,21.73L 13.04,14.02L 3.02,4 Z M 11,9.44L 13,11.44L 13,8L 11,8M 15,1L 9,1L 9,3L 15,3M 19.04,4.55L 17.62,5.97C 16.07,4.74 14.12,4 12,4C 10.17,4 8.47,4.55 7.05,5.48L 8.51,6.94C 9.53,6.35 10.73,6 12,6C 15.87,6 19,9.13 19,13C 19,14.27 18.65,15.47 18.06,16.49L 19.51,17.94C 20.45,16.53 21,14.83 21,13C 21,10.88 20.26,8.93 19.03,7.39L 20.45,5.97L 19.04,4.55 Z ' })
                )
            );
        }
    }]);

    return MdiTimerOff;
}(React.Component);

exports.default = MdiTimerOff;
module.exports = exports['default'];