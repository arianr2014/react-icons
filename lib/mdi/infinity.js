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

var MdiInfinity = function (_React$Component) {
    _inherits(MdiInfinity, _React$Component);

    function MdiInfinity() {
        _classCallCheck(this, MdiInfinity);

        return _possibleConstructorReturn(this, (MdiInfinity.__proto__ || Object.getPrototypeOf(MdiInfinity)).apply(this, arguments));
    }

    _createClass(MdiInfinity, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'miter', d: 'M 18.6,6.62C 21.5801,6.62 24,9.02 24,11.99C 24,14.96 21.5801,17.37 18.6,17.37C 17.15,17.37 15.8,16.81 14.78,15.8L 12,13.338L 9.17,15.85C 8.2,16.82 6.84001,17.38 5.4,17.38C 2.42,17.38 1.27157e-006,14.96 1.27157e-006,12C 1.27157e-006,9.04 2.42,6.62 5.4,6.62C 6.84001,6.62 8.2,7.18 9.22,8.2L 12,10.662L 14.83,8.15C 15.8,7.18 17.1602,6.62 18.6,6.62 Z M 7.8,14.39L 10.4926,12L 7.84,9.65C 7.16,8.97 6.31,8.62 5.4,8.62C 3.53,8.62 2.01,10.13 2.01,12C 2.01,13.87 3.53,15.38 5.4,15.38C 6.31,15.38 7.16,15.03 7.8,14.39 Z M 16.2,9.61L 13.5074,12L 16.1602,14.35C 16.8398,15.03 17.7,15.38 18.6,15.38C 20.47,15.38 21.9902,13.87 21.9902,12C 21.9902,10.13 20.47,8.62 18.6,8.62C 17.69,8.62 16.8398,8.97 16.2,9.61 Z ' })
                )
            );
        }
    }]);

    return MdiInfinity;
}(React.Component);

exports.default = MdiInfinity;
module.exports = exports['default'];