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

var MdiAlarmMultiple = function (_React$Component) {
    _inherits(MdiAlarmMultiple, _React$Component);

    function MdiAlarmMultiple() {
        _classCallCheck(this, MdiAlarmMultiple);

        return _possibleConstructorReturn(this, (MdiAlarmMultiple.__proto__ || Object.getPrototypeOf(MdiAlarmMultiple)).apply(this, arguments));
    }

    _createClass(MdiAlarmMultiple, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 9.292,3.25101L 5.161,6.71622L 4,5.339L 8.14,1.87401L 9.292,3.25101 Z M 22,5.34801L 20.839,6.72501L 16.699,3.25101L 17.86,1.87401L 22,5.34801 Z M 13,4.00001C 17.4183,4.00001 21,7.58173 21,12C 21,16.4183 17.4183,20 13,20C 8.58172,20 5,16.4183 5,12C 5,7.58173 8.58172,4.00001 13,4.00001 Z M 13,6.00001C 9.68629,6.00001 7,8.6863 7,12C 7,15.3137 9.68629,18 13,18C 16.3137,18 19,15.3137 19,12C 19,8.6863 16.3137,6.00001 13,6.00001 Z M 12,7.5L 13.5,7.5L 13.5,12.0344L 16.7172,13.4977L 16.0962,14.8631L 12,13L 12,7.5 Z M 1.00001,14C 1.00001,11.5159 2.13225,9.29616 3.90883,7.82882C 3.32536,9.09841 3.00002,10.5112 3.00002,12L 3.06292,13.1279L 3,14C 3,16.2779 4.26942,18.2594 6.13944,19.2755C 7.44123,20.5035 9.0725,21.3859 10.8867,21.7763C 10.2817,21.9225 9.6499,22 9,22C 4.58172,22 1.00001,18.4183 1.00001,14 Z ' })
                )
            );
        }
    }]);

    return MdiAlarmMultiple;
}(React.Component);

exports.default = MdiAlarmMultiple;
module.exports = exports['default'];