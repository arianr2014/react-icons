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

var MdiKeyboardBackspace = function (_React$Component) {
    _inherits(MdiKeyboardBackspace, _React$Component);

    function MdiKeyboardBackspace() {
        _classCallCheck(this, MdiKeyboardBackspace);

        return _possibleConstructorReturn(this, (MdiKeyboardBackspace.__proto__ || Object.getPrototypeOf(MdiKeyboardBackspace)).apply(this, arguments));
    }

    _createClass(MdiKeyboardBackspace, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 20.9994,10.9981L 6.82741,10.9981L 10.4134,7.41207L 8.9994,5.99807L 2.9994,11.9981L 8.9994,17.9981L 10.4134,16.5841L 6.82741,12.9981L 20.9994,12.9981L 20.9994,10.9981 Z ' })
                )
            );
        }
    }]);

    return MdiKeyboardBackspace;
}(React.Component);

exports.default = MdiKeyboardBackspace;
module.exports = exports['default'];