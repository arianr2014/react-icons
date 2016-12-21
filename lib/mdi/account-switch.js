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

var MdiAccountSwitch = function (_React$Component) {
    _inherits(MdiAccountSwitch, _React$Component);

    function MdiAccountSwitch() {
        _classCallCheck(this, MdiAccountSwitch);

        return _possibleConstructorReturn(this, (MdiAccountSwitch.__proto__ || Object.getPrototypeOf(MdiAccountSwitch)).apply(this, arguments));
    }

    _createClass(MdiAccountSwitch, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 16,9C 18.333,9 23,10.168 23,12.5L 23,15L 17,15L 17,12.5C 17,11.017 16.194,9.891 15.035,9.054L 16,9 Z M 8,9C 10.333,9 15,10.168 15,12.5L 15,15L 1,15L 1,12.5C 1,10.168 5.66601,9 8,9 Z M 8,7C 6.34302,7 5,5.656 5,4C 5,2.34401 6.34302,1.00001 8,1.00001C 9.65702,1.00001 10.99,2.34401 10.99,4C 10.99,5.656 9.65702,7 8,7 Z M 16,7C 14.343,7 13,5.656 13,4C 13,2.34401 14.343,1.00001 16,1.00001C 17.657,1.00001 18.99,2.34401 18.99,4C 18.99,5.656 17.657,7 16,7 Z M 9,16.75L 9,19L 15,19L 15,16.75L 18.25,20L 15,23.25L 15,21L 9,21L 9,23.25L 5.75,20L 9,16.75 Z ' })
                )
            );
        }
    }]);

    return MdiAccountSwitch;
}(React.Component);

exports.default = MdiAccountSwitch;
module.exports = exports['default'];