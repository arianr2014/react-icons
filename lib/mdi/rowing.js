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

var MdiRowing = function (_React$Component) {
    _inherits(MdiRowing, _React$Component);

    function MdiRowing() {
        _classCallCheck(this, MdiRowing);

        return _possibleConstructorReturn(this, (MdiRowing.__proto__ || Object.getPrototypeOf(MdiRowing)).apply(this, arguments));
    }

    _createClass(MdiRowing, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 8.5,14.5L 4,19L 5.5,20.5L 9,17L 11,17L 8.5,14.5 Z M 15,1C 13.9,1 13,1.9 13,3C 13,4.1 13.9,5 15,5C 16.1,5 17,4.1 17,3C 17,1.9 16.1,1 15,1 Z M 21,21.01L 18,24L 15.01,20.99L 15.01,19.5L 7.91,12.41C 7.6,12.46 7.3,12.48 7,12.48L 7,10.32C 8.66,10.35 10.61,9.45 11.67,8.28L 13.07,6.73C 13.26,6.52 13.5,6.35 13.76,6.23C 14.05,6.09 14.38,6 14.72,6L 14.75,6C 15.99,6.01 17,7.02 17,8.26L 17,14.01C 17,14.85 16.65,15.62 16.08,16.17L 12.5,12.59L 12.5,10.32C 11.87,10.84 11.07,11.34 10.21,11.71L 16.5,18L 18,18L 21,21.01 Z ' })
                )
            );
        }
    }]);

    return MdiRowing;
}(React.Component);

exports.default = MdiRowing;
module.exports = exports['default'];