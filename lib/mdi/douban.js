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

var MdiDouban = function (_React$Component) {
    _inherits(MdiDouban, _React$Component);

    function MdiDouban() {
        _classCallCheck(this, MdiDouban);

        return _possibleConstructorReturn(this, (MdiDouban.__proto__ || Object.getPrototypeOf(MdiDouban)).apply(this, arguments));
    }

    _createClass(MdiDouban, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement(
                        'g',
                        null,
                        React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 20,6L 4,6L 4,4L 20,4L 20,6 Z M 20,18L 20,20L 4,20L 4,18L 7.33,18L 6.26,14L 5,14L 5,8L 19,8L 19,14L 17.74,14L 16.67,18L 20,18 Z M 7,12L 17,12L 17,10L 7,10L 7,12 Z M 9.4,18L 14.6,18L 15.67,14L 8.33,14L 9.4,18 Z ' })
                    )
                )
            );
        }
    }]);

    return MdiDouban;
}(React.Component);

exports.default = MdiDouban;
module.exports = exports['default'];