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

var MdiHeartPulse = function (_React$Component) {
    _inherits(MdiHeartPulse, _React$Component);

    function MdiHeartPulse() {
        _classCallCheck(this, MdiHeartPulse);

        return _possibleConstructorReturn(this, (MdiHeartPulse.__proto__ || Object.getPrototypeOf(MdiHeartPulse)).apply(this, arguments));
    }

    _createClass(MdiHeartPulse, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 7.5,4C 4.46243,4 2,6.4624 2,9.5C 2,10.0206 2.08819,10.5188 2.21875,11L 6.3,11L 7.57031,7.6328C 7.8748,6.8257 9.05446,6.7505 9.43359,7.6328L 11.5,13L 12.0884,11.5763C 12.2214,11.2545 12.5727,10.9961 13,10.9961L 21.7813,10.9961C 21.9118,10.5149 22,10.0167 22,9.4961C 22,6.4585 19.5376,3.9961 16.5,3.9961C 14.6413,3.9961 12.9956,4.9282 12,6.3398C 11.0044,4.9281 9.35871,3.9961 7.5,3.9961L 7.5,4 Z M 3,12.5C 2.446,12.5 2,12.946 2,13.5C 2,14.054 2.446,14.5 3,14.5L 5.4375,14.5L 11,20C 12,20.8983 12,20.8983 13,20L 18.5625,14.5L 21,14.5C 21.554,14.5 22,14.054 22,13.5C 22,12.946 21.554,12.5 21,12.5L 13.4,12.5L 12.4744,14.7992C 12.0675,15.8101 10.9219,15.6689 10.5536,14.8262L 8.5,9.5L 7.5417,11.8279C 7.38634,12.2053 7.0503,12.4998 6.6003,12.4998L 3,12.5 Z ' })
                )
            );
        }
    }]);

    return MdiHeartPulse;
}(React.Component);

exports.default = MdiHeartPulse;
module.exports = exports['default'];