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

var MdiWallet = function (_React$Component) {
    _inherits(MdiWallet, _React$Component);

    function MdiWallet() {
        _classCallCheck(this, MdiWallet);

        return _possibleConstructorReturn(this, (MdiWallet.__proto__ || Object.getPrototypeOf(MdiWallet)).apply(this, arguments));
    }

    _createClass(MdiWallet, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 21.0013,17.9975L 21.0013,18.9988C 21.0013,20.0975 20.0975,21.0012 18.9988,21.0012L 5,21.0012C 3.89125,21.0012 2.9975,20.0975 2.9975,18.9988L 2.9975,5C 2.9975,3.90125 3.89125,2.9978 5,2.9978L 18.9988,2.9978C 20.0975,2.9978 21.0013,3.90125 21.0013,5L 21.0013,6.00125L 12.0025,6.00125C 10.8888,6.00125 10,6.9 10,7.9975L 10,16.0012C 10,17.1 10.8888,17.9975 12.0025,17.9975M 12.0025,16.0012L 22.0025,16.0012L 22.0025,7.9975L 12.0025,7.9975M 16.0012,13.5012C 15.1713,13.5012 14.5025,12.8325 14.5025,12.0025C 14.5025,11.1713 15.1713,10.4975 16.0012,10.4975C 16.8313,10.4975 17.5,11.1713 17.5,12.0025C 17.5,12.8325 16.8313,13.5012 16.0012,13.5012 Z ' })
                )
            );
        }
    }]);

    return MdiWallet;
}(React.Component);

exports.default = MdiWallet;
module.exports = exports['default'];