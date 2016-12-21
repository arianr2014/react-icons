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

var MdiFlower = function (_React$Component) {
    _inherits(MdiFlower, _React$Component);

    function MdiFlower() {
        _classCallCheck(this, MdiFlower);

        return _possibleConstructorReturn(this, (MdiFlower.__proto__ || Object.getPrototypeOf(MdiFlower)).apply(this, arguments));
    }

    _createClass(MdiFlower, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 2.99939,12.9981C 2.99939,17.9691 7.0284,21.9981 11.9994,21.9981C 11.9994,17.0271 7.97038,12.9981 2.99939,12.9981 Z M 11.9994,5.49807C 13.3804,5.49807 14.4994,6.61707 14.4994,7.99807C 14.4994,9.37906 13.3804,10.4981 11.9994,10.4981C 10.6184,10.4981 9.49939,9.37906 9.49939,7.99807C 9.49939,6.61707 10.6184,5.49807 11.9994,5.49807 Z M 5.60239,10.2481C 5.60239,11.6291 6.72107,12.7481 8.10239,12.7481C 8.62839,12.7481 9.11639,12.5831 9.51839,12.3061C 9.51439,12.3701 9.49939,12.4321 9.49939,12.4981C 9.49939,13.8791 10.6184,14.9981 11.9994,14.9981C 13.3804,14.9981 14.4994,13.8791 14.4994,12.4981C 14.4994,12.4321 14.4844,12.3701 14.4794,12.3061C 14.8824,12.5831 15.3704,12.7481 15.8964,12.7481C 17.2777,12.7481 18.3964,11.6291 18.3964,10.2481C 18.3964,9.25206 17.8104,8.40006 16.9684,7.99807C 17.8104,7.59608 18.3964,6.74407 18.3964,5.74807C 18.3964,4.36707 17.2777,3.24807 15.8964,3.24807C 15.3704,3.24807 14.8824,3.41306 14.4794,3.69007C 14.4844,3.62607 14.4994,3.56406 14.4994,3.49807C 14.4994,2.11707 13.3804,0.998068 11.9994,0.998068C 10.6184,0.998068 9.49939,2.11707 9.49939,3.49807C 9.49939,3.56406 9.51439,3.62607 9.51839,3.69007C 9.11639,3.41306 8.62839,3.24807 8.10239,3.24807C 6.72107,3.24807 5.60239,4.36707 5.60239,5.74807C 5.60239,6.74407 6.18839,7.59608 7.0304,7.99807C 6.18839,8.40006 5.60239,9.25206 5.60239,10.2481 Z M 11.9994,21.9981C 16.9704,21.9981 20.9994,17.9691 20.9994,12.9981C 16.0284,12.9981 11.9994,17.0271 11.9994,21.9981 Z ' })
                )
            );
        }
    }]);

    return MdiFlower;
}(React.Component);

exports.default = MdiFlower;
module.exports = exports['default'];