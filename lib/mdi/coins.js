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

var MdiCoins = function (_React$Component) {
    _inherits(MdiCoins, _React$Component);

    function MdiCoins() {
        _classCallCheck(this, MdiCoins);

        return _possibleConstructorReturn(this, (MdiCoins.__proto__ || Object.getPrototypeOf(MdiCoins)).apply(this, arguments));
    }

    _createClass(MdiCoins, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 15,4C 19.42,4 23,7.58 23,12C 23,16.42 19.42,20 15,20C 10.58,20 7,16.42 7,12C 7,7.58 10.58,4 15,4 Z M 15,18C 18.31,18 21,15.31 21,12C 21,8.69 18.31,6 15,6C 11.69,6 9,8.69 9,12C 9,15.31 11.69,18 15,18 Z M 3,12C 3,14.61 4.67,16.83 7,17.65L 7,19.74C 3.55,18.85 1,15.73 1,12C 1,8.27 3.55,5.15 7,4.26L 7,6.35C 4.67,7.17 3,9.39 3,12 Z ' })
                )
            );
        }
    }]);

    return MdiCoins;
}(React.Component);

exports.default = MdiCoins;
module.exports = exports['default'];