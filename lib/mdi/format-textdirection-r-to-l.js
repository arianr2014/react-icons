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

var MdiFormatTextdirectionRToL = function (_React$Component) {
    _inherits(MdiFormatTextdirectionRToL, _React$Component);

    function MdiFormatTextdirectionRToL() {
        _classCallCheck(this, MdiFormatTextdirectionRToL);

        return _possibleConstructorReturn(this, (MdiFormatTextdirectionRToL.__proto__ || Object.getPrototypeOf(MdiFormatTextdirectionRToL)).apply(this, arguments));
    }

    _createClass(MdiFormatTextdirectionRToL, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 8,17L 8,14L 4,18L 8,22L 8,19L 20,19L 20,17M 10,10L 10,15L 12,15L 12,4L 14,4L 14,15L 16,15L 16,4L 18,4L 18,2L 10,2C 7.79,2 6,3.79 6,6C 6,8.21 7.79,10 10,10 Z ' })
                )
            );
        }
    }]);

    return MdiFormatTextdirectionRToL;
}(React.Component);

exports.default = MdiFormatTextdirectionRToL;
module.exports = exports['default'];