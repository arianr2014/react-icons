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

var MdiFish = function (_React$Component) {
    _inherits(MdiFish, _React$Component);

    function MdiFish() {
        _classCallCheck(this, MdiFish);

        return _possibleConstructorReturn(this, (MdiFish.__proto__ || Object.getPrototypeOf(MdiFish)).apply(this, arguments));
    }

    _createClass(MdiFish, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 12,20L 12.7554,16.9784C 9.51828,16.791 6.59333,15.4026 5.74592,13.5762C 5.66483,14.0557 5.52729,14.4939 5.33333,14.8333C 4.66666,16 3.33333,16 2,16C 3.10457,16 3.5,14.433 3.5,12.5C 3.5,10.567 3.10457,9.00001 2,9.00001C 3.33333,9.00001 4.66666,9.00001 5.33333,10.1667C 5.5273,10.5061 5.66483,10.9443 5.74592,11.4238C 6.40461,10.0041 8.3185,8.84915 10.6585,8.31709L 9,5.00001C 11,5.00001 13,5.00001 14.3333,5.66667C 15.459,6.2295 16.1095,7.26748 16.6859,8.37948C 19.6091,9.07648 22,10.6592 22,12.5C 22,14.3795 19.5076,15.9899 16.501,16.6633C 15.6714,17.7591 14.8612,18.7777 14.1667,19.3333C 13.3333,20 12.6667,20 12,20 Z M 17,11C 16.4477,11 16,11.4477 16,12C 16,12.5523 16.4477,13 17,13C 17.5523,13 18,12.5523 18,12C 18,11.4477 17.5523,11 17,11 Z ' })
                )
            );
        }
    }]);

    return MdiFish;
}(React.Component);

exports.default = MdiFish;
module.exports = exports['default'];