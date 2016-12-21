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

var MdiCalendarToday = function (_React$Component) {
    _inherits(MdiCalendarToday, _React$Component);

    function MdiCalendarToday() {
        _classCallCheck(this, MdiCalendarToday);

        return _possibleConstructorReturn(this, (MdiCalendarToday.__proto__ || Object.getPrototypeOf(MdiCalendarToday)).apply(this, arguments));
    }

    _createClass(MdiCalendarToday, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 7,10L 12,10L 12,15L 7,15M 19,19L 5,19L 5,8L 19,8M 19,3L 18,3L 18,1L 16,1L 16,3L 8,3L 8,1L 6,1L 6,3L 5,3C 3.89,3 3.01,3.9 3.01,5L 3,19C 3,20.1 3.89,21 5,21L 19,21C 20.1,21 21,20.1 21,19L 21,5C 21,3.9 20.1,3 19,3 Z ' })
                )
            );
        }
    }]);

    return MdiCalendarToday;
}(React.Component);

exports.default = MdiCalendarToday;
module.exports = exports['default'];