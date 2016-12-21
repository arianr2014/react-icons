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

var MdiPriorityHigh = function (_React$Component) {
    _inherits(MdiPriorityHigh, _React$Component);

    function MdiPriorityHigh() {
        _classCallCheck(this, MdiPriorityHigh);

        return _possibleConstructorReturn(this, (MdiPriorityHigh.__proto__ || Object.getPrototypeOf(MdiPriorityHigh)).apply(this, arguments));
    }

    _createClass(MdiPriorityHigh, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 14,19L 22,19L 22,17L 14,17L 14,19 Z M 14,13.5L 22,13.5L 22,11.5L 14,11.5L 14,13.5 Z M 14,8L 22,8L 22,6L 14,6L 14,8 Z M 2,12.5C 2,8.92 4.92,6 8.5,6L 9,6L 9,4L 12,7L 9,10L 9,8L 8.5,8C 6.02,8 4,10.02 4,12.5C 4,14.98 6.02,17 8.5,17L 12,17L 12,19L 8.5,19C 4.92,19 2,16.08 2,12.5 Z ' })
                )
            );
        }
    }]);

    return MdiPriorityHigh;
}(React.Component);

exports.default = MdiPriorityHigh;
module.exports = exports['default'];