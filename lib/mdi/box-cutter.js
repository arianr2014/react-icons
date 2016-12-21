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

var MdiBoxCutter = function (_React$Component) {
    _inherits(MdiBoxCutter, _React$Component);

    function MdiBoxCutter() {
        _classCallCheck(this, MdiBoxCutter);

        return _possibleConstructorReturn(this, (MdiBoxCutter.__proto__ || Object.getPrototypeOf(MdiBoxCutter)).apply(this, arguments));
    }

    _createClass(MdiBoxCutter, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'miter', d: 'M 7.22185,11.9059C 6.89199,12.2358 6.7091,12.6504 6.657,13.0785L 12.1716,15.4415L 20.6569,6.95615C 21.4404,6.17275 21.4404,4.91125 20.6569,4.12775L 19.2427,2.71355C 18.4592,1.93005 17.1977,1.93005 16.4142,2.71355L 7.22185,11.9059 Z M 5,16L 5,21.75L 10.8125,16.5312L 5.8125,14.5312L 5,16 Z M 17.1213,4.83485C 17.5119,4.44435 18.145,4.44435 18.5356,4.83485C 18.9261,5.22535 18.9261,5.85855 18.5356,6.24905C 18.145,6.63965 17.5119,6.63965 17.1213,6.24905C 16.7308,5.85855 16.7308,5.22535 17.1213,4.83485 Z ' })
                )
            );
        }
    }]);

    return MdiBoxCutter;
}(React.Component);

exports.default = MdiBoxCutter;
module.exports = exports['default'];