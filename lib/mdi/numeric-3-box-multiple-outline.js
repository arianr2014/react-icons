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

var MdiNumeric3BoxMultipleOutline = function (_React$Component) {
    _inherits(MdiNumeric3BoxMultipleOutline, _React$Component);

    function MdiNumeric3BoxMultipleOutline() {
        _classCallCheck(this, MdiNumeric3BoxMultipleOutline);

        return _possibleConstructorReturn(this, (MdiNumeric3BoxMultipleOutline.__proto__ || Object.getPrototypeOf(MdiNumeric3BoxMultipleOutline)).apply(this, arguments));
    }

    _createClass(MdiNumeric3BoxMultipleOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 17,13L 17,11.5C 17,10.67 16.33,10 15.5,10C 16.33,10 17,9.33 17,8.5L 17,7C 17,5.89 16.1,5 15,5L 11,5L 11,7L 15,7L 15,9L 13,9L 13,11L 15,11L 15,13L 11,13L 11,15L 15,15C 16.1,15 17,14.11 17,13 Z M 3,5L 1,5L 1,21C 1,22.1 1.9,23 3,23L 19,23L 19,21L 3,21M 21,17L 7,17L 7,3L 21,3M 21,1L 7,1C 5.9,1 5,1.9 5,3L 5,17C 5,18.1 5.9,19 7,19L 21,19C 22.1,19 23,18.1 23,17L 23,3C 23,1.9 22.1,1 21,1 Z ' })
                )
            );
        }
    }]);

    return MdiNumeric3BoxMultipleOutline;
}(React.Component);

exports.default = MdiNumeric3BoxMultipleOutline;
module.exports = exports['default'];