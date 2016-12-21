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

var MdiThumbsUpDown = function (_React$Component) {
    _inherits(MdiThumbsUpDown, _React$Component);

    function MdiThumbsUpDown() {
        _classCallCheck(this, MdiThumbsUpDown);

        return _possibleConstructorReturn(this, (MdiThumbsUpDown.__proto__ || Object.getPrototypeOf(MdiThumbsUpDown)).apply(this, arguments));
    }

    _createClass(MdiThumbsUpDown, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 22.5,10.5L 15.75,10.5C 15.13,10.5 14.6,10.88 14.37,11.41L 12.11,16.7C 12.04,16.87 12,17.06 12,17.25L 12,18.5C 12,19.05 12.45,19.5 13,19.5L 18.18,19.5L 17.52,22.68L 17.5,22.92C 17.5,23.23 17.63,23.51 17.83,23.72L 18.62,24.5L 23.56,19.56C 23.83,19.29 24,18.91 24,18.5L 24,12C 24,11.17 23.33,10.5 22.5,10.5 Z M 12,6.5C 12,5.95 11.55,5.5 11,5.5L 5.82,5.5L 6.48,2.32L 6.5,2.09C 6.5,1.78 6.37,1.5 6.17,1.29L 5.38,0.500002L 0.44,5.44C 0.17,5.71 0,6.09 0,6.5L 0,13C 0,13.83 0.67,14.5 1.5,14.5L 8.25,14.5C 8.87,14.5 9.4,14.12 9.63,13.59L 11.89,8.3C 11.96,8.13 12,7.94 12,7.75L 12,6.5 Z ' })
                )
            );
        }
    }]);

    return MdiThumbsUpDown;
}(React.Component);

exports.default = MdiThumbsUpDown;
module.exports = exports['default'];