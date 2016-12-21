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

var MdiTagHeart = function (_React$Component) {
    _inherits(MdiTagHeart, _React$Component);

    function MdiTagHeart() {
        _classCallCheck(this, MdiTagHeart);

        return _possibleConstructorReturn(this, (MdiTagHeart.__proto__ || Object.getPrototypeOf(MdiTagHeart)).apply(this, arguments));
    }

    _createClass(MdiTagHeart, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 21.41,11.58L 12.41,2.58C 12.05,2.22 11.55,2 11,2L 4,2C 2.9,2 2,2.9 2,4L 2,11C 2,11.55 2.22,12.05 2.59,12.42L 11.59,21.42C 11.95,21.78 12.45,22 13,22C 13.55,22 14.05,21.78 14.41,21.41L 21.41,14.41C 21.78,14.05 22,13.55 22,13C 22,12.45 21.77,11.94 21.41,11.58 Z M 5.5,7C 4.67,7 4,6.33 4,5.5C 4,4.67 4.67,4 5.5,4C 6.33,4 7,4.67 7,5.5C 7,6.33 6.33,7 5.5,7 Z M 17.27,15.27L 13,19.54L 8.73,15.27C 8.28,14.81 8,14.19 8,13.5C 8,12.12 9.12,11 10.5,11C 11.19,11 11.82,11.28 12.27,11.74L 13,12.46L 13.73,11.73C 14.18,11.28 14.81,11 15.5,11C 16.88,11 18,12.12 18,13.5C 18,14.19 17.72,14.82 17.27,15.27 Z ' })
                )
            );
        }
    }]);

    return MdiTagHeart;
}(React.Component);

exports.default = MdiTagHeart;
module.exports = exports['default'];