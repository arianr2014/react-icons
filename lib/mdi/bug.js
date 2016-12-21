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

var MdiBug = function (_React$Component) {
    _inherits(MdiBug, _React$Component);

    function MdiBug() {
        _classCallCheck(this, MdiBug);

        return _possibleConstructorReturn(this, (MdiBug.__proto__ || Object.getPrototypeOf(MdiBug)).apply(this, arguments));
    }

    _createClass(MdiBug, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 14,12L 10,12L 10,10L 14,10M 14,16L 10,16L 10,14L 14,14M 20,8L 17.19,8C 16.74,7.22 16.12,6.55 15.37,6.04L 17,4.41L 15.59,3L 13.42,5.17C 12.96,5.06 12.49,5 12,5C 11.51,5 11.04,5.06 10.59,5.17L 8.41,3L 7,4.41L 8.62,6.04C 7.88,6.55 7.26,7.22 6.81,8L 4,8L 4,10L 6.09,10C 6.04,10.33 6,10.66 6,11L 6,12L 4,12L 4,14L 6,14L 6,15C 6,15.34 6.04,15.67 6.09,16L 4,16L 4,18L 6.81,18C 7.85,19.79 9.78,21 12,21C 14.22,21 16.15,19.79 17.19,18L 20,18L 20,16L 17.91,16C 17.96,15.67 18,15.34 18,15L 18,14L 20,14L 20,12L 18,12L 18,11C 18,10.66 17.96,10.33 17.91,10L 20,10L 20,8 Z ' })
                )
            );
        }
    }]);

    return MdiBug;
}(React.Component);

exports.default = MdiBug;
module.exports = exports['default'];