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

var MdiCurrencyInr = function (_React$Component) {
    _inherits(MdiCurrencyInr, _React$Component);

    function MdiCurrencyInr() {
        _classCallCheck(this, MdiCurrencyInr);

        return _possibleConstructorReturn(this, (MdiCurrencyInr.__proto__ || Object.getPrototypeOf(MdiCurrencyInr)).apply(this, arguments));
    }

    _createClass(MdiCurrencyInr, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 8,3L 18,3L 17,5L 13.7428,5C 14.221,5.57903 14.583,6.25761 14.793,7L 18,7L 17,9L 14.9776,9C 14.7458,11.5716 12.7441,13.6327 10.2,13.9559L 10.2,14.0062L 9.50335,14.0039L 15.4959,21L 12.9959,21L 7,14L 7,12L 9.5,12.0049L 9.5,12C 11.2632,12 12.7219,10.6961 12.9646,9L 7,9L 8,7L 12.6632,7C 12.1015,5.81753 10.8962,5 9.5,5L 7,5L 8,3 Z ' })
                )
            );
        }
    }]);

    return MdiCurrencyInr;
}(React.Component);

exports.default = MdiCurrencyInr;
module.exports = exports['default'];