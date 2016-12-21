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

var MdiMicrophoneOutline = function (_React$Component) {
    _inherits(MdiMicrophoneOutline, _React$Component);

    function MdiMicrophoneOutline() {
        _classCallCheck(this, MdiMicrophoneOutline);

        return _possibleConstructorReturn(this, (MdiMicrophoneOutline.__proto__ || Object.getPrototypeOf(MdiMicrophoneOutline)).apply(this, arguments));
    }

    _createClass(MdiMicrophoneOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 17.2982,10.998C 17.2982,13.998 14.7612,16.098 11.9992,16.098C 9.23719,16.098 6.6992,13.998 6.6992,10.998L 4.9992,10.998C 4.9992,14.413 7.7182,17.231 10.9992,17.7161L 10.9992,20.998L 12.9992,20.998L 12.9992,17.7161C 16.2782,17.231 18.9992,14.413 18.9992,10.998M 10.7992,4.89807C 10.7992,4.23602 11.3382,3.69806 11.9992,3.69806C 12.6602,3.69806 13.1982,4.23907 13.1982,4.89807L 13.1902,11.098C 13.1902,11.7601 12.6552,12.298 11.9992,12.298C 11.3382,12.298 10.7992,11.7601 10.7992,11.098M 11.9992,13.998C 13.6562,13.998 14.9892,12.6541 14.9892,10.998L 14.9982,4.99805C 14.9982,3.34003 13.6562,1.99805 11.9992,1.99805C 10.3432,1.99805 8.9992,3.34003 8.9992,4.99805L 8.9992,10.998C 8.9992,12.6541 10.3432,13.998 11.9992,13.998 Z ' })
                )
            );
        }
    }]);

    return MdiMicrophoneOutline;
}(React.Component);

exports.default = MdiMicrophoneOutline;
module.exports = exports['default'];