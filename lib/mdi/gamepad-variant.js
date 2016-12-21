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

var MdiGamepadVariant = function (_React$Component) {
    _inherits(MdiGamepadVariant, _React$Component);

    function MdiGamepadVariant() {
        _classCallCheck(this, MdiGamepadVariant);

        return _possibleConstructorReturn(this, (MdiGamepadVariant.__proto__ || Object.getPrototypeOf(MdiGamepadVariant)).apply(this, arguments));
    }

    _createClass(MdiGamepadVariant, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 7,6L 17,6C 20.3137,6 23,8.68629 23,12C 23,15.3137 20.3137,18 17,18C 15.223,18 13.6264,17.2275 12.5278,16L 11.4722,16C 10.3736,17.2275 8.777,18 7,18C 3.68629,18 1,15.3137 1,12C 1,8.68629 3.68629,6 7,6 Z M 6,9L 6,11L 4,11L 4,13L 6,13L 6,15L 8,15L 8,13L 10,13L 10,11L 8,11L 8,9L 6,9 Z M 15.5,12C 14.6716,12 14,12.6716 14,13.5C 14,14.3284 14.6716,15 15.5,15C 16.3284,15 17,14.3284 17,13.5C 17,12.6716 16.3284,12 15.5,12 Z M 18.5,9C 17.6716,9 17,9.67158 17,10.5C 17,11.3284 17.6716,12 18.5,12C 19.3284,12 20,11.3284 20,10.5C 20,9.67158 19.3284,9 18.5,9 Z ' })
                )
            );
        }
    }]);

    return MdiGamepadVariant;
}(React.Component);

exports.default = MdiGamepadVariant;
module.exports = exports['default'];