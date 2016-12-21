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

var MdiNumeric = function (_React$Component) {
    _inherits(MdiNumeric, _React$Component);

    function MdiNumeric() {
        _classCallCheck(this, MdiNumeric);

        return _possibleConstructorReturn(this, (MdiNumeric.__proto__ || Object.getPrototypeOf(MdiNumeric)).apply(this, arguments));
    }

    _createClass(MdiNumeric, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 4,17L 4,9L 2,9L 2,7L 6,7L 6,17L 4,17 Z M 22,15C 22,16.11 21.1,17 20,17L 16,17L 16,15L 20,15L 20,13L 18,13L 18,11L 20,11L 20,9L 16,9L 16,7.00001L 20,7.00001C 21.1,7.00001 22,7.89001 22,9L 22,10.5C 22,11.33 21.3301,12 20.5,12C 21.3301,12 22,12.67 22,13.5L 22,15 Z M 14,15L 14,17L 8,17L 8,13C 8,11.89 8.9,11 10,11L 12,11L 12,9L 8,9L 8,7L 12,7C 13.1,7 14,7.89 14,9L 14,11C 14,12.11 13.1,13 12,13L 10,13L 10,15L 14,15 Z ' })
                )
            );
        }
    }]);

    return MdiNumeric;
}(React.Component);

exports.default = MdiNumeric;
module.exports = exports['default'];