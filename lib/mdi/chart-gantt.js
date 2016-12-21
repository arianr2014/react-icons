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

var MdiChartGantt = function (_React$Component) {
    _inherits(MdiChartGantt, _React$Component);

    function MdiChartGantt() {
        _classCallCheck(this, MdiChartGantt);

        return _possibleConstructorReturn(this, (MdiChartGantt.__proto__ || Object.getPrototypeOf(MdiChartGantt)).apply(this, arguments));
    }

    _createClass(MdiChartGantt, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 2,5L 10,5L 10,2L 12,2L 12,22L 10,22L 10,18L 6,18L 6,15L 10,15L 10,13L 4,13L 4,10L 10,10L 10,8L 2,8L 2,5 Z M 14,5.00001L 17,5.00001L 17,8.00001L 14,8.00001L 14,5.00001 Z M 14,10L 19,10L 19,13L 14,13L 14,10 Z M 14,15L 22,15L 22,18L 14,18L 14,15 Z ' })
                )
            );
        }
    }]);

    return MdiChartGantt;
}(React.Component);

exports.default = MdiChartGantt;
module.exports = exports['default'];