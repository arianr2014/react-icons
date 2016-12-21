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

var MdiTemperatureFahrenheit = function (_React$Component) {
    _inherits(MdiTemperatureFahrenheit, _React$Component);

    function MdiTemperatureFahrenheit() {
        _classCallCheck(this, MdiTemperatureFahrenheit);

        return _possibleConstructorReturn(this, (MdiTemperatureFahrenheit.__proto__ || Object.getPrototypeOf(MdiTemperatureFahrenheit)).apply(this, arguments));
    }

    _createClass(MdiTemperatureFahrenheit, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 11,20L 11,5L 20,5L 20,8L 14,8L 14,11L 19,11L 19,14L 14,14L 14,20L 11,20 Z M 6,3C 7.65685,3 9,4.34315 9,6C 9,7.65686 7.65685,9 6,9C 4.34314,9 3,7.65686 3,6C 3,4.34315 4.34315,3 6,3 Z M 6,5C 5.44771,5 5,5.44772 5,6C 5,6.55229 5.44771,7 6,7C 6.55228,7 7,6.55229 7,6C 7,5.44772 6.55228,5 6,5 Z ' })
                )
            );
        }
    }]);

    return MdiTemperatureFahrenheit;
}(React.Component);

exports.default = MdiTemperatureFahrenheit;
module.exports = exports['default'];