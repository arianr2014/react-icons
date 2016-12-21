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

var MdiClockOut = function (_React$Component) {
    _inherits(MdiClockOut, _React$Component);

    function MdiClockOut() {
        _classCallCheck(this, MdiClockOut);

        return _possibleConstructorReturn(this, (MdiClockOut.__proto__ || Object.getPrototypeOf(MdiClockOut)).apply(this, arguments));
    }

    _createClass(MdiClockOut, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 17.9975,1.00073L 19.795,2.7925L 15.7913,6.7925L 17.2075,8.2075L 21.2061,4.20875L 22.9975,6.00125L 22.9975,1.00073M 12.0025,7.9975C 8.135,7.9975 5,11.1325 5,15C 5,18.8675 8.135,22.0025 12.0025,22.0025C 15.8638,22.0025 18.9988,18.8675 18.9988,15C 18.9988,11.1325 15.8638,7.9975 12.0025,7.9975 Z M 11.9975,10.1512C 14.6725,10.1512 16.8462,12.3238 16.8462,15C 16.8462,17.6812 14.6725,19.8537 11.9975,19.8537C 9.31625,19.8537 7.14875,17.6812 7.14875,15C 7.14875,12.3238 9.31625,10.1512 11.9975,10.1512 Z M 11.0013,12.0025L 11.0013,15.6887L 14.19,17.5287L 14.9362,16.23L 12.5,14.8237L 12.5,12.0025' })
                )
            );
        }
    }]);

    return MdiClockOut;
}(React.Component);

exports.default = MdiClockOut;
module.exports = exports['default'];