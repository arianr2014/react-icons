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

var MdiPauseOctagonOutline = function (_React$Component) {
    _inherits(MdiPauseOctagonOutline, _React$Component);

    function MdiPauseOctagonOutline() {
        _classCallCheck(this, MdiPauseOctagonOutline);

        return _possibleConstructorReturn(this, (MdiPauseOctagonOutline.__proto__ || Object.getPrototypeOf(MdiPauseOctagonOutline)).apply(this, arguments));
    }

    _createClass(MdiPauseOctagonOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 15,16L 13,16L 13,8L 15,8L 15,16 Z M 11,16L 9,16L 9,8L 11,8L 11,16 Z M 15.728,3L 21,8.27197L 21,15.728L 15.728,21L 8.27148,21L 3,15.728L 3,8.27197L 8.27148,3L 15.728,3 Z M 14.8996,5L 9.10004,5L 5,9.10043L 5,14.8996L 9.10004,19L 14.8996,19L 19,14.8996L 19,9.10043L 14.8996,5 Z ' })
                )
            );
        }
    }]);

    return MdiPauseOctagonOutline;
}(React.Component);

exports.default = MdiPauseOctagonOutline;
module.exports = exports['default'];