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

var MdiHanger = function (_React$Component) {
    _inherits(MdiHanger, _React$Component);

    function MdiHanger() {
        _classCallCheck(this, MdiHanger);

        return _possibleConstructorReturn(this, (MdiHanger.__proto__ || Object.getPrototypeOf(MdiHanger)).apply(this, arguments));
    }

    _createClass(MdiHanger, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'fill-rule': 'evenodd', 'stroke-linejoin': 'round', d: 'M 20.7552,16.3363L 20.7547,16.3372C 21.4994,16.7701 22,17.5766 22,18.5C 22,19.8807 20.8807,21 19.5,21L 4.5,21C 3.11929,21 2,19.8807 2,18.5C 2,17.5766 2.50064,16.7701 3.24529,16.3372L 3.24479,16.3363L 11,11.8589C 11,11.8589 11,11 12,10C 13,10 14,9.10457 14,8C 14,6.89543 13.1046,6 12,6C 10.8954,6 10,6.89543 10,8L 8,8C 8,5.79086 9.79086,4 12,4C 14.2091,4 16,5.79086 16,8C 16,9.85733 14.7341,11.419 13.0181,11.8693L 20.7552,16.3363 Z M 4.5,19L 4.51039,19L 19.4896,19L 19.5,19C 19.6727,19 19.8406,18.9103 19.9331,18.75C 20.0712,18.5109 19.9893,18.2051 19.75,18.067L 12,13.5916L 4.25002,18.067C 4.01074,18.2051 3.9288,18.5109 4.06687,18.75C 4.15942,18.9103 4.32732,19 4.5,19 Z ' }),
                    React.createElement('path', { 'fill-rule': 'evenodd', 'stroke-linejoin': 'round', d: 'M 11,11.8589L 12,10C 13.1046,10 14,9.10457 14,8' }),
                    React.createElement('path', { 'fill-rule': 'evenodd', 'stroke-linejoin': 'round', d: 'M 11,11.8589L 12,10C 13.1046,10 14,9.10457 14,8' })
                )
            );
        }
    }]);

    return MdiHanger;
}(React.Component);

exports.default = MdiHanger;
module.exports = exports['default'];