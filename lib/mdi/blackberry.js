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

var MdiBlackberry = function (_React$Component) {
    _inherits(MdiBlackberry, _React$Component);

    function MdiBlackberry() {
        _classCallCheck(this, MdiBlackberry);

        return _possibleConstructorReturn(this, (MdiBlackberry.__proto__ || Object.getPrototypeOf(MdiBlackberry)).apply(this, arguments));
    }

    _createClass(MdiBlackberry, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 5.44828,10.2759C 6.40049,10.2759 7.51724,11.0478 7.51724,12C 7.51724,12.9522 6.40049,13.7241 5.44828,13.7241L 2,13.7241L 2.68966,10.2759L 5.44828,10.2759 Z M 6.13793,4.75863C 7.09015,4.75863 8.2069,5.53055 8.2069,6.48276C 8.2069,7.43497 7.09015,8.20689 6.13793,8.20689L 2.68966,8.2069L 3.37931,4.75862L 6.13793,4.75863 Z M 13.0345,4.75863C 13.9867,4.75863 15.1034,5.53054 15.1034,6.48276C 15.1034,7.43497 13.9867,8.20689 13.0345,8.20689L 9.4138,8.2069L 10.1034,4.75862L 13.0345,4.75863 Z M 12.3448,10.2759C 13.297,10.2759 14.4138,11.0478 14.4138,12C 14.4138,12.9522 13.297,13.7241 12.3448,13.7241L 8.72414,13.7241L 9.41379,10.2759L 12.3448,10.2759 Z M 10.9655,15.7931C 11.9177,15.7931 13.0345,16.565 13.0345,17.5172C 13.0345,18.4695 11.9177,19.2414 10.9655,19.2414L 7.51725,19.2414L 8.2069,15.7931L 10.9655,15.7931 Z M 18.5517,13.7241C 19.5039,13.7241 20.6207,14.4961 20.6207,15.4483C 20.6207,16.4005 19.5039,17.1724 18.5517,17.1724L 15.1035,17.1724L 15.7931,13.7241L 18.5517,13.7241 Z M 19.931,8.2069C 20.8832,8.2069 22,8.97881 22,9.93103C 22,10.8832 20.8832,11.6552 19.931,11.6552L 16.4828,11.6552L 17.1724,8.20689L 19.931,8.2069 Z ' })
                )
            );
        }
    }]);

    return MdiBlackberry;
}(React.Component);

exports.default = MdiBlackberry;
module.exports = exports['default'];