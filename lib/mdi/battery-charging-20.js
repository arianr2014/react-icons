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

var MdiBatteryCharging20 = function (_React$Component) {
    _inherits(MdiBatteryCharging20, _React$Component);

    function MdiBatteryCharging20() {
        _classCallCheck(this, MdiBatteryCharging20);

        return _possibleConstructorReturn(this, (MdiBatteryCharging20.__proto__ || Object.getPrototypeOf(MdiBatteryCharging20)).apply(this, arguments));
    }

    _createClass(MdiBatteryCharging20, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 23.0503,10.998L 20.0503,10.998L 20.0503,3.99805L 15.0503,13.998L 18.0503,13.998L 18.0503,21.998M 12.0503,16.998L 4.05029,16.998L 4.05029,5.99805L 12.0503,5.99805M 12.7173,3.99805L 11.0503,3.99805L 11.0503,1.99805L 5.05029,1.99805L 5.05029,3.99805L 3.3833,3.99805C 2.64728,3.99805 2.05029,4.59503 2.05029,5.33105L 2.05029,20.665C 2.05029,21.4011 2.64728,21.998 3.3833,21.998L 12.7173,21.998C 13.4533,21.998 14.0503,21.4011 14.0503,20.665L 14.0503,5.33105C 14.0503,4.59503 13.4533,3.99805 12.7173,3.99805 Z ' })
                )
            );
        }
    }]);

    return MdiBatteryCharging20;
}(React.Component);

exports.default = MdiBatteryCharging20;
module.exports = exports['default'];