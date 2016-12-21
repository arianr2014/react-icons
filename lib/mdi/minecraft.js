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

var MdiMinecraft = function (_React$Component) {
    _inherits(MdiMinecraft, _React$Component);

    function MdiMinecraft() {
        _classCallCheck(this, MdiMinecraft);

        return _possibleConstructorReturn(this, (MdiMinecraft.__proto__ || Object.getPrototypeOf(MdiMinecraft)).apply(this, arguments));
    }

    _createClass(MdiMinecraft, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 4,2L 20,2C 21.1046,2 22,2.89543 22,4L 22,20C 22,21.1046 21.1046,22 20,22L 4,22C 2.89543,22 2,21.1046 2,20L 2,4C 2,2.89543 2.89543,2 4,2 Z M 6,6.00001L 6,10L 10,10L 10,12L 8,12L 8,18L 10,18L 10,16L 14,16L 14,18L 16,18L 16,12L 14,12L 14,10L 18,10L 18,6.00001L 14,6.00001L 14,10L 10,10L 10,6.00001L 6,6.00001 Z ' })
                )
            );
        }
    }]);

    return MdiMinecraft;
}(React.Component);

exports.default = MdiMinecraft;
module.exports = exports['default'];