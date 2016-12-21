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

var MdiBellPlus = function (_React$Component) {
    _inherits(MdiBellPlus, _React$Component);

    function MdiBellPlus() {
        _classCallCheck(this, MdiBellPlus);

        return _possibleConstructorReturn(this, (MdiBellPlus.__proto__ || Object.getPrototypeOf(MdiBellPlus)).apply(this, arguments));
    }

    _createClass(MdiBellPlus, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 10.01,21.0113C 10.01,22.1087 10.8988,22.9975 12.0025,22.9975C 13.1,22.9975 13.9888,22.1087 13.9888,21.0113M 18.8813,16.8212L 18.8813,11.0012C 18.8813,7.74875 16.6313,5.02875 13.5887,4.31125L 13.5887,3.58875C 13.5887,2.71 12.8813,2.0025 12.0025,2.0025C 11.1188,2.0025 10.41,2.71 10.41,3.58875L 10.41,4.31125C 7.36875,5.02875 5.1225,7.74875 5.1225,11.0012L 5.1225,16.8212L 2.9975,18.94L 2.9975,20L 21.0013,20L 21.0013,18.94M 16.0012,13.0075L 12.9975,13.0075L 12.9975,16.0113L 11.0013,16.0113L 11.0013,13.0075L 7.9975,13.0075L 7.9975,11.0012L 11.0013,11.0012L 11.0013,7.9975L 12.9975,7.9975L 12.9975,11.0012L 16.0012,11.0012' })
                )
            );
        }
    }]);

    return MdiBellPlus;
}(React.Component);

exports.default = MdiBellPlus;
module.exports = exports['default'];