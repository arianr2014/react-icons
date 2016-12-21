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

var MdiBarcodeScan = function (_React$Component) {
    _inherits(MdiBarcodeScan, _React$Component);

    function MdiBarcodeScan() {
        _classCallCheck(this, MdiBarcodeScan);

        return _possibleConstructorReturn(this, (MdiBarcodeScan.__proto__ || Object.getPrototypeOf(MdiBarcodeScan)).apply(this, arguments));
    }

    _createClass(MdiBarcodeScan, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'miter', d: 'M 4,6L 6,6L 6,18L 4,18L 4,6 Z M 7,6.00001L 7.99999,6.00001L 7.99999,18L 7,18L 7,6.00001 Z M 9,6.00001L 12,6.00001L 12,18L 9,18L 9,6.00001 Z M 13,6.00001L 14,6.00001L 14,18L 13,18L 13,6.00001 Z M 16,6.00001L 18,6.00001L 18,18L 16,18L 16,6.00001 Z M 19,6L 20,6.00001L 20,18L 19,18L 19,6 Z M 2.00001,4L 2.00001,8L 5.72205e-006,8L 5.72205e-006,4C 5.72205e-006,2.9 0.900007,2 2.00001,2L 6.00001,2L 6.00001,4L 2.00001,4 Z M 22,2C 23.1,2 24,2.9 24,4L 24,8L 22,8L 22,4L 18,4L 18,2L 22,2 Z M 2.00001,16L 2.00001,20L 6,20L 6,22L 2.00001,22C 0.900007,22 5.72205e-006,21.1 5.72205e-006,20L 5.72205e-006,16L 2.00001,16 Z M 22,20L 22,16L 24,16L 24,20C 24,21.1 23.1,22 22,22L 18,22L 18,20L 22,20 Z ' })
                )
            );
        }
    }]);

    return MdiBarcodeScan;
}(React.Component);

exports.default = MdiBarcodeScan;
module.exports = exports['default'];