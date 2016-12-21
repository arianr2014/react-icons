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

var MdiClockEnd = function (_React$Component) {
    _inherits(MdiClockEnd, _React$Component);

    function MdiClockEnd() {
        _classCallCheck(this, MdiClockEnd);

        return _possibleConstructorReturn(this, (MdiClockEnd.__proto__ || Object.getPrototypeOf(MdiClockEnd)).apply(this, arguments));
    }

    _createClass(MdiClockEnd, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 12.0025,1.00073C 8.135,1.00073 5,4.13625 5,7.9975C 5,11.865 8.135,15 12.0025,15C 15.8638,15 18.9988,11.865 18.9988,7.9975C 18.9988,4.13625 15.8638,1.00073 12.0025,1.00073 Z M 11.9975,3.15405C 14.6725,3.15405 16.8462,5.3225 16.8462,8.0025C 16.8462,10.6788 14.6725,12.8513 11.9975,12.8513C 9.31625,12.8513 7.14875,10.6788 7.14875,8.0025C 7.14875,5.3225 9.31625,3.15405 11.9975,3.15405 Z M 11.0013,5L 11.0013,8.69125L 14.19,10.5275L 14.9362,9.22875L 12.5,7.8225L 12.5,5M 15,16.0012L 15,18.9988L 2.9975,18.9988L 2.9975,21.0012L 15,21.0012L 15,23.9988L 18.9988,20M 18.9988,20L 18.9988,23.9988L 21.0013,23.9988L 21.0013,16.0012L 18.9988,16.0012' })
                )
            );
        }
    }]);

    return MdiClockEnd;
}(React.Component);

exports.default = MdiClockEnd;
module.exports = exports['default'];