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

var MdiCodeParentheses = function (_React$Component) {
    _inherits(MdiCodeParentheses, _React$Component);

    function MdiCodeParentheses() {
        _classCallCheck(this, MdiCodeParentheses);

        return _possibleConstructorReturn(this, (MdiCodeParentheses.__proto__ || Object.getPrototypeOf(MdiCodeParentheses)).apply(this, arguments));
    }

    _createClass(MdiCodeParentheses, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 17.6173,2.998C 19.1283,5.272 19.9963,8.549 20.0003,11.996C 19.9983,15.443 19.1313,18.722 17.6213,20.998L 16.0153,19.961C 17.2643,18.073 17.9983,15.126 18.0003,11.996C 17.9973,8.866 17.2623,5.92 16.0133,4.033L 17.6173,2.998 Z M 6.379,2.998L 7.984,4.035C 6.736,5.923 6.002,8.87 6,12C 6.003,15.13 6.738,18.076 7.986,19.963L 6.383,21C 4.871,18.726 4.003,15.447 4,12C 4.002,8.553 4.869,5.274 6.379,2.998 Z ' })
                )
            );
        }
    }]);

    return MdiCodeParentheses;
}(React.Component);

exports.default = MdiCodeParentheses;
module.exports = exports['default'];