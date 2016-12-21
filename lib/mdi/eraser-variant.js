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

var MdiEraserVariant = function (_React$Component) {
    _inherits(MdiEraserVariant, _React$Component);

    function MdiEraserVariant() {
        _classCallCheck(this, MdiEraserVariant);

        return _possibleConstructorReturn(this, (MdiEraserVariant.__proto__ || Object.getPrototypeOf(MdiEraserVariant)).apply(this, arguments));
    }

    _createClass(MdiEraserVariant, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'fill-rule': 'evenodd', 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 15.1412,2.9978C 14.6288,2.9978 14.1212,3.19875 13.73,3.58875L 2.5875,14.7263C 1.80625,15.5125 1.80625,16.7725 2.5875,17.5588L 5.02875,20L 12.685,20L 21.4112,11.27C 22.1975,10.4888 22.1975,9.22875 21.4112,8.4425L 16.5575,3.58875C 16.1675,3.19875 15.6538,2.9978 15.1412,2.9978 Z M 17.0025,17.9975L 15,20L 22.0025,20L 22.0025,17.9975' })
                )
            );
        }
    }]);

    return MdiEraserVariant;
}(React.Component);

exports.default = MdiEraserVariant;
module.exports = exports['default'];