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

var MdiCursorText = function (_React$Component) {
    _inherits(MdiCursorText, _React$Component);

    function MdiCursorText() {
        _classCallCheck(this, MdiCursorText);

        return _possibleConstructorReturn(this, (MdiCursorText.__proto__ || Object.getPrototypeOf(MdiCursorText)).apply(this, arguments));
    }

    _createClass(MdiCursorText, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 13,19C 13,19.5523 13.4477,20 14,20L 16,20L 16,22L 13.5,22C 12.9477,22 12,21.5523 12,21C 12,21.5523 11.0523,22 10.5,22L 8,22L 8,20L 10,20C 10.5523,20 11,19.5523 11,19L 11,4.99999C 11,4.44771 10.5523,3.99999 10,3.99999L 8,4L 8,2.00001L 10.5,2.00001C 11.0523,2.00001 12,2.44772 12,3C 12,2.44772 12.9477,2.00001 13.5,2.00001L 16,2.00001L 16,4L 14,3.99999C 13.4477,3.99999 13,4.44771 13,4.99999L 13,19 Z ' })
                )
            );
        }
    }]);

    return MdiCursorText;
}(React.Component);

exports.default = MdiCursorText;
module.exports = exports['default'];