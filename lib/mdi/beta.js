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

var MdiBeta = function (_React$Component) {
    _inherits(MdiBeta, _React$Component);

    function MdiBeta() {
        _classCallCheck(this, MdiBeta);

        return _possibleConstructorReturn(this, (MdiBeta.__proto__ || Object.getPrototypeOf(MdiBeta)).apply(this, arguments));
    }

    _createClass(MdiBeta, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'round', d: 'M 9.22666,17.5933L 9.22666,23.12L 6.88,23.12L 6.88,6.71667C 6.88,5.27445 7.30778,4.12778 8.16333,3.27667C 9.01889,2.42556 10.1678,2 11.61,2C 12.9878,2 14.0728,2.33667 14.865,3.01C 15.6572,3.68334 16.0533,4.61667 16.0533,5.81C 16.0533,6.63223 15.7933,7.39945 15.2733,8.11167C 14.7533,8.82389 14.0778,9.31334 13.2467,9.58L 13.2467,9.62334C 14.5067,9.81667 15.4672,10.2722 16.1283,10.99C 16.7894,11.7078 17.12,12.6233 17.12,13.7367C 17.12,15.0633 16.6622,16.1411 15.7467,16.97C 14.8311,17.7989 13.6267,18.2133 12.1333,18.2133C 11.0711,18.2133 10.1022,18.0067 9.22666,17.5933 Z M 10.72,10.7467L 10.72,8.82667C 11.5889,8.72222 12.3039,8.39834 12.865,7.855C 13.4261,7.31167 13.7067,6.7 13.7067,6.02C 13.7067,4.62 13.0044,3.92 11.6,3.92C 10.8356,3.92 10.2489,4.16334 9.84,4.65C 9.43111,5.13667 9.22666,5.82223 9.22666,6.70667L 9.22666,15.49C 10.1378,16.0256 11.0267,16.2933 11.8933,16.2933C 12.7311,16.2933 13.385,16.0739 13.855,15.635C 14.325,15.1961 14.56,14.5822 14.56,13.7933C 14.56,11.9978 13.28,10.9822 10.72,10.7467 Z ' })
                )
            );
        }
    }]);

    return MdiBeta;
}(React.Component);

exports.default = MdiBeta;
module.exports = exports['default'];