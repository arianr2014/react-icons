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

var MdiFormatParagraph = function (_React$Component) {
    _inherits(MdiFormatParagraph, _React$Component);

    function MdiFormatParagraph() {
        _classCallCheck(this, MdiFormatParagraph);

        return _possibleConstructorReturn(this, (MdiFormatParagraph.__proto__ || Object.getPrototypeOf(MdiFormatParagraph)).apply(this, arguments));
    }

    _createClass(MdiFormatParagraph, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 13,4C 15.2091,4 17,5.79086 17,8C 17,10.2091 15.2091,12 13,12L 11,12L 11,18L 9,18L 9,4L 13,4 Z M 13,10C 14.1046,10 15,9.10458 15,8C 15,6.89544 14.1046,6.00001 13,6.00001L 11,6L 11,10L 13,10 Z ' })
                )
            );
        }
    }]);

    return MdiFormatParagraph;
}(React.Component);

exports.default = MdiFormatParagraph;
module.exports = exports['default'];