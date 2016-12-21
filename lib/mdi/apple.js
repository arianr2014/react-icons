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

var MdiApple = function (_React$Component) {
    _inherits(MdiApple, _React$Component);

    function MdiApple() {
        _classCallCheck(this, MdiApple);

        return _possibleConstructorReturn(this, (MdiApple.__proto__ || Object.getPrototypeOf(MdiApple)).apply(this, arguments));
    }

    _createClass(MdiApple, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 18.707,19.5181C 17.8758,20.7374 17.016,21.9492 15.6585,21.9746C 14.3225,22 13.8942,21.1808 12.3697,21.1808C 10.8436,21.1808 10.3662,21.9492 9.10479,22C 7.79426,22.0492 6.79775,20.6831 5.9597,19.4693C 4.24759,16.9875 2.94084,12.452 4.69828,9.39118C 5.56856,7.87111 7.128,6.90935 8.81789,6.88396C 10.1049,6.8602 11.3207,7.75435 12.1068,7.75435C 12.8941,7.75435 14.3698,6.68082 15.9212,6.83828C 16.5706,6.86519 18.3932,7.10077 19.5637,8.81887C 19.4712,8.87986 17.3882,10.0955 17.4136,12.6281C 17.4391,15.6534 20.0564,16.659 20.0868,16.6727C 20.0631,16.7438 19.6684,18.1083 18.707,19.5181 Z M 13.0073,3.51493C 13.7258,2.67036 14.9398,2.04217 15.9417,1.99996C 16.0697,3.17311 15.5992,4.34788 14.9043,5.1944C 14.208,6.0394 13.0682,6.69764 11.9496,6.60975C 11.7976,5.46199 12.3614,4.26497 13.0073,3.51493 Z ' })
                )
            );
        }
    }]);

    return MdiApple;
}(React.Component);

exports.default = MdiApple;
module.exports = exports['default'];