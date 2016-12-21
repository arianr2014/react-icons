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

var MdiFormatHorizontalAlignCenter = function (_React$Component) {
    _inherits(MdiFormatHorizontalAlignCenter, _React$Component);

    function MdiFormatHorizontalAlignCenter() {
        _classCallCheck(this, MdiFormatHorizontalAlignCenter);

        return _possibleConstructorReturn(this, (MdiFormatHorizontalAlignCenter.__proto__ || Object.getPrototypeOf(MdiFormatHorizontalAlignCenter)).apply(this, arguments));
    }

    _createClass(MdiFormatHorizontalAlignCenter, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'miter', d: 'M 19,16L 19,13L 23,13L 23,11L 19,11L 19,8L 15,12L 19,16 Z M 5,8L 5,11L 0.999997,11L 0.999997,13L 5,13L 5,16L 9,12L 5,8 Z M 11,20L 13,20L 13,4L 11,4L 11,20 Z ' })
                )
            );
        }
    }]);

    return MdiFormatHorizontalAlignCenter;
}(React.Component);

exports.default = MdiFormatHorizontalAlignCenter;
module.exports = exports['default'];