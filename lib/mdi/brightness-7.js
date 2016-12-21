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

var MdiBrightness7 = function (_React$Component) {
    _inherits(MdiBrightness7, _React$Component);

    function MdiBrightness7() {
        _classCallCheck(this, MdiBrightness7);

        return _possibleConstructorReturn(this, (MdiBrightness7.__proto__ || Object.getPrototypeOf(MdiBrightness7)).apply(this, arguments));
    }

    _createClass(MdiBrightness7, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 12,8C 9.79,8 8,9.79 8,12C 8,14.21 9.79,16 12,16C 14.21,16 16,14.21 16,12C 16,9.79 14.21,8 12,8 Z M 12,18C 8.69,18 6,15.31 6,12C 6,8.69 8.69,6 12,6C 15.31,6 18,8.69 18,12C 18,15.31 15.31,18 12,18 Z M 20,8.69L 20,4L 15.31,4L 12,0.690002L 8.69,4L 4,4L 4,8.69L 0.69,12L 4,15.31L 4,20L 8.69,20L 12,23.31L 15.31,20L 20,20L 20,15.31L 23.31,12L 20,8.69 Z ' })
                )
            );
        }
    }]);

    return MdiBrightness7;
}(React.Component);

exports.default = MdiBrightness7;
module.exports = exports['default'];