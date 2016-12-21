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

var MdiSkype = function (_React$Component) {
    _inherits(MdiSkype, _React$Component);

    function MdiSkype() {
        _classCallCheck(this, MdiSkype);

        return _possibleConstructorReturn(this, (MdiSkype.__proto__ || Object.getPrototypeOf(MdiSkype)).apply(this, arguments));
    }

    _createClass(MdiSkype, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 18.0104,5.9896C 20.0657,8.04484 20.8484,10.8907 20.3586,13.5482C 20.767,14.2726 21,15.1091 21,16C 21,18.7614 18.7614,21 16,21C 15.1091,21 14.2726,20.767 13.5482,20.3586C 10.8907,20.8484 8.04485,20.0657 5.9896,18.0104C 3.93435,15.9552 3.15161,13.1093 3.64139,10.4518C 3.233,9.72736 3,8.89089 3,8C 3,5.23858 5.23858,3.00001 8,3.00001C 8.89089,3.00001 9.72736,3.233 10.4518,3.64139C 13.1093,3.15161 15.9552,3.93435 18.0104,5.9896 Z M 12.0387,17.1638C 14.912,17.1638 16.3356,15.7788 16.3356,13.9242C 16.3356,12.7266 15.7833,11.4552 13.6058,10.9702L 11.6175,10.529C 10.862,10.3564 9.99089,10.129 9.99089,9.416C 9.99089,8.70164 10.6017,8.20253 11.7044,8.20253C 13.9256,8.20253 13.7227,9.72889 14.8257,9.72889C 15.4058,9.72889 15.9139,9.38789 15.9139,8.80105C 15.9139,7.43163 13.7227,6.40439 11.8639,6.40439C 9.84559,6.40439 7.69671,7.26127 7.69671,9.54376C 7.69671,10.6431 8.08922,11.8123 10.2526,12.3547L 12.9382,13.0256C 13.7511,13.2257 13.9546,13.6826 13.9546,14.0951C 13.9546,14.7814 13.2728,15.4514 12.0387,15.4514C 9.62788,15.4514 9.96221,13.596 8.67022,13.596C 8.08922,13.596 7.66803,13.9955 7.66803,14.5665C 7.66803,15.6795 9.01877,17.1638 12.0387,17.1638 Z ' })
                )
            );
        }
    }]);

    return MdiSkype;
}(React.Component);

exports.default = MdiSkype;
module.exports = exports['default'];