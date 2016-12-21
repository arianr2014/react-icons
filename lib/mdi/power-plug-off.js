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

var MdiPowerPlugOff = function (_React$Component) {
    _inherits(MdiPowerPlugOff, _React$Component);

    function MdiPowerPlugOff() {
        _classCallCheck(this, MdiPowerPlugOff);

        return _possibleConstructorReturn(this, (MdiPowerPlugOff.__proto__ || Object.getPrototypeOf(MdiPowerPlugOff)).apply(this, arguments));
    }

    _createClass(MdiPowerPlugOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 8,3L 8,6.18C 11.1,9.23 14.1,12.3 17.2,15.3C 17.4,15 17.8,14.8 18,14.4L 18,8.8C 18,7.68 16.7,7.16 16,6.84L 16,3L 14,3L 14,7L 10,7L 10,3L 8,3 Z M 3.28,4C 2.85,4.42 2.43,4.85 2,5.27L 6,9.27L 6,14.48C 7.17,15.65 8.33,16.83 9.5,18L 9.5,21L 14.5,21L 14.5,18C 14.722,17.732 14.947,18.332 15.17,18.438C 16.37,19.638 17.47,20.838 18.67,22.038C 19.17,21.638 19.57,21.138 19.97,20.738C 14.37,15.138 8.77,9.638 3.27,4.038L 3.28,4 Z ' })
                )
            );
        }
    }]);

    return MdiPowerPlugOff;
}(React.Component);

exports.default = MdiPowerPlugOff;
module.exports = exports['default'];