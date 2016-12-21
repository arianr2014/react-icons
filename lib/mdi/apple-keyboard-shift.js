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

var MdiAppleKeyboardShift = function (_React$Component) {
    _inherits(MdiAppleKeyboardShift, _React$Component);

    function MdiAppleKeyboardShift() {
        _classCallCheck(this, MdiAppleKeyboardShift);

        return _possibleConstructorReturn(this, (MdiAppleKeyboardShift.__proto__ || Object.getPrototypeOf(MdiAppleKeyboardShift)).apply(this, arguments));
    }

    _createClass(MdiAppleKeyboardShift, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 15,18L 15,12L 17.1716,12L 12,6.82842L 6.82846,12L 9.00003,12L 9.00003,18L 15,18 Z M 12,4L 22,14L 17,14L 17,20L 7.00003,20L 7.00003,14L 2.00003,14L 12,4 Z ' })
                )
            );
        }
    }]);

    return MdiAppleKeyboardShift;
}(React.Component);

exports.default = MdiAppleKeyboardShift;
module.exports = exports['default'];