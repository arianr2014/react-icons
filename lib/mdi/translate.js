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

var MdiTranslate = function (_React$Component) {
    _inherits(MdiTranslate, _React$Component);

    function MdiTranslate() {
        _classCallCheck(this, MdiTranslate);

        return _possibleConstructorReturn(this, (MdiTranslate.__proto__ || Object.getPrototypeOf(MdiTranslate)).apply(this, arguments));
    }

    _createClass(MdiTranslate, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 12.87,15.07L 10.33,12.56L 10.36,12.53C 12.1,10.59 13.34,8.36 14.07,6L 17,6L 17,4L 10,4L 10,2L 8,2L 8,4L 1,4L 1,5.99L 12.17,5.99C 11.5,7.92 10.44,9.75 9,11.35C 8.07,10.32 7.3,9.19 6.69,8L 4.69,8C 5.42,9.63 6.42,11.17 7.67,12.56L 2.58,17.58L 4,19L 9,14L 12.11,17.11L 12.87,15.07 Z M 18.5,10L 16.5,10L 12,22L 14,22L 15.12,19L 19.87,19L 21,22L 23,22L 18.5,10 Z M 15.88,17L 17.5,12.67L 19.12,17L 15.88,17 Z ' })
                )
            );
        }
    }]);

    return MdiTranslate;
}(React.Component);

exports.default = MdiTranslate;
module.exports = exports['default'];