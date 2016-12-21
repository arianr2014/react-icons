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

var MdiOctagonOutline = function (_React$Component) {
    _inherits(MdiOctagonOutline, _React$Component);

    function MdiOctagonOutline() {
        _classCallCheck(this, MdiOctagonOutline);

        return _possibleConstructorReturn(this, (MdiOctagonOutline.__proto__ || Object.getPrototypeOf(MdiOctagonOutline)).apply(this, arguments));
    }

    _createClass(MdiOctagonOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 8.27125,2.9978L 2.9975,8.27125L 2.9975,15.7275L 8.27125,21.0012L 15.7275,21.0012C 17.485,19.2437 21.0013,15.7275 21.0013,15.7275L 21.0013,8.27125L 15.7275,2.9978M 9.10125,5L 14.9025,5L 18.9988,9.10125L 18.9988,14.9025L 14.9025,18.9988L 9.10125,18.9988L 5,14.9025L 5,9.10125' })
                )
            );
        }
    }]);

    return MdiOctagonOutline;
}(React.Component);

exports.default = MdiOctagonOutline;
module.exports = exports['default'];