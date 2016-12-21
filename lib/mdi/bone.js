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

var MdiBone = function (_React$Component) {
    _inherits(MdiBone, _React$Component);

    function MdiBone() {
        _classCallCheck(this, MdiBone);

        return _possibleConstructorReturn(this, (MdiBone.__proto__ || Object.getPrototypeOf(MdiBone)).apply(this, arguments));
    }

    _createClass(MdiBone, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 8,14C 8,15.6569 6.65685,17 5,17C 3.34315,17 2,15.6569 2,14C 2,13.2316 2.28885,12.5308 2.7639,12C 2.28885,11.4692 2,10.7684 2,10C 2,8.34315 3.34315,7 5,7C 6.65685,7 8,8.34315 8,10C 9.33333,10.0833 10.6667,10.1667 12,10.1667C 13.3333,10.1667 14.6667,10.0833 16,10C 16,8.34315 17.3431,7 19,7C 20.6569,7 22,8.34315 22,10C 22,10.7684 21.7111,11.4692 21.2361,12C 21.7111,12.5308 22,13.2316 22,14C 22,15.6569 20.6569,17 19,17C 17.3431,17 16,15.6569 16,14C 14.6667,13.9167 13.3333,13.8333 12,13.8333C 10.6667,13.8333 9.33333,13.9167 8,14 Z ' })
                )
            );
        }
    }]);

    return MdiBone;
}(React.Component);

exports.default = MdiBone;
module.exports = exports['default'];