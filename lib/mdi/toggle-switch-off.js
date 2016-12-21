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

var MdiToggleSwitchOff = function (_React$Component) {
    _inherits(MdiToggleSwitchOff, _React$Component);

    function MdiToggleSwitchOff() {
        _classCallCheck(this, MdiToggleSwitchOff);

        return _possibleConstructorReturn(this, (MdiToggleSwitchOff.__proto__ || Object.getPrototypeOf(MdiToggleSwitchOff)).apply(this, arguments));
    }

    _createClass(MdiToggleSwitchOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 6.99992,7.00008C 9.76143,7.00008 11.9999,9.23861 11.9999,12.0001C 11.9999,14.7615 9.76135,17.0001 6.99992,17.0001C 4.23848,17.0001 1.99992,14.7615 1.99992,12.0001C 1.99992,9.23861 4.2384,7.00008 6.99992,7.00008 Z M 20,14.0002L 14,14.0002L 14,10.0002L 20,10.0002C 21.1046,10.0002 21.9999,10.8956 21.9999,12.0002C 21.9999,13.1047 21.1045,14.0002 20,14.0002 Z M 7,9C 5.34315,9 4,10.3431 4,12C 4,13.6569 5.34314,15 7,15C 8.65685,15 10,13.6569 10,12C 10,10.3431 8.65685,9 7,9 Z ' })
                )
            );
        }
    }]);

    return MdiToggleSwitchOff;
}(React.Component);

exports.default = MdiToggleSwitchOff;
module.exports = exports['default'];