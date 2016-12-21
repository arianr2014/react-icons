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

var MdiAlertCircleOutline = function (_React$Component) {
    _inherits(MdiAlertCircleOutline, _React$Component);

    function MdiAlertCircleOutline() {
        _classCallCheck(this, MdiAlertCircleOutline);

        return _possibleConstructorReturn(this, (MdiAlertCircleOutline.__proto__ || Object.getPrototypeOf(MdiAlertCircleOutline)).apply(this, arguments));
    }

    _createClass(MdiAlertCircleOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 11,15L 13,15L 13,17L 11,17L 11,15 Z M 11,7L 13,7L 13,13L 11,13L 11,7 Z M 11.99,2C 6.47,2 2,6.48 2,12C 2,17.52 6.47,22 11.99,22C 17.52,22 22,17.52 22,12C 22,6.48 17.52,2 11.99,2 Z M 12,20C 7.58,20 4,16.42 4,12C 4,7.58 7.58,4 12,4C 16.42,4 20,7.58 20,12C 20,16.42 16.42,20 12,20 Z ' })
                )
            );
        }
    }]);

    return MdiAlertCircleOutline;
}(React.Component);

exports.default = MdiAlertCircleOutline;
module.exports = exports['default'];