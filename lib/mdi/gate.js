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

var MdiGate = function (_React$Component) {
    _inherits(MdiGate, _React$Component);

    function MdiGate() {
        _classCallCheck(this, MdiGate);

        return _possibleConstructorReturn(this, (MdiGate.__proto__ || Object.getPrototypeOf(MdiGate)).apply(this, arguments));
    }

    _createClass(MdiGate, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'miter', d: 'M 9,5L 9,10L 7,10L 7,6L 5,6L 5,10L 3,10L 3,8L 1,8L 1,20L 3,20L 3,18L 5,18L 5,20L 7,20L 7,18L 9,18L 9,20L 11,20L 11,18L 13,18L 13,20L 15,20L 15,18L 17,18L 17,20L 19,20L 19,18L 21,18L 21,20L 23,20L 23,8L 21,8L 21,10L 19,10L 19,6L 17,6L 17,10L 15,10L 15,5L 13,5L 13,10L 11,10L 11,5L 9,5 Z M 3,12L 5,12L 5,16L 3,16L 3,12 Z M 7,12L 9,12L 9,16L 7,16L 7,12 Z M 11,12L 13,12L 13,16L 11,16L 11,12 Z M 15,12L 17,12L 17,16L 15,16L 15,12 Z M 19,12L 21,12L 21,16L 19,16L 19,12 Z ' })
                )
            );
        }
    }]);

    return MdiGate;
}(React.Component);

exports.default = MdiGate;
module.exports = exports['default'];