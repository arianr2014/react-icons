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

var MdiGoogleTranslate = function (_React$Component) {
    _inherits(MdiGoogleTranslate, _React$Component);

    function MdiGoogleTranslate() {
        _classCallCheck(this, MdiGoogleTranslate);

        return _possibleConstructorReturn(this, (MdiGoogleTranslate.__proto__ || Object.getPrototypeOf(MdiGoogleTranslate)).apply(this, arguments));
    }

    _createClass(MdiGoogleTranslate, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 3,1C 1.892,1 1,1.892 1,3L 1,17C 1,18.108 1.892,19 3,19L 15,19L 9,1L 3,1 Z M 12.3438,5L 13,7L 21,7L 21,21L 12.375,21L 13.0313,23L 21,23C 22.108,23 23,22.108 23,21L 23,7C 23,5.892 22.108,5 21,5L 12.3438,5 Z M 7.0625,5.9062C 8.16167,5.9062 9.08704,6.3058 9.78125,7L 8.65625,8.0312C 8.36699,7.7421 7.87242,7.4062 7.0625,7.4062C 5.67407,7.4062 4.5625,8.5491 4.5625,9.9375C 4.5625,11.3259 5.67407,12.5 7.0625,12.5C 8.68233,12.5 9.2593,11.3285 9.375,10.75L 7.0625,10.75L 7.0625,9.375L 10.875,9.375C 10.9328,9.6064 10.9375,9.7733 10.9375,10.0625C 10.9375,12.3766 9.37655,14 7.0625,14C 4.8063,14 3,12.1937 3,9.9375C 3,7.6813 4.8063,5.9062 7.0625,5.9062 Z M 16,10L 16,11L 14.3438,11L 14.6563,12L 18,12C 17.7335,12.6121 17.6276,13.1731 16.8125,14.125C 16.4101,13.6594 16.0883,13.2485 16,13L 15,13C 15.1185,13.4277 15.6166,14.0987 16.2188,14.7812C 16.0853,14.9124 15.9114,15.0762 15.75,15.2187L 16.0313,16.0625C 16.2839,15.8376 16.5342,15.6091 16.7813,15.375C 17.7995,16.4529 18.875,17.4375 18.875,17.4375L 19.4375,16.8437C 19.4375,16.8437 18.3704,15.7851 17.4063,14.75C 18.0353,14.0476 18.597,13.2014 19,12L 20,12L 20,11L 17,11L 17,10L 16,10 Z ' })
                )
            );
        }
    }]);

    return MdiGoogleTranslate;
}(React.Component);

exports.default = MdiGoogleTranslate;
module.exports = exports['default'];