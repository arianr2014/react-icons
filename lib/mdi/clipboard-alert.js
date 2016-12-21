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

var MdiClipboardAlert = function (_React$Component) {
    _inherits(MdiClipboardAlert, _React$Component);

    function MdiClipboardAlert() {
        _classCallCheck(this, MdiClipboardAlert);

        return _possibleConstructorReturn(this, (MdiClipboardAlert.__proto__ || Object.getPrototypeOf(MdiClipboardAlert)).apply(this, arguments));
    }

    _createClass(MdiClipboardAlert, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 12,5C 11.45,5 11,4.55 11,4C 11,3.45 11.45,3 12,3C 12.55,3 13,3.45 13,4C 13,4.55 12.55,5 12,5 Z M 13,14L 11,14L 11,8L 13,8M 13,18L 11,18L 11,16L 13,16M 19,3L 14.82,3C 14.4,1.84 13.3,1 12,1C 10.7,1 9.6,1.84 9.18,3L 5,3C 3.9,3 3,3.9 3,5L 3,19C 3,20.1 3.9,21 5,21L 19,21C 20.1,21 21,20.1 21,19L 21,5C 21,3.9 20.1,3 19,3 Z ' })
                )
            );
        }
    }]);

    return MdiClipboardAlert;
}(React.Component);

exports.default = MdiClipboardAlert;
module.exports = exports['default'];