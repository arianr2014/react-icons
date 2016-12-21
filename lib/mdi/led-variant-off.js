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

var MdiLedVariantOff = function (_React$Component) {
    _inherits(MdiLedVariantOff, _React$Component);

    function MdiLedVariantOff() {
        _classCallCheck(this, MdiLedVariantOff);

        return _possibleConstructorReturn(this, (MdiLedVariantOff.__proto__ || Object.getPrototypeOf(MdiLedVariantOff)).apply(this, arguments));
    }

    _createClass(MdiLedVariantOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 12,3C 10.0469,3 8.42693,4.401 8.07617,6.252L 16.8242,15L 18,15L 18,13L 16,13L 16,7C 16,4.7909 14.2091,3 12,3 Z M 3.27734,4L 2,5.2676L 8,11.2676L 8,13L 6,13L 6,15L 9,15L 9,21L 11,21L 11,15L 11.7324,15L 13,16.2676L 13,21L 15,21L 15,18.2676L 18.7324,22L 20,20.7227L 15,15.7227L 8,8.7227L 3.27734,4 Z ' })
                )
            );
        }
    }]);

    return MdiLedVariantOff;
}(React.Component);

exports.default = MdiLedVariantOff;
module.exports = exports['default'];