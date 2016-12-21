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

var MdiCurrencyEur = function (_React$Component) {
    _inherits(MdiCurrencyEur, _React$Component);

    function MdiCurrencyEur() {
        _classCallCheck(this, MdiCurrencyEur);

        return _possibleConstructorReturn(this, (MdiCurrencyEur.__proto__ || Object.getPrototypeOf(MdiCurrencyEur)).apply(this, arguments));
    }

    _createClass(MdiCurrencyEur, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 7.07089,11L 7,12L 7.07089,13L 17.3462,13L 16.5,15L 7.67363,15C 8.79709,17.3649 11.2076,19 14,19C 16.231,19 18.2182,17.9563 19.5,16.3306L 19.5,19.1245C 17.9791,20.3003 16.0712,21 14,21C 10.0813,21 6.74763,18.4956 5.51212,15L 2,15L 3,13L 5.05493,13L 5,12L 5.05493,11L 2,11L 3,9L 5.51212,9C 6.74763,5.50442 10.0813,3 14,3C 16.5203,3 18.7986,4.03593 20.4324,5.70522L 19.5656,7.75396C 18.2866,6.07995 16.2694,5 14,5C 11.2076,5 8.7971,6.63505 7.67363,9L 19.0385,9L 18.1923,11L 7.07089,11 Z ' })
                )
            );
        }
    }]);

    return MdiCurrencyEur;
}(React.Component);

exports.default = MdiCurrencyEur;
module.exports = exports['default'];