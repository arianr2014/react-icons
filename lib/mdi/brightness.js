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

var MdiBrightness = function (_React$Component) {
    _inherits(MdiBrightness, _React$Component);

    function MdiBrightness() {
        _classCallCheck(this, MdiBrightness);

        return _possibleConstructorReturn(this, (MdiBrightness.__proto__ || Object.getPrototypeOf(MdiBrightness)).apply(this, arguments));
    }

    _createClass(MdiBrightness, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 3.99999,4.00001L 8.68633,4.00001L 12.0001,0.686277L 15.3138,4.00001L 20,4.00001L 20,8.68623L 23.3138,12L 20,15.3137L 20,20L 15.3137,20L 12,23.3137L 8.68633,20L 3.99999,20L 3.99999,15.3137L 0.686322,12L 3.99999,8.68634L 3.99999,4.00001 Z M 12,6L 12,18C 15.3137,18 18,15.3137 18,12C 18,8.6863 15.3137,6 12,6 Z ' })
                )
            );
        }
    }]);

    return MdiBrightness;
}(React.Component);

exports.default = MdiBrightness;
module.exports = exports['default'];