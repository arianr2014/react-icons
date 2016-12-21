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

var MdiQrcodeScan = function (_React$Component) {
    _inherits(MdiQrcodeScan, _React$Component);

    function MdiQrcodeScan() {
        _classCallCheck(this, MdiQrcodeScan);

        return _possibleConstructorReturn(this, (MdiQrcodeScan.__proto__ || Object.getPrototypeOf(MdiQrcodeScan)).apply(this, arguments));
    }

    _createClass(MdiQrcodeScan, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'miter', d: 'M 4,4L 10,4L 10,10L 4,10L 4,4 Z M 20,4.00003L 20,10L 14,10L 14,4.00003L 20,4.00003 Z M 14,15L 16,15L 16,13L 14,13L 14,11L 16,11L 16,13L 18,13L 18,11L 20,11L 20,13L 18,13L 18,15L 20,15L 20,18L 18,18L 18,20L 16,20L 16,18L 13,18L 13,20L 11,20L 11,16L 14,16L 14,15 Z M 16,15L 16,18L 18,18L 18,15L 16,15 Z M 3.99999,20L 3.99999,14L 9.99999,14L 9.99999,20L 3.99999,20 Z M 5.99999,6.00003L 5.99999,8.00003L 7.99999,8.00003L 7.99999,6.00003L 5.99999,6.00003 Z M 16,6.00002L 16,8.00003L 18,8.00003L 18,6.00002L 16,6.00002 Z M 5.99999,16L 5.99999,18L 7.99999,18L 7.99999,16L 5.99999,16 Z M 4,11L 6,11L 6,13L 4,13L 4,11 Z M 8.99999,11L 13,11L 13,15L 11,15L 11,13L 8.99999,13L 8.99999,11 Z M 11,6.00002L 13,6.00002L 13,10L 11,10L 11,6.00002 Z M 2,2L 2,6L 0,6L 0,2C 0,0.9 0.900001,0 2,0L 6,0L 6,2L 2,2 Z M 22,1.90735e-006C 23.1,1.90735e-006 24,0.900002 24,2L 24,6L 22,6L 22,2L 18,2L 18,1.90735e-006L 22,1.90735e-006 Z M 2,18L 2,22L 6,22L 6,24L 2,24C 0.900001,24 0,23.1 0,22L 0,18L 2,18 Z M 22,22L 22,18L 24,18L 24,22C 24,23.1 23.1,24 22,24L 18,24L 18,22L 22,22 Z ' })
                )
            );
        }
    }]);

    return MdiQrcodeScan;
}(React.Component);

exports.default = MdiQrcodeScan;
module.exports = exports['default'];