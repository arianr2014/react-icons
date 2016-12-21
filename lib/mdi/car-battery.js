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

var MdiCarBattery = function (_React$Component) {
    _inherits(MdiCarBattery, _React$Component);

    function MdiCarBattery() {
        _classCallCheck(this, MdiCarBattery);

        return _possibleConstructorReturn(this, (MdiCarBattery.__proto__ || Object.getPrototypeOf(MdiCarBattery)).apply(this, arguments));
    }

    _createClass(MdiCarBattery, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 4,3L 4,6L 1,6L 1,20L 23,20L 23,6L 20,6L 20,3L 14,3L 14,6L 10,6L 10,3L 4,3 Z M 3,8L 21,8L 21,18L 3,18L 3,8 Z M 15,10L 15,12L 13,12L 13,14L 15,14L 15,16L 17,16L 17,14L 19,14L 19,12L 17,12L 17,10L 15,10 Z M 5,12L 5,14L 11,14L 11,12L 5,12 Z ' })
                )
            );
        }
    }]);

    return MdiCarBattery;
}(React.Component);

exports.default = MdiCarBattery;
module.exports = exports['default'];