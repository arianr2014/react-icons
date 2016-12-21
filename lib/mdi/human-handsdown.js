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

var MdiHumanHandsdown = function (_React$Component) {
    _inherits(MdiHumanHandsdown, _React$Component);

    function MdiHumanHandsdown() {
        _classCallCheck(this, MdiHumanHandsdown);

        return _possibleConstructorReturn(this, (MdiHumanHandsdown.__proto__ || Object.getPrototypeOf(MdiHumanHandsdown)).apply(this, arguments));
    }

    _createClass(MdiHumanHandsdown, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 12.0025,1.00073C 10.8938,1.00073 10,1.89551 10,2.9978C 10,4.10625 10.8938,5 12.0025,5C 13.105,5 13.9987,4.10625 13.9987,2.9978C 13.9987,1.89551 13.105,1.00073 12.0025,1.00073 Z M 10,6.00125C 9.72625,6.00125 9.4825,6.10875 9.30625,6.28375L 9.30125,6.28375L 3.99875,11.5875L 5.415,12.9975L 8.99875,9.41375L 8.99875,22.0025L 11.0013,22.0025L 11.0013,15L 12.9975,15L 12.9975,22.0025L 15,22.0025L 15,9.41375L 18.5837,12.9975L 20,11.5875L 14.6975,6.28375C 14.5162,6.10875 14.2725,6.00125 13.9987,6.00125' })
                )
            );
        }
    }]);

    return MdiHumanHandsdown;
}(React.Component);

exports.default = MdiHumanHandsdown;
module.exports = exports['default'];