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

var MdiFax = function (_React$Component) {
    _inherits(MdiFax, _React$Component);

    function MdiFax() {
        _classCallCheck(this, MdiFax);

        return _possibleConstructorReturn(this, (MdiFax.__proto__ || Object.getPrototypeOf(MdiFax)).apply(this, arguments));
    }

    _createClass(MdiFax, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 6,2C 5.44772,2 5,2.4477 5,3L 5,7L 6,7L 6,5L 8,5L 8,4L 6,4L 6,3L 8,3L 8,2L 6,2 Z M 11,2C 10.4477,2 10,2.4477 10,3L 10,7L 11,7L 11,5L 12,5L 12,7L 13,7L 13,3C 13,2.4477 12.5523,2 12,2L 11,2 Z M 14.9785,2L 16.4219,4.5L 14.9785,7L 16.1348,7L 17,5.5L 17.8652,7L 19.0215,7L 17.5781,4.5L 19.0215,2L 17.8652,2L 17,3.5L 16.1348,2L 14.9785,2 Z M 11,3L 12,3L 12,4L 11,4L 11,3 Z M 5,9C 3.34,9 2,10.34 2,12L 2,18L 6,18L 6,22L 18,22L 18,18L 22,18L 22,12C 22,10.34 20.66,9 19,9L 5,9 Z M 19,11C 19.55,11 20,11.45 20,12C 20,12.55 19.55,13 19,13C 18.45,13 18,12.55 18,12C 18,11.45 18.45,11 19,11 Z M 8,15L 16,15L 16,20L 8,20L 8,15 Z ' })
                )
            );
        }
    }]);

    return MdiFax;
}(React.Component);

exports.default = MdiFax;
module.exports = exports['default'];