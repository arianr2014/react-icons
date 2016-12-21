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

var MdiWifiOff = function (_React$Component) {
    _inherits(MdiWifiOff, _React$Component);

    function MdiWifiOff() {
        _classCallCheck(this, MdiWifiOff);

        return _possibleConstructorReturn(this, (MdiWifiOff.__proto__ || Object.getPrototypeOf(MdiWifiOff)).apply(this, arguments));
    }

    _createClass(MdiWifiOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 2.275,2.9978L 1.00125,4.2675L 2.47125,5.7425C 2.03625,6.01125 1.60625,6.29375 1.20125,6.60125L 2.9975,8.99875C 3.525,8.60375 4.0775,8.2475 4.65875,7.925L 6.885,10.1563C 6.1475,10.4975 5.44375,10.9125 4.8,11.3963L 6.60125,13.7987C 7.3775,13.2175 8.25625,12.7737 9.19875,12.4663L 11.7525,15.02C 10.4975,15.0738 9.34125,15.4937 8.39875,16.2013L 12.0025,21.0012L 14.4575,17.725L 17.735,21.0012L 18.9988,19.7213M 12.0025,2.9978C 9.85375,2.9978 7.8025,3.38354 5.89875,4.0725L 8.29125,6.465C 9.4775,6.1625 10.7175,6.00125 12.0025,6.00125C 15.3763,6.00125 18.4912,7.11375 21.0013,8.99875L 22.8025,6.60125C 19.79,4.34125 16.055,2.9978 12.0025,2.9978 Z M 12.0025,8.99875C 11.6212,8.99875 11.25,9.01875 10.8788,9.0525L 14.0675,12.2463C 15.2925,12.5337 16.4262,13.0662 17.4025,13.7987L 19.1988,11.3963C 17.1975,9.8925 14.7025,8.99875 12.0025,8.99875 Z ' })
                )
            );
        }
    }]);

    return MdiWifiOff;
}(React.Component);

exports.default = MdiWifiOff;
module.exports = exports['default'];