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

var MdiCalendarRange = function (_React$Component) {
    _inherits(MdiCalendarRange, _React$Component);

    function MdiCalendarRange() {
        _classCallCheck(this, MdiCalendarRange);

        return _possibleConstructorReturn(this, (MdiCalendarRange.__proto__ || Object.getPrototypeOf(MdiCalendarRange)).apply(this, arguments));
    }

    _createClass(MdiCalendarRange, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 9,11L 7,11L 7,13L 9,13L 9,11 Z M 13,11L 11,11L 11,13L 13,13L 13,11 Z M 17,11L 15,11L 15,13L 17,13L 17,11 Z M 19,4L 18,4L 18,2L 16,2L 16,4L 8,4L 8,2L 6,2L 6,4L 5,4C 3.89,4 3.01,4.9 3.01,6L 3,20C 3,21.1 3.89,22 5,22L 19,22C 20.1,22 21,21.1 21,20L 21,6C 21,4.9 20.1,4 19,4 Z M 19,20L 5,20L 5,9L 19,9L 19,20 Z ' })
                )
            );
        }
    }]);

    return MdiCalendarRange;
}(React.Component);

exports.default = MdiCalendarRange;
module.exports = exports['default'];