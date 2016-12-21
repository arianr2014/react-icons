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

var MdiFormatClear = function (_React$Component) {
    _inherits(MdiFormatClear, _React$Component);

    function MdiFormatClear() {
        _classCallCheck(this, MdiFormatClear);

        return _possibleConstructorReturn(this, (MdiFormatClear.__proto__ || Object.getPrototypeOf(MdiFormatClear)).apply(this, arguments));
    }

    _createClass(MdiFormatClear, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 6,5L 6,5.18L 8.82,8L 11.22,8L 10.5,9.68L 12.6,11.78L 14.21,8L 20,8L 20,5L 6,5 Z M 3.27,5L 2,6.27L 8.97,13.24L 6.5,19L 9.5,19L 11.07,15.34L 16.73,21L 18,19.73L 3.55,5.27L 3.27,5 Z ' })
                )
            );
        }
    }]);

    return MdiFormatClear;
}(React.Component);

exports.default = MdiFormatClear;
module.exports = exports['default'];