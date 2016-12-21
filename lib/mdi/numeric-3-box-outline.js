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

var MdiNumeric3BoxOutline = function (_React$Component) {
    _inherits(MdiNumeric3BoxOutline, _React$Component);

    function MdiNumeric3BoxOutline() {
        _classCallCheck(this, MdiNumeric3BoxOutline);

        return _possibleConstructorReturn(this, (MdiNumeric3BoxOutline.__proto__ || Object.getPrototypeOf(MdiNumeric3BoxOutline)).apply(this, arguments));
    }

    _createClass(MdiNumeric3BoxOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 15,15L 15,13.5C 15,12.67 14.3301,12 13.5,12C 14.3301,12 15,11.33 15,10.5L 15,9C 15,7.89 14.1,7 13,7L 9,7L 9,9L 13,9L 13,11L 11,11L 11,13L 13,13L 13,15L 9,15L 9,17L 13,17C 14.1,17 15,16.11 15,15 Z M 19,19L 5,19L 5,5.00001L 19,5.00001M 19,3.00001L 5,3.00001C 3.90001,3.00001 3,3.90001 3,5.00001L 3,19C 3,20.1 3.90001,21 5,21L 19,21C 20.1,21 21,20.1 21,19L 21,5.00001C 21,3.90001 20.1,3.00001 19,3.00001 Z ' })
                )
            );
        }
    }]);

    return MdiNumeric3BoxOutline;
}(React.Component);

exports.default = MdiNumeric3BoxOutline;
module.exports = exports['default'];