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

var MdiFormatText = function (_React$Component) {
    _inherits(MdiFormatText, _React$Component);

    function MdiFormatText() {
        _classCallCheck(this, MdiFormatText);

        return _possibleConstructorReturn(this, (MdiFormatText.__proto__ || Object.getPrototypeOf(MdiFormatText)).apply(this, arguments));
    }

    _createClass(MdiFormatText, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 18.5,4L 19.6647,8.34667L 18.6988,8.60549C 18.2461,7.737 17.7934,6.8685 17.2603,6.43425C 16.7272,6 16.1136,6 15.5,6L 13,6L 13,16.5C 13,17 13,17.5 13.3333,17.75C 13.6667,18 14.3333,18 15,18L 15,19L 9,19L 9,18C 9.66667,18 10.3333,18 10.6667,17.75C 11,17.5 11,17 11,16.5L 11,6L 8.5,6C 7.88642,6 7.27283,6 6.7397,6.43425C 6.20658,6.8685 5.75391,7.73699 5.30125,8.60549L 4.33532,8.34667L 5.50001,4L 18.5,4 Z ' })
                )
            );
        }
    }]);

    return MdiFormatText;
}(React.Component);

exports.default = MdiFormatText;
module.exports = exports['default'];