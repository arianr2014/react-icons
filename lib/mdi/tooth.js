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

var MdiTooth = function (_React$Component) {
    _inherits(MdiTooth, _React$Component);

    function MdiTooth() {
        _classCallCheck(this, MdiTooth);

        return _possibleConstructorReturn(this, (MdiTooth.__proto__ || Object.getPrototypeOf(MdiTooth)).apply(this, arguments));
    }

    _createClass(MdiTooth, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 7,2C 4,2 2,5 2,8C 2,10.1082 3,13 4,14C 5,15 6,22 8,22C 12.5407,22 10,15 12,15C 14,15 11.4593,22 16,22C 18,22 19,15 20,14C 21,13 22,10.1082 22,8C 22,5 20,2 17,2C 14,2 14,3 12,3C 10,3 10,2 7,2 Z M 7,4C 9,4 10,5 12,5C 14,5 15,4 17,4C 18.6667,4 20,6 20,8C 20,9.7523 19.1397,12.1103 18.1875,13.0625C 17.3324,13.9176 16.0611,19.9375 15.5,19.9375C 15.2869,19.9375 15.0136,18.8797 15,17.5937C 14.9784,15.5522 14.4267,13 12,13C 9.57329,13 9.02157,15.5522 9,17.5937C 8.98641,18.8797 8.71312,19.9375 8.5,19.9375C 7.93892,19.9375 6.66756,13.9175 5.8125,13.0625C 4.86031,12.1103 4,9.7523 4,8C 4,6 5.33333,4 7,4 Z ' })
                )
            );
        }
    }]);

    return MdiTooth;
}(React.Component);

exports.default = MdiTooth;
module.exports = exports['default'];