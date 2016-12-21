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

var MdiKeyboardReturn = function (_React$Component) {
    _inherits(MdiKeyboardReturn, _React$Component);

    function MdiKeyboardReturn() {
        _classCallCheck(this, MdiKeyboardReturn);

        return _possibleConstructorReturn(this, (MdiKeyboardReturn.__proto__ || Object.getPrototypeOf(MdiKeyboardReturn)).apply(this, arguments));
    }

    _createClass(MdiKeyboardReturn, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 18.9994,6.99807L 18.9994,10.9981L 5.8274,10.9981L 9.4134,7.41207L 7.9994,5.99807L 1.9994,11.9981L 7.9994,17.9981L 9.4134,16.5841L 5.8274,12.9981L 20.9994,12.9981L 20.9994,6.99807L 18.9994,6.99807 Z ' })
                )
            );
        }
    }]);

    return MdiKeyboardReturn;
}(React.Component);

exports.default = MdiKeyboardReturn;
module.exports = exports['default'];