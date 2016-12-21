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

var MdiCurrencyUsd = function (_React$Component) {
    _inherits(MdiCurrencyUsd, _React$Component);

    function MdiCurrencyUsd() {
        _classCallCheck(this, MdiCurrencyUsd);

        return _possibleConstructorReturn(this, (MdiCurrencyUsd.__proto__ || Object.getPrototypeOf(MdiCurrencyUsd)).apply(this, arguments));
    }

    _createClass(MdiCurrencyUsd, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 11.8,10.9C 9.53,10.31 8.8,9.7 8.8,8.75C 8.8,7.66 9.81,6.9 11.5,6.9C 13.28,6.9 13.94,7.75 14,9L 16.21,9C 16.14,7.28 15.09,5.7 13,5.19L 13,3L 10,3L 10,5.16C 8.06,5.58 6.5,6.84 6.5,8.77C 6.5,11.08 8.41,12.23 11.2,12.9C 13.7,13.5 14.2,14.38 14.2,15.31C 14.2,16 13.71,17.1 11.5,17.1C 9.44,17.1 8.63,16.18 8.52,15L 6.32,15C 6.44,17.19 8.08,18.42 10,18.83L 10,21L 13,21L 13,18.85C 14.95,18.48 16.5,17.35 16.5,15.3C 16.5,12.46 14.07,11.49 11.8,10.9 Z ' })
                )
            );
        }
    }]);

    return MdiCurrencyUsd;
}(React.Component);

exports.default = MdiCurrencyUsd;
module.exports = exports['default'];