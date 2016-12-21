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

var MdiFormatVerticalAlignCenter = function (_React$Component) {
    _inherits(MdiFormatVerticalAlignCenter, _React$Component);

    function MdiFormatVerticalAlignCenter() {
        _classCallCheck(this, MdiFormatVerticalAlignCenter);

        return _possibleConstructorReturn(this, (MdiFormatVerticalAlignCenter.__proto__ || Object.getPrototypeOf(MdiFormatVerticalAlignCenter)).apply(this, arguments));
    }

    _createClass(MdiFormatVerticalAlignCenter, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 8,19L 11,19L 11,23L 13,23L 13,19L 16,19L 12,15L 8,19 Z M 16,5L 13,5L 13,1L 11,1L 11,5L 8,5L 12,9L 16,5 Z M 4,11L 4,13L 20,13L 20,11L 4,11 Z ' })
                )
            );
        }
    }]);

    return MdiFormatVerticalAlignCenter;
}(React.Component);

exports.default = MdiFormatVerticalAlignCenter;
module.exports = exports['default'];