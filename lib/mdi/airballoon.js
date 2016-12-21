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

var MdiAirballoon = function (_React$Component) {
    _inherits(MdiAirballoon, _React$Component);

    function MdiAirballoon() {
        _classCallCheck(this, MdiAirballoon);

        return _possibleConstructorReturn(this, (MdiAirballoon.__proto__ || Object.getPrototypeOf(MdiAirballoon)).apply(this, arguments));
    }

    _createClass(MdiAirballoon, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 11,23C 9.89543,23 9,22.1046 9,21L 9,19L 15,19L 15,21C 15,22.1046 14.1046,23 13,23L 11,23 Z M 12,1C 12.7069,1 13.3924,1.09169 14.0452,1.26382C 15.2158,2.83393 16,5.71092 16,9C 16,11.2825 15.6224,13.3666 15,16C 15,17.1046 14.1046,18 13,18L 11,18C 9.89543,18 9,17.1046 9,16C 8.37764,13.3666 8,11.2825 8,9C 8,5.71093 8.78415,2.83393 9.95476,1.26382C 10.6076,1.09169 11.2931,1 12,1 Z M 20,8.00001C 20,11.1779 18.1471,15.923 15.4627,17.2138C 16.4102,15.3941 17,11.8348 17,9C 17,6.16522 16.4102,3.60593 15.4627,1.78618C 18.1471,3.07705 20,4.82215 20,8.00001 Z M 4,8.00001C 4,4.82215 5.85292,3.07705 8.5373,1.78618C 7.58977,3.60593 7,6.16522 7,9C 7,11.8348 7.58977,15.3941 8.53731,17.2138C 5.85291,15.923 4,11.1779 4,8.00001 Z ' })
                )
            );
        }
    }]);

    return MdiAirballoon;
}(React.Component);

exports.default = MdiAirballoon;
module.exports = exports['default'];