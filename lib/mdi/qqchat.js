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

var MdiQqchat = function (_React$Component) {
    _inherits(MdiQqchat, _React$Component);

    function MdiQqchat() {
        _classCallCheck(this, MdiQqchat);

        return _possibleConstructorReturn(this, (MdiQqchat.__proto__ || Object.getPrototypeOf(MdiQqchat)).apply(this, arguments));
    }

    _createClass(MdiQqchat, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 3.17967,13.5448C 3.76426,12.1621 4.56523,11.1427 5.16966,10.9178C 5.15833,10.1168 5.308,9.62374 5.55772,9.22219C 5.55772,9.19167 5.48881,8.8585 5.71523,8.45172C 5.86774,4.85442 8.20926,2.00048 12,2.00002C 15.7908,2.00048 18.1324,4.85446 18.2849,8.45185C 18.5113,8.85863 18.4424,9.19181 18.4424,9.22233C 18.6921,9.62389 18.8418,10.117 18.8305,10.9179C 19.4349,11.1428 20.2359,12.1623 20.8205,13.5451C 21.569,15.3053 21.6903,16.9874 21.0894,17.2981C 20.6765,17.5166 20.0281,17.0236 19.4208,16.1197C 19.1795,17.1037 18.5836,17.9962 17.733,18.7114C 18.6255,19.0413 19.2072,19.5784 19.2072,20.1885C 19.2072,21.1888 17.6308,22.0004 15.6854,22.0004C 13.9309,22.0004 12.4787,21.3414 12.2098,20.4765L 11.7902,20.4761C 11.5213,21.3409 10.0691,22 8.31466,22C 6.36934,22 4.79295,21.1884 4.79295,20.1881C 4.79295,19.578 5.37469,19.0409 6.26717,18.711C 5.41654,17.9959 4.82062,17.1034 4.57941,16.1194C 3.97213,17.0233 3.32369,17.5163 2.91079,17.2978C 2.30988,16.9871 2.43121,15.305 3.17967,13.5448 Z ' })
                )
            );
        }
    }]);

    return MdiQqchat;
}(React.Component);

exports.default = MdiQqchat;
module.exports = exports['default'];