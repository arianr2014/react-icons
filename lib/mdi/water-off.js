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

var MdiWaterOff = function (_React$Component) {
    _inherits(MdiWaterOff, _React$Component);

    function MdiWaterOff() {
        _classCallCheck(this, MdiWaterOff);

        return _possibleConstructorReturn(this, (MdiWaterOff.__proto__ || Object.getPrototypeOf(MdiWaterOff)).apply(this, arguments));
    }

    _createClass(MdiWaterOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 17.12,17.12L 12.5,12.5L 5.27,5.27L 4,6.55L 7.32,9.87001C 6.55,11.32 6,12.79 6,14C 6,17.31 8.69,20 12,20C 13.52,20 14.9,19.43 15.96,18.5L 18.5898,21.13L 19.86,19.86L 17.12,17.12 Z M 18,14C 18,10 12,3.2 12,3.2C 12,3.2 10.67,4.71 9.27,6.72L 17.86,15.31C 17.95,14.89 18,14.45 18,14 Z ' })
                )
            );
        }
    }]);

    return MdiWaterOff;
}(React.Component);

exports.default = MdiWaterOff;
module.exports = exports['default'];