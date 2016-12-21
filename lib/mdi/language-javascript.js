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

var MdiLanguageJavascript = function (_React$Component) {
    _inherits(MdiLanguageJavascript, _React$Component);

    function MdiLanguageJavascript() {
        _classCallCheck(this, MdiLanguageJavascript);

        return _possibleConstructorReturn(this, (MdiLanguageJavascript.__proto__ || Object.getPrototypeOf(MdiLanguageJavascript)).apply(this, arguments));
    }

    _createClass(MdiLanguageJavascript, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 3,3L 21,3L 21,21L 3,21L 3,3 Z M 7.73286,18.0421C 8.13157,18.8879 8.91704,19.5885 10.2702,19.5885C 11.7685,19.5885 12.7955,18.7911 12.7955,17.0391L 12.7955,11.2637L 11.104,11.2637L 11.104,17.0151C 11.104,17.8609 10.7535,18.0783 10.1977,18.0783C 9.61786,18.0783 9.37611,17.6796 9.11036,17.2085L 7.73286,18.0421 Z M 13.7143,17.8609C 14.2096,18.8396 15.2246,19.5887 16.7953,19.5887C 18.4023,19.5887 19.5985,18.755 19.5985,17.2325C 19.5985,15.8189 18.7889,15.1907 17.351,14.5744L 16.9282,14.3932C 16.2033,14.079 15.8891,13.8736 15.8891,13.3661C 15.8891,12.9554 16.2033,12.6412 16.6987,12.6412C 17.182,12.6412 17.496,12.8466 17.786,13.3661L 19.1031,12.5204C 18.5473,11.5416 17.774,11.167 16.6987,11.167C 15.1883,11.167 14.2217,12.1337 14.2217,13.4024C 14.2217,14.7798 15.0313,15.4323 16.2517,15.9517L 16.6745,16.1331C 17.4478,16.4713 17.9069,16.6767 17.9069,17.2567C 17.9069,17.74 17.46,18.0905 16.7591,18.0905C 15.9254,18.0905 15.4542,17.6555 15.0916,17.0634L 13.7143,17.8609 Z ' })
                )
            );
        }
    }]);

    return MdiLanguageJavascript;
}(React.Component);

exports.default = MdiLanguageJavascript;
module.exports = exports['default'];