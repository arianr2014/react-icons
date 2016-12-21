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

var MdiBowling = function (_React$Component) {
    _inherits(MdiBowling, _React$Component);

    function MdiBowling() {
        _classCallCheck(this, MdiBowling);

        return _possibleConstructorReturn(this, (MdiBowling.__proto__ || Object.getPrototypeOf(MdiBowling)).apply(this, arguments));
    }

    _createClass(MdiBowling, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 12,2C 17.5228,2 22,6.47716 22,12C 22,17.5228 17.5228,22 12,22C 6.47715,22 2,17.5228 2,12C 2,6.47716 6.47715,2 12,2 Z M 12.5,11C 11.6716,11 11,11.6716 11,12.5C 11,13.3284 11.6716,14 12.5,14C 13.3284,14 14,13.3284 14,12.5C 14,11.6716 13.3284,11 12.5,11 Z M 12,5C 10.8954,5 10,5.89543 10,7C 10,8.10457 10.8954,9 12,9C 13.1046,9 14,8.10457 14,7C 14,5.89543 13.1046,5 12,5 Z M 5.93275,8.4909C 5.38047,9.44748 5.70822,10.6707 6.6648,11.2229C 7.62139,11.7752 8.84457,11.4475 9.39686,10.4909C 9.94914,9.53431 9.62139,8.31113 8.66481,7.75885C 7.70822,7.20656 6.48504,7.53431 5.93275,8.4909 Z ' })
                )
            );
        }
    }]);

    return MdiBowling;
}(React.Component);

exports.default = MdiBowling;
module.exports = exports['default'];