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

var MdiGoogleEarth = function (_React$Component) {
    _inherits(MdiGoogleEarth, _React$Component);

    function MdiGoogleEarth() {
        _classCallCheck(this, MdiGoogleEarth);

        return _possibleConstructorReturn(this, (MdiGoogleEarth.__proto__ || Object.getPrototypeOf(MdiGoogleEarth)).apply(this, arguments));
    }

    _createClass(MdiGoogleEarth, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 12.3959,7.55666C 9.59589,4.91167 7.30289,5.64966 6.31389,6.09867C 7.05989,5.37867 7.9399,4.79967 8.91689,4.40267C 11.6999,4.29967 14.8319,4.83767 16.5649,7.31367C 16.5649,7.31367 18.9879,11.4947 19.8559,9.65366C 20.0769,10.3967 20.2009,11.1827 20.2009,11.9977C 20.2009,12.2957 20.1819,12.5897 20.1519,12.8797C 18.1169,12.6457 15.3259,10.3247 12.3959,7.55666 Z M 19.0959,16.0957C 18.1569,16.4667 16.9849,17.0977 15.1409,17.0977C 13.2569,17.0977 11.6099,16.3477 9.56088,15.6987C 7.69789,15.1077 7.0089,14.1987 5.71889,14.1987C 5.0629,14.1987 4.73489,14.8577 4.5519,15.4137C 4.07489,14.3727 3.7999,13.2187 3.7999,11.9977C 3.7999,11.1937 3.92088,10.4187 4.13689,9.68467C 5.39989,8.09667 7.33089,7.12166 10.0939,9.25567C 10.0939,9.25567 16.3249,13.9207 19.8849,14.2307C 19.6979,14.8907 19.4319,15.5147 19.0959,16.0957 Z M 12.0009,20.1987C 10.8769,20.1987 9.80688,19.9707 8.83189,19.5627C 8.20889,18.0797 8.21889,16.9177 9.95189,17.4977C 9.95189,17.4977 13.8689,19.0167 17.9929,17.5827C 16.4959,19.1887 14.3679,20.1987 12.0009,20.1987 Z M 12.0009,1.99767C 6.47789,1.99767 2.00089,6.47466 2.00089,11.9977C 2.00089,17.5217 6.47789,21.9977 12.0009,21.9977C 17.5229,21.9977 22.0009,17.5217 22.0009,11.9977C 22.0009,6.47466 17.5229,1.99767 12.0009,1.99767 Z ' })
                )
            );
        }
    }]);

    return MdiGoogleEarth;
}(React.Component);

exports.default = MdiGoogleEarth;
module.exports = exports['default'];