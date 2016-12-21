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

var MdiAllInclusive = function (_React$Component) {
    _inherits(MdiAllInclusive, _React$Component);

    function MdiAllInclusive() {
        _classCallCheck(this, MdiAllInclusive);

        return _possibleConstructorReturn(this, (MdiAllInclusive.__proto__ || Object.getPrototypeOf(MdiAllInclusive)).apply(this, arguments));
    }

    _createClass(MdiAllInclusive, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'miter', d: 'M 18.6,6.62C 17.1602,6.62 15.8,7.18 14.83,8.15L 7.8,14.39C 7.16001,15.03 6.31,15.38 5.4,15.38C 3.53,15.38 2.01,13.87 2.01,12C 2.01,10.13 3.53,8.62 5.4,8.62C 6.31,8.62 7.16001,8.97 7.84001,9.65L 8.97,10.65L 10.48,9.31L 9.22,8.2C 8.2,7.18 6.84001,6.62 5.4,6.62C 2.42,6.62 1.27157e-006,9.04 1.27157e-006,12C 1.27157e-006,14.96 2.42,17.38 5.4,17.38C 6.84001,17.38 8.2,16.82 9.17,15.85L 16.2,9.61C 16.8398,8.97 17.69,8.62 18.6,8.62C 20.47,8.62 21.9902,10.13 21.9902,12C 21.9902,13.87 20.47,15.38 18.6,15.38C 17.7,15.38 16.8398,15.03 16.1602,14.35L 15.02,13.34L 13.51,14.68L 14.78,15.8C 15.8,16.81 17.15,17.37 18.6,17.37C 21.5801,17.37 24,14.96 24,11.99C 24,9.02 21.5801,6.62 18.6,6.62 Z ' })
                )
            );
        }
    }]);

    return MdiAllInclusive;
}(React.Component);

exports.default = MdiAllInclusive;
module.exports = exports['default'];