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

var MdiFormatHeaderPound = function (_React$Component) {
    _inherits(MdiFormatHeaderPound, _React$Component);

    function MdiFormatHeaderPound() {
        _classCallCheck(this, MdiFormatHeaderPound);

        return _possibleConstructorReturn(this, (MdiFormatHeaderPound.__proto__ || Object.getPrototypeOf(MdiFormatHeaderPound)).apply(this, arguments));
    }

    _createClass(MdiFormatHeaderPound, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 3,4L 5,4L 5,10L 9,10L 9,4L 11,4L 11,18L 9,18L 9,12L 5,12L 5,18L 3,18L 3,4 Z M 13,8L 15.3142,8L 15.6284,4.99999L 17.6284,4.99999L 17.3142,8L 19.3142,8L 19.6284,4.99999L 21.6284,4.99999L 21.3142,8L 23,8L 23,10L 21.1047,10L 20.8953,12L 23,12L 23,14L 20.6858,14L 20.3716,17L 18.3716,17L 18.6858,14L 16.6858,14L 16.3716,17L 14.3716,17L 14.6858,14L 13,14L 13,12L 14.8953,12L 15.1047,10L 13,10L 13,8 Z M 17.1047,10L 16.8953,12L 18.8953,12L 19.1047,10L 17.1047,10 Z ' })
                )
            );
        }
    }]);

    return MdiFormatHeaderPound;
}(React.Component);

exports.default = MdiFormatHeaderPound;
module.exports = exports['default'];