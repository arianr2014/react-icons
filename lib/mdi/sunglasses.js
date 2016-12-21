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

var MdiSunglasses = function (_React$Component) {
    _inherits(MdiSunglasses, _React$Component);

    function MdiSunglasses() {
        _classCallCheck(this, MdiSunglasses);

        return _possibleConstructorReturn(this, (MdiSunglasses.__proto__ || Object.getPrototypeOf(MdiSunglasses)).apply(this, arguments));
    }

    _createClass(MdiSunglasses, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 6.997,17L 3.997,17C 2.38,17 0.957005,15.743 0.757005,14.14L 0.259005,11.148C 0.152005,10.303 0.391005,9.506 0.908005,8.92101C 1.425,8.33601 2.186,8 2.997,8L 8.997,8C 9.832,8 10.582,8.348 11.056,8.95501C 11.1747,9.10732 11.2734,9.27254 11.3515,9.44739C 11.7772,9.3576 12.2183,9.35767 12.6439,9.44761C 12.7217,9.2719 12.8204,9.10698 12.939,8.95501C 13.413,8.348 14.163,8 14.997,8L 20.997,8C 21.809,8 22.569,8.33601 23.087,8.92101C 23.603,9.507 23.842,10.304 23.741,11.109L 23.231,14.18C 23.036,15.744 21.613,17 19.998,17L 16.998,17C 15.436,17 13.919,15.814 13.542,14.301L 12.6435,11.5868C 12.258,11.3094 11.733,11.3099 11.3486,11.5883L 10.432,14.373C 10.074,15.815 8.556,17 6.997,17 Z ' })
                )
            );
        }
    }]);

    return MdiSunglasses;
}(React.Component);

exports.default = MdiSunglasses;
module.exports = exports['default'];