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

var MdiFormatHeader4 = function (_React$Component) {
    _inherits(MdiFormatHeader4, _React$Component);

    function MdiFormatHeader4() {
        _classCallCheck(this, MdiFormatHeader4);

        return _possibleConstructorReturn(this, (MdiFormatHeader4.__proto__ || Object.getPrototypeOf(MdiFormatHeader4)).apply(this, arguments));
    }

    _createClass(MdiFormatHeader4, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 3,4L 5,4L 5,10L 9,10L 9,4L 11,4L 11,18L 9,18L 9,12L 5,12L 5,18L 3,18L 3,4 Z M 18,18L 18,13L 13,13L 13,11L 18,4L 20,4L 20,11L 21,11L 21,13L 20,13L 20,18L 18,18 Z M 18,11L 18,7.41688L 15.4536,11L 18,11 Z ' })
                )
            );
        }
    }]);

    return MdiFormatHeader4;
}(React.Component);

exports.default = MdiFormatHeader4;
module.exports = exports['default'];