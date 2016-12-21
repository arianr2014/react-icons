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

var MdiBatteryNegative = function (_React$Component) {
    _inherits(MdiBatteryNegative, _React$Component);

    function MdiBatteryNegative() {
        _classCallCheck(this, MdiBatteryNegative);

        return _possibleConstructorReturn(this, (MdiBatteryNegative.__proto__ || Object.getPrototypeOf(MdiBatteryNegative)).apply(this, arguments));
    }

    _createClass(MdiBatteryNegative, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 11.667,4C 12.4033,4 13,4.59701 13,5.33301L 13,20.667C 13,21.403 12.4033,22 11.667,22L 2.33299,22C 1.59668,22 1,21.403 1,20.667L 1,5.33301C 1,4.59701 1.59668,4 2.33299,4L 4,4L 4.0006,2.00196L 10,2L 10,4L 11.667,4 Z M 15.0006,12.002L 23.0006,12.002L 23.0006,14.002L 15.0006,14.002L 15.0006,12.002 Z M 3,13L 11,13L 11,6L 3,6L 3,13 Z ' })
                )
            );
        }
    }]);

    return MdiBatteryNegative;
}(React.Component);

exports.default = MdiBatteryNegative;
module.exports = exports['default'];