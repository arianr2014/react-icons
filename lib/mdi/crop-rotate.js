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

var MdiCropRotate = function (_React$Component) {
    _inherits(MdiCropRotate, _React$Component);

    function MdiCropRotate() {
        _classCallCheck(this, MdiCropRotate);

        return _possibleConstructorReturn(this, (MdiCropRotate.__proto__ || Object.getPrototypeOf(MdiCropRotate)).apply(this, arguments));
    }

    _createClass(MdiCropRotate, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 7.47,21.49C 4.2,19.93 1.86,16.76 1.5,13L 1.27157e-006,13C 0.510001,19.16 5.66,24 11.95,24C 12.18,24 12.39,23.98 12.61,23.97L 8.8,20.15L 7.47,21.49 Z M 12.05,0C 11.82,0 11.61,0.0199986 11.39,0.039999L 15.2,3.85L 16.53,2.52C 19.8,4.07 22.14,7.24 22.5,11L 24,11C 23.49,4.84 18.34,0 12.05,0 Z M 16,14L 18,14L 18,8C 18,6.89 17.1,6 16,6L 10,6L 10,8L 16,8L 16,14 Z M 8,16L 8,4L 6,4L 6,6L 4,6L 4,8L 6,8L 6,16C 6,17.1 6.89,18 8,18L 16,18L 16,20L 18,20L 18,18L 20,18L 20,16L 8,16 Z ' })
                )
            );
        }
    }]);

    return MdiCropRotate;
}(React.Component);

exports.default = MdiCropRotate;
module.exports = exports['default'];