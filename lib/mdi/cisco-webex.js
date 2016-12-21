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

var MdiCiscoWebex = function (_React$Component) {
    _inherits(MdiCiscoWebex, _React$Component);

    function MdiCiscoWebex() {
        _classCallCheck(this, MdiCiscoWebex);

        return _possibleConstructorReturn(this, (MdiCiscoWebex.__proto__ || Object.getPrototypeOf(MdiCiscoWebex)).apply(this, arguments));
    }

    _createClass(MdiCiscoWebex, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 12,3C 16.9706,3 21,7.02944 21,12C 21,16.9706 16.9706,21 12,21C 7.02944,21 3,16.9706 3,12C 3,7.02944 7.02944,3 12,3 Z M 5.93997,8.50042C 4.00698,11.8485 5.1541,16.1296 8.50214,18.0626C 11.8502,19.9956 18.8502,7.87123 15.5021,5.93824C 12.1541,4.00525 7.87296,5.15238 5.93997,8.50042 Z ' })
                )
            );
        }
    }]);

    return MdiCiscoWebex;
}(React.Component);

exports.default = MdiCiscoWebex;
module.exports = exports['default'];