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

var MdiSurroundSound = function (_React$Component) {
    _inherits(MdiSurroundSound, _React$Component);

    function MdiSurroundSound() {
        _classCallCheck(this, MdiSurroundSound);

        return _possibleConstructorReturn(this, (MdiSurroundSound.__proto__ || Object.getPrototypeOf(MdiSurroundSound)).apply(this, arguments));
    }

    _createClass(MdiSurroundSound, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 20,4L 4,4C 2.9,4 2,4.9 2,6L 2,18C 2,19.1 2.9,20 4,20L 20,20C 21.1,20 22,19.1 22,18L 22,6C 22,4.9 21.1,4 20,4 Z M 7.76,16.24L 6.35,17.65C 4.78,16.1 4,14.05 4,12C 4,9.95 4.78,7.9 6.34,6.34L 7.75,7.75C 6.59,8.93 6,10.46 6,12C 6,13.54 6.59,15.07 7.76,16.24 Z M 12,16C 9.79,16 8,14.21 8,12C 8,9.79 9.79,8 12,8C 14.21,8 16,9.79 16,12C 16,14.21 14.21,16 12,16 Z M 17.66,17.66L 16.25,16.25C 17.41,15.07 18,13.54 18,12C 18,10.46 17.41,8.93 16.24,7.76L 17.65,6.35C 19.22,7.9 20,9.95 20,12C 20,14.05 19.22,16.1 17.66,17.66 Z M 12,10C 10.9,10 10,10.9 10,12C 10,13.1 10.9,14 12,14C 13.1,14 14,13.1 14,12C 14,10.9 13.1,10 12,10 Z ' })
                )
            );
        }
    }]);

    return MdiSurroundSound;
}(React.Component);

exports.default = MdiSurroundSound;
module.exports = exports['default'];