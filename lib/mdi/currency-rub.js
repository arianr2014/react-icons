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

var MdiCurrencyRub = function (_React$Component) {
    _inherits(MdiCurrencyRub, _React$Component);

    function MdiCurrencyRub() {
        _classCallCheck(this, MdiCurrencyRub);

        return _possibleConstructorReturn(this, (MdiCurrencyRub.__proto__ || Object.getPrototypeOf(MdiCurrencyRub)).apply(this, arguments));
    }

    _createClass(MdiCurrencyRub, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 6,10L 7,10L 7,3L 14.5,3C 16.9853,3 19,5.01472 19,7.5C 19,9.98528 16.9853,12 14.5,12L 9,12L 9,14L 15,14L 15,16L 9,16L 9,21L 7,21L 7,16L 6,16L 6,14L 7,14L 7,12L 6,12L 6,10 Z M 14.5,5L 9,5L 9,10L 14.5,10C 15.8807,10 17,8.88072 17,7.50001C 17,6.1193 15.8807,5 14.5,5 Z ' })
                )
            );
        }
    }]);

    return MdiCurrencyRub;
}(React.Component);

exports.default = MdiCurrencyRub;
module.exports = exports['default'];