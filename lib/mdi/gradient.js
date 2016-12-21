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

var MdiGradient = function (_React$Component) {
    _inherits(MdiGradient, _React$Component);

    function MdiGradient() {
        _classCallCheck(this, MdiGradient);

        return _possibleConstructorReturn(this, (MdiGradient.__proto__ || Object.getPrototypeOf(MdiGradient)).apply(this, arguments));
    }

    _createClass(MdiGradient, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 11,9L 13,9L 13,11L 11,11L 11,9 Z M 9,11L 11,11L 11,13L 9,13L 9,11 Z M 13,11L 15,11L 15,13L 13,13L 13,11 Z M 15,9L 17,9L 17,11L 15,11L 15,9 Z M 7,9L 9,9L 9,11L 7,11L 7,9 Z M 19,3L 5,3C 3.9,3 3,3.9 3,5L 3,19C 3,20.1 3.9,21 5,21L 19,21C 20.1,21 21,20.1 21,19L 21,5C 21,3.9 20.1,3 19,3 Z M 9,18L 7,18L 7,16L 9,16L 9,18 Z M 13,18L 11,18L 11,16L 13,16L 13,18 Z M 17,18L 15,18L 15,16L 17,16L 17,18 Z M 19,11L 17,11L 17,13L 19,13L 19,15L 17,15L 17,13L 15,13L 15,15L 13,15L 13,13L 11,13L 11,15L 9,15L 9,13L 7,13L 7,15L 5,15L 5,13L 7,13L 7,11L 5,11L 5,5L 19,5L 19,11 Z ' })
                )
            );
        }
    }]);

    return MdiGradient;
}(React.Component);

exports.default = MdiGradient;
module.exports = exports['default'];