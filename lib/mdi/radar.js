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

var MdiRadar = function (_React$Component) {
    _inherits(MdiRadar, _React$Component);

    function MdiRadar() {
        _classCallCheck(this, MdiRadar);

        return _possibleConstructorReturn(this, (MdiRadar.__proto__ || Object.getPrototypeOf(MdiRadar)).apply(this, arguments));
    }

    _createClass(MdiRadar, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 19.07,4.93L 17.66,6.34C 19.1,7.79 20,9.79 20,12C 20,16.42 16.42,20 12,20C 7.58,20 4,16.42 4,12C 4,7.92 7.05,4.56 11,4.07L 11,6.09C 8.16,6.57 6,9.03 6,12C 6,15.31 8.69,18 12,18C 15.31,18 18,15.31 18,12C 18,10.34 17.33,8.84 16.24,7.76L 14.83,9.17C 15.55,9.9 16,10.9 16,12C 16,14.21 14.21,16 12,16C 9.79,16 8,14.21 8,12C 8,10.14 9.28,8.59 11,8.14L 11,10.28C 10.4,10.63 10,11.26 10,12C 10,13.1 10.9,14 12,14C 13.1,14 14,13.1 14,12C 14,11.26 13.6,10.62 13,10.28L 13,2L 12,2C 6.48,2 2,6.48 2,12C 2,17.52 6.48,22 12,22C 17.52,22 22,17.52 22,12C 22,9.24 20.88,6.74 19.07,4.93 Z ' })
                )
            );
        }
    }]);

    return MdiRadar;
}(React.Component);

exports.default = MdiRadar;
module.exports = exports['default'];