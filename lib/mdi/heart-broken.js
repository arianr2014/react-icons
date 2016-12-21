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

var MdiHeartBroken = function (_React$Component) {
    _inherits(MdiHeartBroken, _React$Component);

    function MdiHeartBroken() {
        _classCallCheck(this, MdiHeartBroken);

        return _possibleConstructorReturn(this, (MdiHeartBroken.__proto__ || Object.getPrototypeOf(MdiHeartBroken)).apply(this, arguments));
    }

    _createClass(MdiHeartBroken, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 11.9993,21.35L 10.5503,20.0331C 5.40133,15.361 1.99933,12.274 1.99933,8.49798C 1.99933,5.41399 4.4153,2.99798 7.49933,2.99798C 8.16538,2.99798 8.82075,3.11625 9.43722,3.33386L 13,9.35011L 9,14.3501L 11.9998,21.3496L 11.9993,21.35 Z M 16.4993,2.99798C 19.5833,2.99798 21.9993,5.41399 21.9993,8.49798C 21.9993,12.274 18.5973,15.361 13.4483,20.0331L 12.0002,21.3493L 11,14.3501L 15.5,9.35012L 12.8528,4.26896C 13.8743,3.47236 15.1654,2.99798 16.4993,2.99798 Z ' })
                )
            );
        }
    }]);

    return MdiHeartBroken;
}(React.Component);

exports.default = MdiHeartBroken;
module.exports = exports['default'];