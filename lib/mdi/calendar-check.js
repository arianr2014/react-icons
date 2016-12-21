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

var MdiCalendarCheck = function (_React$Component) {
    _inherits(MdiCalendarCheck, _React$Component);

    function MdiCalendarCheck() {
        _classCallCheck(this, MdiCalendarCheck);

        return _possibleConstructorReturn(this, (MdiCalendarCheck.__proto__ || Object.getPrototypeOf(MdiCalendarCheck)).apply(this, arguments));
    }

    _createClass(MdiCalendarCheck, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 19,19L 5,19L 5,8L 19,8M 19,3L 18,3L 18,1L 16,1L 16,3L 8,3L 8,1L 6,1L 6,3L 5,3C 3.89,3 3.01,3.9 3.01,5L 3,19C 3,20.1 3.89,21 5,21L 19,21C 20.1,21 21,20.1 21,19L 21,5C 21,3.9 20.1,3 19,3 Z M 16.53,11.06L 15.47,10L 10.59,14.88L 8.47,12.76L 7.41,13.82L 10.59,17L 16.53,11.06 Z ' })
                )
            );
        }
    }]);

    return MdiCalendarCheck;
}(React.Component);

exports.default = MdiCalendarCheck;
module.exports = exports['default'];