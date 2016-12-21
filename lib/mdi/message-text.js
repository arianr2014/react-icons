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

var MdiMessageText = function (_React$Component) {
    _inherits(MdiMessageText, _React$Component);

    function MdiMessageText() {
        _classCallCheck(this, MdiMessageText);

        return _possibleConstructorReturn(this, (MdiMessageText.__proto__ || Object.getPrototypeOf(MdiMessageText)).apply(this, arguments));
    }

    _createClass(MdiMessageText, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 20,2.0025L 3.99875,2.0025C 2.9,2.0025 2.01125,2.9 2.01125,3.99875L 2.0025,22.0025L 6.00125,17.9975L 20,17.9975C 21.0987,17.9975 22.0025,17.1 22.0025,16.0012L 22.0025,3.99875C 22.0025,2.9 21.0987,2.0025 20,2.0025 Z M 6.00125,8.99875L 17.9975,8.99875L 17.9975,11.0012L 6.00125,11.0012M 13.9987,13.9987L 6.00125,13.9987L 6.00125,12.0025L 13.9987,12.0025M 17.9975,7.9975L 6.00125,7.9975L 6.00125,6.00125L 17.9975,6.00125' })
                )
            );
        }
    }]);

    return MdiMessageText;
}(React.Component);

exports.default = MdiMessageText;
module.exports = exports['default'];