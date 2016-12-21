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

var MdiCurrencyBtc = function (_React$Component) {
    _inherits(MdiCurrencyBtc, _React$Component);

    function MdiCurrencyBtc() {
        _classCallCheck(this, MdiCurrencyBtc);

        return _possibleConstructorReturn(this, (MdiCurrencyBtc.__proto__ || Object.getPrototypeOf(MdiCurrencyBtc)).apply(this, arguments));
    }

    _createClass(MdiCurrencyBtc, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 4.5,5L 8,5L 8,2L 10,2L 10,5L 11.5,5L 11.5,2.00001L 13.5,2.00001L 13.5,5.00001C 19,5 19,11 16,11.25C 20,11 21,19 13.5,19L 13.5,22L 11.5,22L 11.5,19L 10,19L 10,22L 8,22L 8,19L 4.5,19L 5,17L 6,17C 6.55228,17 7,16.5523 7,16L 7,8C 7,7.44772 6.55228,7 6,7L 4.5,7L 4.5,5 Z M 10,7L 10,11C 10,11 14.5,11.25 14.5,9.00003C 14.5,6.75002 10,7.00001 10,7 Z M 10,12.5L 10,16.9961C 10,16.9961 15.5,17 15.5,14.75C 15.5,12.5 9.99999,12.5 10,12.5 Z ' })
                )
            );
        }
    }]);

    return MdiCurrencyBtc;
}(React.Component);

exports.default = MdiCurrencyBtc;
module.exports = exports['default'];