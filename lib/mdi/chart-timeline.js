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

var MdiChartTimeline = function (_React$Component) {
    _inherits(MdiChartTimeline, _React$Component);

    function MdiChartTimeline() {
        _classCallCheck(this, MdiChartTimeline);

        return _possibleConstructorReturn(this, (MdiChartTimeline.__proto__ || Object.getPrototypeOf(MdiChartTimeline)).apply(this, arguments));
    }

    _createClass(MdiChartTimeline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 2,2L 4,2L 4,20L 22,20L 22,22L 2,22L 2,2 Z M 7,10L 17,10L 17,13L 7,13L 7,10 Z M 11,15L 21,15L 21,18L 11,18L 11,15 Z M 6,4L 22,4L 22,8L 20,8L 20,6L 8,6L 8,8L 6,8L 6,4 Z ' })
                )
            );
        }
    }]);

    return MdiChartTimeline;
}(React.Component);

exports.default = MdiChartTimeline;
module.exports = exports['default'];