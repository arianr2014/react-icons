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

var MdiCursorPointer = function (_React$Component) {
    _inherits(MdiCursorPointer, _React$Component);

    function MdiCursorPointer() {
        _classCallCheck(this, MdiCursorPointer);

        return _possibleConstructorReturn(this, (MdiCursorPointer.__proto__ || Object.getPrototypeOf(MdiCursorPointer)).apply(this, arguments));
    }

    _createClass(MdiCursorPointer, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 10,2.00001C 11.1046,2.00001 12,2.89543 12,4L 12,8.50002C 12,8.50002 14,8.25002 14,9.25002C 14,9.25002 16,9.00002 16,10C 16,10 18,9.75002 18,10.75C 18,10.75 20,10.5 20,11.5L 20,15C 20,16 17,21 17,22L 9,22C 9,22 7,15 4,13C 4,13 3,7 8,12L 8,4C 8,2.89543 8.89543,2.00001 10,2.00001 Z ' })
                )
            );
        }
    }]);

    return MdiCursorPointer;
}(React.Component);

exports.default = MdiCursorPointer;
module.exports = exports['default'];