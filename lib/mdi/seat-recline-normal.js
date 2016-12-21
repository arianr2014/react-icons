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

var MdiSeatReclineNormal = function (_React$Component) {
    _inherits(MdiSeatReclineNormal, _React$Component);

    function MdiSeatReclineNormal() {
        _classCallCheck(this, MdiSeatReclineNormal);

        return _possibleConstructorReturn(this, (MdiSeatReclineNormal.__proto__ || Object.getPrototypeOf(MdiSeatReclineNormal)).apply(this, arguments));
    }

    _createClass(MdiSeatReclineNormal, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 7.5875,5.41C 6.81125,4.62875 6.81125,3.35875 7.5875,2.5775C 8.36875,1.80125 9.63875,1.80125 10.42,2.5775C 11.2013,3.35875 11.2013,4.62875 10.42,5.41C 9.62875,6.20125 8.36875,6.20125 7.5875,5.41 Z M 6.00125,16.0012L 6.00125,7.0025L 3.99875,7.0025L 3.99875,16.0012C 3.99875,18.76 6.24,21.0012 8.99875,21.0012L 15,21.0012L 15,18.9988L 8.99875,18.9988C 7.33875,18.9988 6.00125,17.6613 6.00125,16.0012 Z M 20,20.0688L 14.9312,15L 11.4987,15L 11.4987,11.3187C 12.9,12.4712 15.0975,13.4812 17.0025,13.4812L 17.0025,11.3187C 15.3413,11.3375 13.3888,10.4488 12.3287,9.2825L 10.9275,7.73C 10.7425,7.52 10.4975,7.34875 10.2388,7.23125C 9.95125,7.09 9.61875,7.0025 9.2825,7.0025L 9.2475,7.0025C 8.0075,7.0025 7.0025,8.0075 7.0025,9.2475L 7.0025,15C 7.0025,16.66 8.34,17.9975 10,17.9975L 15.0688,17.9975L 18.5688,21.4988' })
                )
            );
        }
    }]);

    return MdiSeatReclineNormal;
}(React.Component);

exports.default = MdiSeatReclineNormal;
module.exports = exports['default'];