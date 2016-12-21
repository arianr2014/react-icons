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

var MdiAppleKeyboardCaps = function (_React$Component) {
    _inherits(MdiAppleKeyboardCaps, _React$Component);

    function MdiAppleKeyboardCaps() {
        _classCallCheck(this, MdiAppleKeyboardCaps);

        return _possibleConstructorReturn(this, (MdiAppleKeyboardCaps.__proto__ || Object.getPrototypeOf(MdiAppleKeyboardCaps)).apply(this, arguments));
    }

    _createClass(MdiAppleKeyboardCaps, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 15,14L 15,8.00001L 17.1716,8.00001L 12,2.82844L 6.82842,8.00001L 9,8.00001L 9,14L 15,14 Z M 12,1.71661e-005L 22,10L 17,10L 17,16L 7,16L 6.99999,10L 2,10L 12,1.71661e-005 Z M 7,18L 17,18L 17,24L 7,24L 7,18 Z M 15,20L 9,20L 9,22L 15,22L 15,20 Z ' })
                )
            );
        }
    }]);

    return MdiAppleKeyboardCaps;
}(React.Component);

exports.default = MdiAppleKeyboardCaps;
module.exports = exports['default'];