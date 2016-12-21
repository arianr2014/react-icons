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

var MdiFormatUnderline = function (_React$Component) {
    _inherits(MdiFormatUnderline, _React$Component);

    function MdiFormatUnderline() {
        _classCallCheck(this, MdiFormatUnderline);

        return _possibleConstructorReturn(this, (MdiFormatUnderline.__proto__ || Object.getPrototypeOf(MdiFormatUnderline)).apply(this, arguments));
    }

    _createClass(MdiFormatUnderline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 5,21L 19,21L 19,19L 5,19L 5,21 Z M 12,17C 15.313,17 18,14.313 18,11L 18,3L 15.5,3L 15.5,11C 15.5,12.933 13.933,14.5 12,14.5C 10.067,14.5 8.5,12.933 8.5,11L 8.5,3L 6,3L 6,11C 6,14.313 8.687,17 12,17 Z ' })
                )
            );
        }
    }]);

    return MdiFormatUnderline;
}(React.Component);

exports.default = MdiFormatUnderline;
module.exports = exports['default'];