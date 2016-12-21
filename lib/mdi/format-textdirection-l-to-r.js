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

var MdiFormatTextdirectionLToR = function (_React$Component) {
    _inherits(MdiFormatTextdirectionLToR, _React$Component);

    function MdiFormatTextdirectionLToR() {
        _classCallCheck(this, MdiFormatTextdirectionLToR);

        return _possibleConstructorReturn(this, (MdiFormatTextdirectionLToR.__proto__ || Object.getPrototypeOf(MdiFormatTextdirectionLToR)).apply(this, arguments));
    }

    _createClass(MdiFormatTextdirectionLToR, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 21,18L 17,14L 17,17L 5,17L 5,19L 17,19L 17,22M 9,10L 9,15L 11,15L 11,4L 13,4L 13,15L 15,15L 15,4L 17,4L 17,2L 9,2C 6.79,2 5,3.79 5,6C 5,8.21 6.79,10 9,10 Z ' })
                )
            );
        }
    }]);

    return MdiFormatTextdirectionLToR;
}(React.Component);

exports.default = MdiFormatTextdirectionLToR;
module.exports = exports['default'];