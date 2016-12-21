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

var MdiCartOff = function (_React$Component) {
    _inherits(MdiCartOff, _React$Component);

    function MdiCartOff() {
        _classCallCheck(this, MdiCartOff);

        return _possibleConstructorReturn(this, (MdiCartOff.__proto__ || Object.getPrototypeOf(MdiCartOff)).apply(this, arguments));
    }

    _createClass(MdiCartOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 22.73,22.73L 1.27,1.27L 1.27157e-006,2.54L 4.39,6.93L 6.6,11.59L 5.25,14.04C 5.09,14.32 5,14.65 5,15C 5,16.1 5.9,17 7,17L 14.46,17L 15.84,18.38C 15.34,18.74 15.01,19.33 15.01,20C 15.01,21.1 15.9,22 17,22C 17.67,22 18.26,21.67 18.62,21.16L 21.46,24L 22.73,22.73 Z M 7.42,15C 7.28,15 7.17,14.89 7.17,14.75L 7.2,14.63L 8.1,13L 10.46,13L 12.46,15L 7.42,15 Z M 15.55,13C 16.3,13 16.96,12.59 17.3,11.97L 20.88,5.48C 20.96,5.34 21,5.17 21,5C 21,4.45 20.55,4 20,4L 6.54,4L 15.55,13 Z M 7,18C 5.9,18 5.01,18.9 5.01,20C 5.01,21.1 5.9,22 7,22C 8.1,22 9,21.1 9,20C 9,18.9 8.1,18 7,18 Z ' })
                )
            );
        }
    }]);

    return MdiCartOff;
}(React.Component);

exports.default = MdiCartOff;
module.exports = exports['default'];