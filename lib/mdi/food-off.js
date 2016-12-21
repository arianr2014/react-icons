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

var MdiFoodOff = function (_React$Component) {
    _inherits(MdiFoodOff, _React$Component);

    function MdiFoodOff() {
        _classCallCheck(this, MdiFoodOff);

        return _possibleConstructorReturn(this, (MdiFoodOff.__proto__ || Object.getPrototypeOf(MdiFoodOff)).apply(this, arguments));
    }

    _createClass(MdiFoodOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'fill-rule': 'evenodd', 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 2,5.26848L 3.27711,4L 21,21.7229L 19.7315,23L 17.7315,21L 15.5,21L 15.2089,18.4774L 12.9711,16.2396C 12.8638,16.6762 12.4697,17 12,17L 3,17C 2.44771,17 2,16.5523 2,16C 2,15.4477 2.44771,15 3,15L 8,15L 9.5,16.5L 11,15L 11.7315,15L 10.7315,14L 2,14C 2,12.3432 3.34314,11 5,11L 7.73153,11L 2,5.26848 Z M 14,8.00001L 16.2341,8.00001L 15.097,3.46181L 16.843,3.02431L 18.0898,8L 22,8L 20.7403,18.9176L 14.5449,12.7222L 14,8.00001 Z M 13,18C 13,19.6569 11.6568,21 9.99999,21L 5,21C 3.34314,21 2,19.6569 2,18L 13,18 Z ' })
                )
            );
        }
    }]);

    return MdiFoodOff;
}(React.Component);

exports.default = MdiFoodOff;
module.exports = exports['default'];