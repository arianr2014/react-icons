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

var MdiSpotify = function (_React$Component) {
    _inherits(MdiSpotify, _React$Component);

    function MdiSpotify() {
        _classCallCheck(this, MdiSpotify);

        return _possibleConstructorReturn(this, (MdiSpotify.__proto__ || Object.getPrototypeOf(MdiSpotify)).apply(this, arguments));
    }

    _createClass(MdiSpotify, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 17.9,10.9C 14.7,9.00005 9.35007,8.80009 6.30008,9.75C 5.8001,9.90008 5.29999,9.60007 5.15005,9.14998C 4.99998,8.65001 5.29999,8.15004 5.75008,7.99996C 9.30005,6.94999 15.1501,7.15009 18.8501,9.35009C 19.3,9.60007 19.45,10.2001 19.2,10.65C 18.95,11.0001 18.35,11.15 17.9,10.9 Z M 17.8,13.7C 17.55,14.0501 17.1001,14.2 16.75,13.95C 14.0501,12.3 9.9501,11.8001 6.80005,12.8C 6.39998,12.9001 5.95004,12.7001 5.84998,12.3C 5.75008,11.9 5.95004,11.45 6.3501,11.35C 9.99998,10.25 14.5,10.8 17.6,12.7001C 17.9,12.85 18.05,13.35 17.8,13.7 Z M 16.6001,16.45C 16.4,16.75 16.0501,16.8501 15.7501,16.65C 13.4,15.2001 10.4501,14.9001 6.94998,15.7001C 6.60009,15.8 6.30008,15.55 6.20002,15.25C 6.09997,14.9001 6.3501,14.6001 6.64997,14.5C 10.4501,13.65 13.75,14 16.3501,15.6C 16.7,15.7501 16.75,16.15 16.6001,16.45 Z M 12,2.00002C 6.50003,2.00002 2,6.50005 2,12C 2,17.5 6.50003,22 12,22C 17.5,22 22,17.5 22,12C 22,6.50005 17.55,2.00002 12,2.00002 Z ' })
                )
            );
        }
    }]);

    return MdiSpotify;
}(React.Component);

exports.default = MdiSpotify;
module.exports = exports['default'];