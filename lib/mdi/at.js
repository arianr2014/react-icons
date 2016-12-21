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

var MdiAt = function (_React$Component) {
    _inherits(MdiAt, _React$Component);

    function MdiAt() {
        _classCallCheck(this, MdiAt);

        return _possibleConstructorReturn(this, (MdiAt.__proto__ || Object.getPrototypeOf(MdiAt)).apply(this, arguments));
    }

    _createClass(MdiAt, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 17.4226,15C 17.7928,14.0907 18,13.0736 18,12C 18,8.13401 15.3137,5.00001 12,5.00001C 8.68629,5.00001 6,8.13401 6,12C 6,15.866 8.68629,19 12,19C 13.5367,19 15,19 16,18.2176L 16,20.546C 15,21 13.4571,21 12,21C 7.58172,21 4,16.9706 4,12C 4,7.02944 7.58172,3 12,3C 16.4183,3 20,7.02944 20,12C 20,13.8501 19.5038,15.5699 18.6528,17L 14,17L 14,15.4993C 13.3647,16.4254 12.4793,17 11.5,17C 9.567,17 8,14.7614 8,12C 8,9.23858 9.567,7 11.5,7C 12.4793,7 13.3647,7.57462 14,8.50073L 14,8L 16,8L 16,15L 17.4226,15 Z M 12,9C 10.8954,9 10,10.3431 10,12C 10,13.6569 10.8954,15 12,15C 13.1046,15 14,13.6569 14,12C 14,10.3431 13.1046,9 12,9 Z ' })
                )
            );
        }
    }]);

    return MdiAt;
}(React.Component);

exports.default = MdiAt;
module.exports = exports['default'];