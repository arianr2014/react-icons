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

var MdiFormatHorizontalAlignLeft = function (_React$Component) {
    _inherits(MdiFormatHorizontalAlignLeft, _React$Component);

    function MdiFormatHorizontalAlignLeft() {
        _classCallCheck(this, MdiFormatHorizontalAlignLeft);

        return _possibleConstructorReturn(this, (MdiFormatHorizontalAlignLeft.__proto__ || Object.getPrototypeOf(MdiFormatHorizontalAlignLeft)).apply(this, arguments));
    }

    _createClass(MdiFormatHorizontalAlignLeft, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'miter', d: 'M 11,16L 11,13L 21,13L 21,11L 11,11L 11,8L 7,12L 11,16 Z M 3,20L 5,20L 5,4L 3,4L 3,20 Z ' })
                )
            );
        }
    }]);

    return MdiFormatHorizontalAlignLeft;
}(React.Component);

exports.default = MdiFormatHorizontalAlignLeft;
module.exports = exports['default'];