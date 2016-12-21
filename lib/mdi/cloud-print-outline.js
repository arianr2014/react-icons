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

var MdiCloudPrintOutline = function (_React$Component) {
    _inherits(MdiCloudPrintOutline, _React$Component);

    function MdiCloudPrintOutline() {
        _classCallCheck(this, MdiCloudPrintOutline);

        return _possibleConstructorReturn(this, (MdiCloudPrintOutline.__proto__ || Object.getPrototypeOf(MdiCloudPrintOutline)).apply(this, arguments));
    }

    _createClass(MdiCloudPrintOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 19,16C 20.657,16 22,14.657 22,13C 22,11.343 20.657,10 19,10L 17.5,10L 17.5,9.50002C 17.5,6.46202 15.037,4.00002 12,4.00002C 9.483,4.00002 7.366,5.69301 6.712,8.00002L 6,8.00002C 3.79101,8.00002 2,9.791 2,12C 2,14.209 3.79101,16 6,16L 6,11L 18,11L 18,16L 19,16 Z M 19.355,8.03604C 21.947,8.22102 24,10.36 24,13C 24,15.762 21.761,18 19,18L 18,18L 18,22L 6,22L 6,18C 2.68599,18 0,15.314 0,12C 0,8.90502 2.34301,6.36002 5.351,6.03604C 6.60299,3.63902 9.108,2.00004 12,2.00004C 15.641,2.00004 18.674,4.595 19.355,8.03604 Z M 8,13L 8,20L 16,20L 16,13L 8,13 Z M 9,18L 15,18L 15,19L 9,19L 9,18 Z M 15,17L 9,17L 9,16L 15,16L 15,17 Z M 9,14L 15,14L 15,15L 9,15L 9,14 Z ' })
                )
            );
        }
    }]);

    return MdiCloudPrintOutline;
}(React.Component);

exports.default = MdiCloudPrintOutline;
module.exports = exports['default'];