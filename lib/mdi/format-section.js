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

var MdiFormatSection = function (_React$Component) {
    _inherits(MdiFormatSection, _React$Component);

    function MdiFormatSection() {
        _classCallCheck(this, MdiFormatSection);

        return _possibleConstructorReturn(this, (MdiFormatSection.__proto__ || Object.getPrototypeOf(MdiFormatSection)).apply(this, arguments));
    }

    _createClass(MdiFormatSection, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 15.67,4.42C 14.6971,3.8405 13.5823,3.5427 12.45,3.56C 10.87,3.56 9.66,4.34 9.66,5.56C 9.66,6.96 11,7.47 13.02,8.14C 15.49,8.95 17.4,9.97 17.4,12.38C 17.3635,13.686 16.6915,14.8919 15.6,15.61C 16.2476,16.223 16.61,17.0784 16.6,17.97C 16.6,20.79 14,21.97 11.5,21.97C 10.0376,22.0282 8.59155,21.6449 7.35,20.87L 7.99,19.34C 9.03591,20.0473 10.2674,20.43 11.53,20.44C 13.25,20.44 14.53,19.66 14.53,18.24C 14.53,16.98 13.75,16.31 11.25,15.45C 8.51,14.51 6.6,13.52 6.6,11.21C 6.67125,9.8855 7.42979,8.6946 8.6,8.07C 7.97465,7.483 7.61386,6.6676 7.6,5.81C 7.6,3.45 9.77,2 12.53,2C 13.8185,1.9816 15.0909,2.2876 16.23,2.89L 15.67,4.42 Z M 11.35,13.42C 12.4111,13.7451 13.4364,14.1773 14.41,14.71C 15.061,14.2244 15.4342,13.4518 15.41,12.64C 15.41,11.64 14.77,10.76 13.02,10.14C 11.8866,9.7682 10.7834,9.3102 9.72,8.77C 8.96957,9.2221 8.51052,10.0339 8.51,10.91C 8.51,11.88 9.23,12.68 11.35,13.42 Z ' })
                )
            );
        }
    }]);

    return MdiFormatSection;
}(React.Component);

exports.default = MdiFormatSection;
module.exports = exports['default'];