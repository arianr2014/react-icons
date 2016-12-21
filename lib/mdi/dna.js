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

var MdiDna = function (_React$Component) {
    _inherits(MdiDna, _React$Component);

    function MdiDna() {
        _classCallCheck(this, MdiDna);

        return _possibleConstructorReturn(this, (MdiDna.__proto__ || Object.getPrototypeOf(MdiDna)).apply(this, arguments));
    }

    _createClass(MdiDna, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 4,2L 6,2L 6,4C 6,5.4424 6.68252,6.6062 7.88477,7.7773C 8.7437,8.6141 9.88799,9.4098 11.0918,10.2031L 9.25586,11.3926C 8.26578,10.7158 7.31121,10.0087 6.49023,9.209C 5.06748,7.823 4,6.1009 4,4L 4,2 Z M 18,2L 20,2L 20,4C 20,6.1009 18.9325,7.823 17.5098,9.209C 16.087,10.5949 14.2871,11.7296 12.5371,12.8437C 10.7871,13.9579 9.08701,15.0515 7.88477,16.2227C 6.68252,17.3938 6,18.5576 6,20L 6,22L 4,22L 4,20C 4,17.8991 5.06748,16.1769 6.49023,14.791C 7.91299,13.4051 9.71289,12.2704 11.4629,11.1562C 13.2129,10.0421 14.913,8.9485 16.1152,7.7773C 17.3175,6.6062 18,5.4424 18,4L 18,2 Z M 14.7441,12.6074C 15.7342,13.2842 16.6888,13.9913 17.5098,14.791C 18.9325,16.1769 20,17.8991 20,20L 20,22L 18,22L 18,20C 18,18.5576 17.3175,17.3938 16.1152,16.2227C 15.2563,15.3859 14.112,14.5902 12.9082,13.7969L 14.7441,12.6074 Z M 7,3L 17,3L 17,4L 16.9434,4.5L 7.05664,4.5L 7,4L 7,3 Z M 7.67773,6L 16.3223,6C 16.0834,6.3421 15.801,6.6875 15.418,7.0605L 14.9102,7.5L 9.07422,7.5L 8.58203,7.0605C 8.19905,6.6875 7.91658,6.3421 7.67773,6 Z M 9.08984,16.5L 14.9258,16.5L 15.418,16.9394C 15.801,17.3125 16.0834,17.6579 16.3223,18L 7.67773,18C 7.91658,17.6579 8.19905,17.3125 8.58203,16.9394L 9.08984,16.5 Z M 7.05664,19.5L 16.9434,19.5L 17,20L 17,21L 7,21L 7,20L 7.05664,19.5 Z ' })
                )
            );
        }
    }]);

    return MdiDna;
}(React.Component);

exports.default = MdiDna;
module.exports = exports['default'];