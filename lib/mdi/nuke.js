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

var MdiNuke = function (_React$Component) {
    _inherits(MdiNuke, _React$Component);

    function MdiNuke() {
        _classCallCheck(this, MdiNuke);

        return _possibleConstructorReturn(this, (MdiNuke.__proto__ || Object.getPrototypeOf(MdiNuke)).apply(this, arguments));
    }

    _createClass(MdiNuke, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 14.041,12L 10,12L 10,11L 5.5,11C 3.567,11 2,9.433 2,7.5C 2,5.567 3.567,4 5.5,4C 6.5271,4 7.45087,4.44242 8.09113,5.14709C 8.48193,3.34772 10.0836,2 12,2C 13.9164,2 15.5181,3.34772 15.9089,5.14708C 16.5491,4.44242 17.4729,4 18.5,4C 20.433,4 22,5.567 22,7.5C 22,9.433 20.433,11 18.5,11L 14.041,11L 14.041,12 Z M 10,16.9017L 10,15.7598L 5.02344,15.7598L 5.02344,13.7598L 19.0234,13.7598L 19.0234,15.7598L 14.041,15.7598L 14.041,16.9166L 19.9909,19.0822C 20.5783,19.2855 21,19.8435 21,20.5C 21,21.3284 20.3284,22 19.5,22L 4.5,22C 3.67157,22 3,21.3284 3,20.5C 3,19.8435 3.42171,19.2856 4.00901,19.0822L 10,16.9017 Z ' })
                )
            );
        }
    }]);

    return MdiNuke;
}(React.Component);

exports.default = MdiNuke;
module.exports = exports['default'];