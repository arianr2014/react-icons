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

var MdiDoNotDisturbOff = function (_React$Component) {
    _inherits(MdiDoNotDisturbOff, _React$Component);

    function MdiDoNotDisturbOff() {
        _classCallCheck(this, MdiDoNotDisturbOff);

        return _possibleConstructorReturn(this, (MdiDoNotDisturbOff.__proto__ || Object.getPrototypeOf(MdiDoNotDisturbOff)).apply(this, arguments));
    }

    _createClass(MdiDoNotDisturbOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 17,11L 17,13L 15.54,13L 20.22,17.68C 21.34,16.07 22,14.11 22,12C 22,6.48 17.52,2 12,2C 9.89,2 7.93,2.66 6.32,3.78L 13.54,11L 17,11 Z M 2.27,2.27L 1,3.54L 3.78,6.32C 2.66,7.93 2,9.89 2,12C 2,17.52 6.48,22 12,22C 14.11,22 16.07,21.34 17.68,20.22L 20.46,23L 21.73,21.73L 2.27,2.27 Z M 7,13L 7,11L 8.46,11L 10.46,13L 7,13 Z ' })
                )
            );
        }
    }]);

    return MdiDoNotDisturbOff;
}(React.Component);

exports.default = MdiDoNotDisturbOff;
module.exports = exports['default'];