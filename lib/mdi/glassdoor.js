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

var MdiGlassdoor = function (_React$Component) {
    _inherits(MdiGlassdoor, _React$Component);

    function MdiGlassdoor() {
        _classCallCheck(this, MdiGlassdoor);

        return _possibleConstructorReturn(this, (MdiGlassdoor.__proto__ || Object.getPrototypeOf(MdiGlassdoor)).apply(this, arguments));
    }

    _createClass(MdiGlassdoor, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 18,6L 16,6L 16,15C 16,16 15.8227,16.6401 15,16.9472L 9.5,19L 9.5,6C 9.5,5.3035 9.74338,4.1008 11,4.2376L 18,5L 18,3.7888L 9,2.1056C 8.64184,2.0386 8.35854,2 8,2C 6.72156,2 6,2.7836 6,4L 6,20.3696C 6,21.9476 7.37003,22.2578 8,22L 17,18.3168C 18,17.9076 18,17 18,16L 18,6 Z ' })
                )
            );
        }
    }]);

    return MdiGlassdoor;
}(React.Component);

exports.default = MdiGlassdoor;
module.exports = exports['default'];