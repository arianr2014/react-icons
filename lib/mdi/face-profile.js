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

var MdiFaceProfile = function (_React$Component) {
    _inherits(MdiFaceProfile, _React$Component);

    function MdiFaceProfile() {
        _classCallCheck(this, MdiFaceProfile);

        return _possibleConstructorReturn(this, (MdiFaceProfile.__proto__ || Object.getPrototypeOf(MdiFaceProfile)).apply(this, arguments));
    }

    _createClass(MdiFaceProfile, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 12.0025,2.0025C 6.48,2.0025 2.0025,6.48 2.0025,12.0025C 2.0025,17.52 6.48,22.0025 12.0025,22.0025C 17.52,22.0025 22.0025,17.52 22.0025,12.0025C 22.0025,6.48 17.52,2.0025 12.0025,2.0025 Z M 12.0025,8.38875C 13.565,9.4 15.42,10 17.4225,10C 18.1987,10 18.95,9.9125 19.6675,9.74125C 19.8775,10.4488 20,11.2112 20,12.0025C 20,16.4113 16.4112,20 12.0025,20C 9.00375,20 6.38625,18.34 5.015,15.8888L 6.7475,13.9987L 6.7475,12.9975C 6.7475,12.31 7.31,11.7475 7.9975,11.7475C 8.69125,11.7475 9.2475,12.31 9.2475,12.9975L 9.2475,13.9987L 12.0025,13.9987M 16.0012,11.7475C 15.3075,11.7475 14.7513,12.31 14.7513,12.9975C 14.7513,13.6913 15.3075,14.2475 16.0012,14.2475C 16.69,14.2475 17.2512,13.6913 17.2512,12.9975C 17.2512,12.31 16.69,11.7475 16.0012,11.7475 Z ' })
                )
            );
        }
    }]);

    return MdiFaceProfile;
}(React.Component);

exports.default = MdiFaceProfile;
module.exports = exports['default'];