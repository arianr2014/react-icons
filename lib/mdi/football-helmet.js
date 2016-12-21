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

var MdiFootballHelmet = function (_React$Component) {
    _inherits(MdiFootballHelmet, _React$Component);

    function MdiFootballHelmet() {
        _classCallCheck(this, MdiFootballHelmet);

        return _possibleConstructorReturn(this, (MdiFootballHelmet.__proto__ || Object.getPrototypeOf(MdiFootballHelmet)).apply(this, arguments));
    }

    _createClass(MdiFootballHelmet, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 13.5,12C 12.6716,12 12,12.6716 12,13.5C 12,14.3284 12.6716,15 13.5,15C 14.3284,15 15,14.3284 15,13.5C 15,12.6716 14.3284,12 13.5,12 Z M 13.5,3.00001C 18.1944,3.00001 22,6.58173 22,11C 22,12.6211 22,14 21.0935,16C 17,16 16,20 12.5,20C 10.3226,20 9.27396,18.2817 9.04757,15.9989L 8.99999,16L 8.24049,16L 6.95625,20.2994C 6.81046,20.7875 6.32521,21.0813 5.83551,21L 3,21C 2.44771,21 2,20.5523 2,20C 2,19.4477 2.44771,19 3,19L 3,16C 2.44771,16 2,15.5523 2,15C 2,14.4477 2.44771,14 3,14L 6.75059,14L 7.23091,12.392C 6.72044,12.1425 6.12964,12 5.49999,12L 5.07255,12.0222L 5,11C 5,6.58173 8.80557,3.00001 13.5,3.00001 Z M 5,16L 5,19L 5.25707,19L 6.15318,16L 5,16 Z ' })
                )
            );
        }
    }]);

    return MdiFootballHelmet;
}(React.Component);

exports.default = MdiFootballHelmet;
module.exports = exports['default'];