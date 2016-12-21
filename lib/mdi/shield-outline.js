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

var MdiShieldOutline = function (_React$Component) {
    _inherits(MdiShieldOutline, _React$Component);

    function MdiShieldOutline() {
        _classCallCheck(this, MdiShieldOutline);

        return _possibleConstructorReturn(this, (MdiShieldOutline.__proto__ || Object.getPrototypeOf(MdiShieldOutline)).apply(this, arguments));
    }

    _createClass(MdiShieldOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 21,11C 21,16.55 17.1602,21.74 12,23C 6.83985,21.74 2.99999,16.55 2.99999,11L 3,5.00003L 12,1L 21,5.00003L 21,11 Z M 12,21C 15.75,20 19,15.5389 19,11.2222L 19,6.29885L 12,3.18225L 4.99999,6.29885L 5,11.2222C 5,15.5389 8.24999,20 12,21 Z ' })
                )
            );
        }
    }]);

    return MdiShieldOutline;
}(React.Component);

exports.default = MdiShieldOutline;
module.exports = exports['default'];