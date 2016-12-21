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

var MdiImageFilterDrama = function (_React$Component) {
    _inherits(MdiImageFilterDrama, _React$Component);

    function MdiImageFilterDrama() {
        _classCallCheck(this, MdiImageFilterDrama);

        return _possibleConstructorReturn(this, (MdiImageFilterDrama.__proto__ || Object.getPrototypeOf(MdiImageFilterDrama)).apply(this, arguments));
    }

    _createClass(MdiImageFilterDrama, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 19,18L 6,18C 3.79,18 2,16.21 2,14C 2,11.79 3.79,10 6,10C 8.21,10 10,11.79 10,14L 12,14C 12,11.24 10.14,8.92 7.6,8.22C 8.61,6.88 10.2,6 12,6C 15.03,6 17.5,8.47 17.5,11.5L 17.5,12L 19,12C 20.65,12 22,13.35 22,15C 22,16.65 20.65,18 19,18 Z M 19.35,10.04C 18.67,6.59 15.64,4 12,4C 9.11,4 6.61,5.64 5.36,8.04C 2.35,8.36 0,10.9 0,14C 0,17.31 2.69,20 6,20L 19,20C 21.76,20 24,17.76 24,15C 24,12.36 21.95,10.22 19.35,10.04 Z ' })
                )
            );
        }
    }]);

    return MdiImageFilterDrama;
}(React.Component);

exports.default = MdiImageFilterDrama;
module.exports = exports['default'];