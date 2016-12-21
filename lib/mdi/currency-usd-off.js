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

var MdiCurrencyUsdOff = function (_React$Component) {
    _inherits(MdiCurrencyUsdOff, _React$Component);

    function MdiCurrencyUsdOff() {
        _classCallCheck(this, MdiCurrencyUsdOff);

        return _possibleConstructorReturn(this, (MdiCurrencyUsdOff.__proto__ || Object.getPrototypeOf(MdiCurrencyUsdOff)).apply(this, arguments));
    }

    _createClass(MdiCurrencyUsdOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 12.5,6.9C 14.28,6.9 14.94,7.75 15,9L 17.21,9C 17.14,7.28 16.09,5.7 14,5.19L 14,3L 11,3L 11,5.16C 10.47,5.28 9.97,5.46 9.52,5.7L 10.99,7.17C 11.4,7 11.9,6.9 12.5,6.9 Z M 5.33,4.06L 4.06,5.33L 7.5,8.77C 7.5,10.85 9.06,11.98 11.41,12.68L 14.92,16.19C 14.58,16.67 13.87,17.1 12.5,17.1C 10.44,17.1 9.63,16.18 9.52,15L 7.32,15C 7.44,17.19 9.08,18.42 11,18.83L 11,21L 14,21L 14,18.85C 14.96,18.67 15.82,18.3 16.45,17.73L 18.67,19.95L 19.94,18.68L 5.33,4.06 Z ' })
                )
            );
        }
    }]);

    return MdiCurrencyUsdOff;
}(React.Component);

exports.default = MdiCurrencyUsdOff;
module.exports = exports['default'];