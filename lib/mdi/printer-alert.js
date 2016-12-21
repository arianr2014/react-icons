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

var MdiPrinterAlert = function (_React$Component) {
    _inherits(MdiPrinterAlert, _React$Component);

    function MdiPrinterAlert() {
        _classCallCheck(this, MdiPrinterAlert);

        return _possibleConstructorReturn(this, (MdiPrinterAlert.__proto__ || Object.getPrototypeOf(MdiPrinterAlert)).apply(this, arguments));
    }

    _createClass(MdiPrinterAlert, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 14,4.00001L 14,7.99989L 5.99999,8.00013L 5.99998,4.00025L 14,4.00001 Z M 15,12.9999C 15.553,12.9999 16,12.5529 16,11.9999C 16,11.4469 15.553,10.9999 15,10.9999C 14.447,10.9999 14,11.4469 14,11.9999C 14,12.5529 14.447,12.9999 15,12.9999 Z M 13,19.0001L 13,14.9999L 6.99998,15.0002L 6.99997,19.0004L 13,19.0001 Z M 15,8.99988C 16.657,8.99988 18,10.3429 18,11.9999L 18,16.9999L 15,17L 15,21.0001L 4.99998,21.0004L 4.99998,17.0002L 2,17.0002L 2,12.0001C 2,10.3441 3.344,9.00012 4.99999,9.00012L 15,8.99988 Z M 22,7L 22,12L 20,12L 20,7L 22,7 Z M 22,14L 22,16L 20,16L 20,14L 22,14 Z ' })
                )
            );
        }
    }]);

    return MdiPrinterAlert;
}(React.Component);

exports.default = MdiPrinterAlert;
module.exports = exports['default'];