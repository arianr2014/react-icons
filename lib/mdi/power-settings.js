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

var MdiPowerSettings = function (_React$Component) {
    _inherits(MdiPowerSettings, _React$Component);

    function MdiPowerSettings() {
        _classCallCheck(this, MdiPowerSettings);

        return _possibleConstructorReturn(this, (MdiPowerSettings.__proto__ || Object.getPrototypeOf(MdiPowerSettings)).apply(this, arguments));
    }

    _createClass(MdiPowerSettings, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 15,24L 17,24L 17,22L 15,22M 16.56,4.44L 15.11,5.89C 16.84,6.94 18,8.83 18,11C 18,14.31 15.31,17 12,17C 8.69,17 6,14.31 6,11C 6,8.83 7.16,6.94 8.88,5.88L 7.44,4.44C 5.36,5.88 4,8.28 4,11C 4,15.42 7.58,19 12,19C 16.42,19 20,15.42 20,11C 20,8.28 18.64,5.88 16.56,4.44 Z M 13,2L 11,2L 11,12L 13,12M 11,24L 13,24L 13,22L 11,22M 7,24L 9,24L 9,22L 7,22L 7,24 Z ' })
                )
            );
        }
    }]);

    return MdiPowerSettings;
}(React.Component);

exports.default = MdiPowerSettings;
module.exports = exports['default'];