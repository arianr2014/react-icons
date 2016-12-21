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

var MdiOmega = function (_React$Component) {
    _inherits(MdiOmega, _React$Component);

    function MdiOmega() {
        _classCallCheck(this, MdiOmega);

        return _possibleConstructorReturn(this, (MdiOmega.__proto__ || Object.getPrototypeOf(MdiOmega)).apply(this, arguments));
    }

    _createClass(MdiOmega, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 19.1467,19L 13.3867,19L 13.3867,16.8667C 15.52,15.2489 16.5867,13.2389 16.5867,10.8367C 16.5867,9.34334 16.1628,8.16167 15.315,7.29167C 14.4672,6.42167 13.3722,5.98667 12.03,5.98667C 10.6767,5.98667 9.56889,6.42389 8.70666,7.29834C 7.84444,8.17278 7.41333,9.36667 7.41333,10.88C 7.41333,13.26 8.48,15.2556 10.6133,16.8667L 10.6133,19L 4.85333,19L 4.85333,16.8667L 8.41333,16.8667C 6.04,15.3244 4.85333,13.2344 4.85333,10.5967C 4.85333,8.50334 5.50611,6.85612 6.81166,5.655C 8.11722,4.45389 9.83666,3.85334 11.97,3.85334C 14.15,3.85334 15.8911,4.44889 17.1933,5.64C 18.4956,6.83111 19.1467,8.47667 19.1467,10.5767C 19.1467,13.2144 17.9489,15.3111 15.5533,16.8667L 19.1467,16.8667L 19.1467,19 Z ' })
                )
            );
        }
    }]);

    return MdiOmega;
}(React.Component);

exports.default = MdiOmega;
module.exports = exports['default'];