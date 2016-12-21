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

var MdiFormatFloatLeft = function (_React$Component) {
    _inherits(MdiFormatFloatLeft, _React$Component);

    function MdiFormatFloatLeft() {
        _classCallCheck(this, MdiFormatFloatLeft);

        return _possibleConstructorReturn(this, (MdiFormatFloatLeft.__proto__ || Object.getPrototypeOf(MdiFormatFloatLeft)).apply(this, arguments));
    }

    _createClass(MdiFormatFloatLeft, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 3,7L 9,7L 9,13L 3,13L 3,7 Z M 3,3L 21,3L 21,5L 3,5L 3,3 Z M 21,7.00001L 21,9.00001L 11,9.00001L 11,7.00001L 21,7.00001 Z M 21,11L 21,13L 11,13L 11,11L 21,11 Z M 3,15L 17,15L 17,17L 3,17L 3,15 Z M 3,19L 21,19L 21,21L 3,21L 3,19 Z ' })
                )
            );
        }
    }]);

    return MdiFormatFloatLeft;
}(React.Component);

exports.default = MdiFormatFloatLeft;
module.exports = exports['default'];