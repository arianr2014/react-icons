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

var MdiCalendarRemove = function (_React$Component) {
    _inherits(MdiCalendarRemove, _React$Component);

    function MdiCalendarRemove() {
        _classCallCheck(this, MdiCalendarRemove);

        return _possibleConstructorReturn(this, (MdiCalendarRemove.__proto__ || Object.getPrototypeOf(MdiCalendarRemove)).apply(this, arguments));
    }

    _createClass(MdiCalendarRemove, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 19,19L 5,19L 5,8L 19,8M 19,3L 18,3L 18,1L 16,1L 16,3L 8,3L 8,1L 6,1L 6,3L 5,3C 3.89,3 3.01,3.9 3.01,5L 3,19C 3,20.1 3.89,21 5,21L 19,21C 20.1,21 21,20.1 21,19L 21,5C 21,3.9 20.1,3 19,3 Z M 9.31,17L 11.75,14.56L 14.19,17L 15.25,15.94L 12.81,13.5L 15.25,11.06L 14.19,10L 11.75,12.44L 9.31,10L 8.25,11.06L 10.69,13.5L 8.25,15.94L 9.31,17 Z ' })
                )
            );
        }
    }]);

    return MdiCalendarRemove;
}(React.Component);

exports.default = MdiCalendarRemove;
module.exports = exports['default'];