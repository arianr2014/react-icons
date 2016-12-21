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

var MdiLedOutline = function (_React$Component) {
    _inherits(MdiLedOutline, _React$Component);

    function MdiLedOutline() {
        _classCallCheck(this, MdiLedOutline);

        return _possibleConstructorReturn(this, (MdiLedOutline.__proto__ || Object.getPrototypeOf(MdiLedOutline)).apply(this, arguments));
    }

    _createClass(MdiLedOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 12,6C 9.79086,6 8,7.7909 8,10L 8,16L 6,16L 6,18L 9,18L 9,23L 11,23L 11,18L 13,18L 13,23L 15,23L 15,18L 18,18L 18,16L 16,16L 16,10C 16,7.7909 14.2091,6 12,6 Z M 12,8C 13.1046,8 14,8.8954 14,10L 14,15L 10,15L 10,10C 10,8.8954 10.8954,8 12,8 Z ' })
                )
            );
        }
    }]);

    return MdiLedOutline;
}(React.Component);

exports.default = MdiLedOutline;
module.exports = exports['default'];