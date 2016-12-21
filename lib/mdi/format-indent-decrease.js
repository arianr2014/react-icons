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

var MdiFormatIndentDecrease = function (_React$Component) {
    _inherits(MdiFormatIndentDecrease, _React$Component);

    function MdiFormatIndentDecrease() {
        _classCallCheck(this, MdiFormatIndentDecrease);

        return _possibleConstructorReturn(this, (MdiFormatIndentDecrease.__proto__ || Object.getPrototypeOf(MdiFormatIndentDecrease)).apply(this, arguments));
    }

    _createClass(MdiFormatIndentDecrease, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 11,13L 21,13L 21,11L 11,11M 11,9L 21,9L 21,7L 11,7M 3,3L 3,5L 21,5L 21,3M 3,21L 21,21L 21,19L 3,19M 3,12L 7,16L 7,8M 11,17L 21,17L 21,15L 11,15L 11,17 Z ' })
                )
            );
        }
    }]);

    return MdiFormatIndentDecrease;
}(React.Component);

exports.default = MdiFormatIndentDecrease;
module.exports = exports['default'];