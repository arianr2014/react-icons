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

var MdiChartScatterplotHexbin = function (_React$Component) {
    _inherits(MdiChartScatterplotHexbin, _React$Component);

    function MdiChartScatterplotHexbin() {
        _classCallCheck(this, MdiChartScatterplotHexbin);

        return _possibleConstructorReturn(this, (MdiChartScatterplotHexbin.__proto__ || Object.getPrototypeOf(MdiChartScatterplotHexbin)).apply(this, arguments));
    }

    _createClass(MdiChartScatterplotHexbin, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'miter', d: 'M 2,2L 4,2L 4,20L 22,20L 22,22L 2,22L 2,2 Z M 14,14.5L 11.9793,18L 7.93782,18L 5.91709,14.5L 7.93782,11L 11.9793,11L 14,14.5 Z M 14.0829,6.5L 12.0622,10L 8.02073,10L 6,6.5L 8.02073,3L 12.0622,3L 14.0829,6.5 Z M 21.25,10.5L 19.2293,14L 15.1878,14L 13.1671,10.5L 15.1878,7L 19.2293,7L 21.25,10.5 Z ' })
                )
            );
        }
    }]);

    return MdiChartScatterplotHexbin;
}(React.Component);

exports.default = MdiChartScatterplotHexbin;
module.exports = exports['default'];