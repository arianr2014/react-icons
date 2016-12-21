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

var MdiSwitch = function (_React$Component) {
    _inherits(MdiSwitch, _React$Component);

    function MdiSwitch() {
        _classCallCheck(this, MdiSwitch);

        return _possibleConstructorReturn(this, (MdiSwitch.__proto__ || Object.getPrototypeOf(MdiSwitch)).apply(this, arguments));
    }

    _createClass(MdiSwitch, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 13,18L 14,18C 14.5523,18 15,18.4477 15,19L 22,19L 22,21L 15,21C 15,21.5523 14.5523,22 14,22L 10,22C 9.44772,22 9.00001,21.5523 9.00001,21L 2,21L 2,19L 9.00001,19C 9.00001,18.4477 9.44772,18 10,18L 11,18L 11,16L 7.99999,16C 7.44771,16 6.99999,15.5523 6.99999,15L 7,3.00001C 7,2.44773 7.44771,2.00002 8,2.00002L 16,2.00002C 16.5523,2.00002 17,2.44773 17,3.00001L 17,15C 17,15.5523 16.5522,16 16,16L 13,16L 13,18 Z M 13,6.00001L 14,6.00001L 14,4.00002L 13,4.00002L 13,6.00001 Z M 9,4.00001L 9,6L 11,6L 11,4.00001L 9,4.00001 Z M 9,8.00001L 9,10L 11,10L 11,8.00001L 9,8.00001 Z M 9,12L 9,14L 11,14L 11,12L 9,12 Z ' })
                )
            );
        }
    }]);

    return MdiSwitch;
}(React.Component);

exports.default = MdiSwitch;
module.exports = exports['default'];