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

var MdiFlashRedEye = function (_React$Component) {
    _inherits(MdiFlashRedEye, _React$Component);

    function MdiFlashRedEye() {
        _classCallCheck(this, MdiFlashRedEye);

        return _possibleConstructorReturn(this, (MdiFlashRedEye.__proto__ || Object.getPrototypeOf(MdiFlashRedEye)).apply(this, arguments));
    }

    _createClass(MdiFlashRedEye, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 16,4.98C 15.436,4.98 14.98,5.436 14.98,6C 14.98,6.564 15.437,7.02 16,7.02C 16.564,7.02 17.02,6.564 17.02,6C 17.02,5.437 16.564,4.98 16,4.98 Z M 16,2C 13.273,2 10.944,3.658 10,6C 10.944,8.342 13.273,10 16,10C 18.727,10 21.056,8.342 22,6C 21.056,3.658 18.727,2 16,2 Z M 16,3.5C 17.38,3.5 18.5,4.618 18.5,6C 18.5,7.38 17.38,8.5 16,8.5C 14.62,8.5 13.5,7.38 13.5,6C 13.5,4.618 14.62,3.5 16,3.5 Z M 3,2L 3,14L 6,14L 6,23L 13,11L 9,11L 10.12,8.475C 9.44,7.757 8.875,6.93 8.5,6C 9.19,4.288 10.483,2.884 12.11,2L 3,2 Z ' })
                )
            );
        }
    }]);

    return MdiFlashRedEye;
}(React.Component);

exports.default = MdiFlashRedEye;
module.exports = exports['default'];