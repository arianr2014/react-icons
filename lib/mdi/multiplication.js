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

var MdiMultiplication = function (_React$Component) {
    _inherits(MdiMultiplication, _React$Component);

    function MdiMultiplication() {
        _classCallCheck(this, MdiMultiplication);

        return _possibleConstructorReturn(this, (MdiMultiplication.__proto__ || Object.getPrototypeOf(MdiMultiplication)).apply(this, arguments));
    }

    _createClass(MdiMultiplication, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 11,3L 13,3L 12.9924,10.269L 19.2895,6.64209L 20.2895,8.37414L 14,11.9967L 20.2989,15.6421L 19.2989,17.3741L 12.9888,13.7223L 12.9813,21L 10.9813,21L 10.9888,13.731L 4.69172,17.3579L 3.69172,15.6259L 10,11.9925L 3.71982,8.35791L 4.71982,6.62586L 10.9924,10.2561L 11,3 Z ' })
                )
            );
        }
    }]);

    return MdiMultiplication;
}(React.Component);

exports.default = MdiMultiplication;
module.exports = exports['default'];