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

var MdiClockIn = function (_React$Component) {
    _inherits(MdiClockIn, _React$Component);

    function MdiClockIn() {
        _classCallCheck(this, MdiClockIn);

        return _possibleConstructorReturn(this, (MdiClockIn.__proto__ || Object.getPrototypeOf(MdiClockIn)).apply(this, arguments));
    }

    _createClass(MdiClockIn, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 2.2075,0.79125L 0.791254,2.20801L 4.795,6.20625L 2.9975,7.9975L 7.9975,7.9975L 7.9975,2.9978L 6.20625,4.795M 12.0025,7.9975C 8.135,7.9975 5,11.1325 5,15C 5,18.8675 8.135,22.0025 12.0025,22.0025C 15.8638,22.0025 18.9988,18.8675 18.9988,15C 18.9988,11.1325 15.8638,7.9975 12.0025,7.9975 Z M 11.9975,10.1512C 14.6725,10.1512 16.8462,12.3238 16.8462,15C 16.8462,17.6812 14.6725,19.8537 11.9975,19.8537C 9.31625,19.8537 7.14875,17.6812 7.14875,15C 7.14875,12.3238 9.31625,10.1512 11.9975,10.1512 Z M 11.0013,12.0025L 11.0013,15.6887L 14.19,17.5287L 14.9362,16.23L 12.5,14.8237L 12.5,12.0025' })
                )
            );
        }
    }]);

    return MdiClockIn;
}(React.Component);

exports.default = MdiClockIn;
module.exports = exports['default'];