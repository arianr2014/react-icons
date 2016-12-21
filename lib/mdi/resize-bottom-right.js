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

var MdiResizeBottomRight = function (_React$Component) {
    _inherits(MdiResizeBottomRight, _React$Component);

    function MdiResizeBottomRight() {
        _classCallCheck(this, MdiResizeBottomRight);

        return _possibleConstructorReturn(this, (MdiResizeBottomRight.__proto__ || Object.getPrototypeOf(MdiResizeBottomRight)).apply(this, arguments));
    }

    _createClass(MdiResizeBottomRight, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 22,22L 20,22L 20,20L 22,20L 22,22 Z M 22,18L 20,18L 20,16L 22,16L 22,18 Z M 18,22L 16,22L 16,20L 18,20L 18,22 Z M 18,18L 16,18L 16,16L 18,16L 18,18 Z M 14,22L 12,22L 12,20L 14,20L 14,22 Z M 22,14L 20,14L 20,12L 22,12L 22,14 Z ' })
                )
            );
        }
    }]);

    return MdiResizeBottomRight;
}(React.Component);

exports.default = MdiResizeBottomRight;
module.exports = exports['default'];