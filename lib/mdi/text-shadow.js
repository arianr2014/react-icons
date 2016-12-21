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

var MdiTextShadow = function (_React$Component) {
    _inherits(MdiTextShadow, _React$Component);

    function MdiTextShadow() {
        _classCallCheck(this, MdiTextShadow);

        return _possibleConstructorReturn(this, (MdiTextShadow.__proto__ || Object.getPrototypeOf(MdiTextShadow)).apply(this, arguments));
    }

    _createClass(MdiTextShadow, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 3,3L 16,3L 16,6L 11,6L 11,18L 8,18L 8,6L 3,6L 3,3 Z M 12,7.00001L 14,7.00001L 14,9.00001L 12,9.00001L 12,7.00001 Z M 15,7.00001L 17,7.00001L 17,9.00001L 15,9.00001L 15,7.00001 Z M 18,7.00001L 20,7.00001L 20,9.00001L 18,9.00001L 18,7.00001 Z M 12,10L 14,10L 14,12L 12,12L 12,10 Z M 12,13L 14,13L 14,15L 12,15L 12,13 Z M 12,16L 14,16L 14,18L 12,18L 12,16 Z M 12,19L 14,19L 14,21L 12,21L 12,19 Z ' })
                )
            );
        }
    }]);

    return MdiTextShadow;
}(React.Component);

exports.default = MdiTextShadow;
module.exports = exports['default'];