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

var MdiHelpCircleOutline = function (_React$Component) {
    _inherits(MdiHelpCircleOutline, _React$Component);

    function MdiHelpCircleOutline() {
        _classCallCheck(this, MdiHelpCircleOutline);

        return _possibleConstructorReturn(this, (MdiHelpCircleOutline.__proto__ || Object.getPrototypeOf(MdiHelpCircleOutline)).apply(this, arguments));
    }

    _createClass(MdiHelpCircleOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'miter', d: 'M 11,18L 13,18L 13,16L 11,16L 11,18 Z M 12,2C 6.48,2 2,6.48 2,12C 2,17.52 6.48,22 12,22C 17.52,22 22,17.52 22,12C 22,6.48 17.52,2 12,2 Z M 12,20C 7.59001,20 4,16.41 4,12C 4,7.58984 7.59001,4 12,4C 16.4102,4 20,7.58984 20,12C 20,16.41 16.4102,20 12,20 Z M 12,6C 9.79,6 8,7.79 8,10L 10,10C 10,8.9 10.9,8 12,8C 13.1,8 14,8.9 14,10C 14,12 11,11.75 11,15L 13,15C 13,12.75 16,12.5 16,10C 16,7.79 14.21,6 12,6 Z ' })
                )
            );
        }
    }]);

    return MdiHelpCircleOutline;
}(React.Component);

exports.default = MdiHelpCircleOutline;
module.exports = exports['default'];