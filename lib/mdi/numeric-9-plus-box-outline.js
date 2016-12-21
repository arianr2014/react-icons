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

var MdiNumeric9PlusBoxOutline = function (_React$Component) {
    _inherits(MdiNumeric9PlusBoxOutline, _React$Component);

    function MdiNumeric9PlusBoxOutline() {
        _classCallCheck(this, MdiNumeric9PlusBoxOutline);

        return _possibleConstructorReturn(this, (MdiNumeric9PlusBoxOutline.__proto__ || Object.getPrototypeOf(MdiNumeric9PlusBoxOutline)).apply(this, arguments));
    }

    _createClass(MdiNumeric9PlusBoxOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 19,11L 17,11L 17,9L 15,9L 15,11L 13,11L 13,13L 15,13L 15,15L 17,15L 17,13L 19,13L 19,19L 5.00001,19L 5.00001,4.99999L 19,4.99999M 19,3L 5.00001,3C 3.90001,3 3.00001,3.9 3.00001,5L 3.00001,19C 3.00001,20.1 3.90001,21 5.00001,21L 19,21C 20.1,21 21,20.1 21,19L 21,5C 21,3.9 20.1,3 19,3 Z M 9,11L 9,10L 10,10L 10,11M 12,14L 12,10C 12,8.89 11.1,8 10,8L 9,8C 7.9,8 7.00001,8.89 7.00001,10L 7.00001,11C 7.00001,12.11 7.9,13 9,13L 10,13L 10,14L 7.00001,14L 7.00001,16L 10,16C 11.1,16 12,15.11 12,14 Z ' })
                )
            );
        }
    }]);

    return MdiNumeric9PlusBoxOutline;
}(React.Component);

exports.default = MdiNumeric9PlusBoxOutline;
module.exports = exports['default'];