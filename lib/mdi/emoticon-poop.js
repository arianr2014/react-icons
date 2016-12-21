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

var MdiEmoticonPoop = function (_React$Component) {
    _inherits(MdiEmoticonPoop, _React$Component);

    function MdiEmoticonPoop() {
        _classCallCheck(this, MdiEmoticonPoop);

        return _possibleConstructorReturn(this, (MdiEmoticonPoop.__proto__ || Object.getPrototypeOf(MdiEmoticonPoop)).apply(this, arguments));
    }

    _createClass(MdiEmoticonPoop, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 9,11C 9.55228,11 10,11.8954 10,13C 10,14.1046 9.55228,15 9,15C 8.44771,15 8,14.1046 8,13C 8,11.8954 8.44771,11 9,11 Z M 15,11C 15.5523,11 16,11.8954 16,13C 16,14.1046 15.5523,15 15,15C 14.4477,15 14,14.1046 14,13C 14,11.8954 14.4477,11 15,11 Z M 9.75,1.75001C 9.75,1.75002 16,4 15,8C 15,8 19,8 17.25,11.5C 17.25,11.5 21.4629,11.9435 20.283,15.3363C 19.027,16.5265 18.6999,16.8796 17.5,17.75L 20.314,16.1433C 21.3451,16.6508 24.3737,18.4697 21,21C 17,24 11,21.25 9,21.25C 7,21.25 5,22 4,22C 3,22 2,21 2,19C 2,17 4,16 5,16C 5,16 2,13 7,11C 7,11 5,8 9,7C 9,7 8,6 9,5C 10,4 9.75,2.75001 9.75,1.75001 Z M 8,17C 9.33333,18.1667 10.6667,19.3333 12,19.3333C 13.3333,19.3333 14.6667,18.1667 16,17L 8,17 Z M 9,10C 7.89543,10 7,11.3431 7,13C 7,14.6569 7.89543,16 9,16C 10.1046,16 11,14.6569 11,13C 11,11.3431 10.1046,10 9,10 Z M 15,10C 13.8954,10 13,11.3431 13,13C 13,14.6569 13.8954,16 15,16C 16.1046,16 17,14.6569 17,13C 17,11.3431 16.1046,10 15,10 Z ' })
                )
            );
        }
    }]);

    return MdiEmoticonPoop;
}(React.Component);

exports.default = MdiEmoticonPoop;
module.exports = exports['default'];