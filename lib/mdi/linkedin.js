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

var MdiLinkedin = function (_React$Component) {
    _inherits(MdiLinkedin, _React$Component);

    function MdiLinkedin() {
        _classCallCheck(this, MdiLinkedin);

        return _possibleConstructorReturn(this, (MdiLinkedin.__proto__ || Object.getPrototypeOf(MdiLinkedin)).apply(this, arguments));
    }

    _createClass(MdiLinkedin, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 21,21L 17,21L 17,14.25C 17,13.1914 15.8121,12.3058 14.7535,12.3058C 13.6949,12.3058 13,13.1914 13,14.25L 13,21L 9,21L 9,9L 13,9L 13,11C 13.6623,9.92857 15.3564,9.23727 16.525,9.23727C 18.9965,9.23727 21,11.2786 21,13.75L 21,21 Z M 6.99999,21L 2.99999,21L 2.99999,9L 6.99999,9L 6.99999,21 Z M 5,3C 6.10457,3 7,3.89543 7,5C 7,6.10457 6.10457,7 5,7C 3.89543,7 3,6.10457 3,5C 3,3.89543 3.89543,3 5,3 Z ' })
                )
            );
        }
    }]);

    return MdiLinkedin;
}(React.Component);

exports.default = MdiLinkedin;
module.exports = exports['default'];