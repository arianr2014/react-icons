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

var MdiMedium = function (_React$Component) {
    _inherits(MdiMedium, _React$Component);

    function MdiMedium() {
        _classCallCheck(this, MdiMedium);

        return _possibleConstructorReturn(this, (MdiMedium.__proto__ || Object.getPrototypeOf(MdiMedium)).apply(this, arguments));
    }

    _createClass(MdiMedium, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 21.9288,6.61625L 15.8894,16.4716L 11.5719,9.42603L 15.0087,3.84105C 15.1668,3.58425 15.4947,3.46648 15.7792,3.54857L 21.9288,6.61625 Z M 22,19.7818C 22,20.3517 21.504,20.5657 20.8923,20.2599L 16.1836,17.9055L 22,8.41393L 22,19.7818 Z M 8.98814,19.9374C 8.98814,20.5049 8.57267,20.7616 8.0651,20.5078L 2.55379,17.7572C 2.24918,17.6049 1.99997,17.2017 1.99997,16.8611L 1.99997,4.1393C 1.99997,3.68523 2.33231,3.47987 2.7384,3.68294L 8.70478,6.66122L 8.98814,7.12362L 8.98814,19.9374 Z M 15.2858,17.4566L 10,14.8137L 10,8.81372L 15.2858,17.4566 Z ' })
                )
            );
        }
    }]);

    return MdiMedium;
}(React.Component);

exports.default = MdiMedium;
module.exports = exports['default'];