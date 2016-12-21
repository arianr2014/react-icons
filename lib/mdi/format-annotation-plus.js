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

var MdiFormatAnnotationPlus = function (_React$Component) {
    _inherits(MdiFormatAnnotationPlus, _React$Component);

    function MdiFormatAnnotationPlus() {
        _classCallCheck(this, MdiFormatAnnotationPlus);

        return _possibleConstructorReturn(this, (MdiFormatAnnotationPlus.__proto__ || Object.getPrototypeOf(MdiFormatAnnotationPlus)).apply(this, arguments));
    }

    _createClass(MdiFormatAnnotationPlus, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 8.5,7L 10.5,7L 16,21L 13.6,21L 12.5,18L 6.3,18L 5.2,21L 3,21L 8.5,7 Z M 7.1,16L 11.9,16L 9.5,9.7L 7.1,16 Z M 22,5L 22,7L 19,7L 19,10L 17,10L 17,7L 14,7L 14,5L 17,5L 17,2L 19,2L 19,5L 22,5 Z ' })
                )
            );
        }
    }]);

    return MdiFormatAnnotationPlus;
}(React.Component);

exports.default = MdiFormatAnnotationPlus;
module.exports = exports['default'];