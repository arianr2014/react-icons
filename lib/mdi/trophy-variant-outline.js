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

var MdiTrophyVariantOutline = function (_React$Component) {
    _inherits(MdiTrophyVariantOutline, _React$Component);

    function MdiTrophyVariantOutline() {
        _classCallCheck(this, MdiTrophyVariantOutline);

        return _possibleConstructorReturn(this, (MdiTrophyVariantOutline.__proto__ || Object.getPrototypeOf(MdiTrophyVariantOutline)).apply(this, arguments));
    }

    _createClass(MdiTrophyVariantOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 7,2L 7,4L 2,4L 2,11C 2,12 3,13 4,13L 7.19922,13C 7.59922,14.9 8.6,16.6004 11,16.9004L 11,19C 8,19.2 8,20.2996 8,21.5996L 8,22L 16,22L 16,21.6992C 16,20.3992 16,19.2996 13,19.0996L 13,17C 15.5,16.7 16.5008,14.9996 16.8008,13.0996L 20,13.0996C 21,13.0996 22,12.0996 22,11.0996L 22,4L 17,4L 17,2L 7,2 Z M 9,4L 15,4L 15,12C 15,13.6569 14,15 12,15C 10,15 9,13.6569 9,12L 9,4 Z M 4,6L 7,6L 7,8L 7,11L 4,11L 4,6 Z M 17,6L 20,6L 20,11L 17,11L 17,6 Z ' })
                )
            );
        }
    }]);

    return MdiTrophyVariantOutline;
}(React.Component);

exports.default = MdiTrophyVariantOutline;
module.exports = exports['default'];