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

var MdiPlaneShield = function (_React$Component) {
    _inherits(MdiPlaneShield, _React$Component);

    function MdiPlaneShield() {
        _classCallCheck(this, MdiPlaneShield);

        return _possibleConstructorReturn(this, (MdiPlaneShield.__proto__ || Object.getPrototypeOf(MdiPlaneShield)).apply(this, arguments));
    }

    _createClass(MdiPlaneShield, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 12,1L 3,5L 3,11C 3,16.55 6.84,21.74 12,23C 17.16,21.74 21,16.55 21,11L 21,5L 12,1 Z M 12,5.6836C 12.5231,5.6837 12.9472,6.1077 12.9473,6.6309L 12.9473,10.1055L 18,13.2637L 18,14.5254L 12.9473,12.9473L 12.9473,16.4219L 14.2109,17.3691L 14.2109,18.3164L 12,17.6836L 9.78906,18.3164L 9.78906,17.3691L 11.0527,16.4219L 11.0527,12.9473L 6,14.5254L 6,13.2637L 11.0527,10.1055L 11.0527,6.6309C 11.0528,6.1077 11.4769,5.6837 12,5.6836 Z ' })
                )
            );
        }
    }]);

    return MdiPlaneShield;
}(React.Component);

exports.default = MdiPlaneShield;
module.exports = exports['default'];