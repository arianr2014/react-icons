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

var MdiPowerPlug = function (_React$Component) {
    _inherits(MdiPowerPlug, _React$Component);

    function MdiPowerPlug() {
        _classCallCheck(this, MdiPowerPlug);

        return _possibleConstructorReturn(this, (MdiPowerPlug.__proto__ || Object.getPrototypeOf(MdiPowerPlug)).apply(this, arguments));
    }

    _createClass(MdiPowerPlug, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 16.01,7L 16,3L 14,3L 14,7L 10,7L 10,3L 8,3L 8,7L 7.99,7C 7,6.99 6,7.99 6,8.99L 6,14.48L 9.5,18L 9.5,21L 14.5,21L 14.5,18L 18,14.49L 18,8.99C 18,7.99 17,6.99 16.01,7 Z ' })
                )
            );
        }
    }]);

    return MdiPowerPlug;
}(React.Component);

exports.default = MdiPowerPlug;
module.exports = exports['default'];