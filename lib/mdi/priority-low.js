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

var MdiPriorityLow = function (_React$Component) {
    _inherits(MdiPriorityLow, _React$Component);

    function MdiPriorityLow() {
        _classCallCheck(this, MdiPriorityLow);

        return _possibleConstructorReturn(this, (MdiPriorityLow.__proto__ || Object.getPrototypeOf(MdiPriorityLow)).apply(this, arguments));
    }

    _createClass(MdiPriorityLow, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'miter', d: 'M 14,5L 22,5L 22,7L 14,7L 14,5 Z M 14,10.5L 22,10.5L 22,12.5L 14,12.5L 14,10.5 Z M 14,16L 22,16L 22,18L 14,18L 14,16 Z M 2,11.5C 2,15.08 4.92,18 8.5,18L 9,18L 9,20L 12,17L 9,14L 9,16L 8.5,16C 6.02,16 4,13.98 4,11.5C 4,9.02 6.02,7 8.5,7L 12,7L 12,5L 8.5,5C 4.92,5 2,7.91992 2,11.5 Z ' })
                )
            );
        }
    }]);

    return MdiPriorityLow;
}(React.Component);

exports.default = MdiPriorityLow;
module.exports = exports['default'];