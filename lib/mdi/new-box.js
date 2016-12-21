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

var MdiNewBox = function (_React$Component) {
    _inherits(MdiNewBox, _React$Component);

    function MdiNewBox() {
        _classCallCheck(this, MdiNewBox);

        return _possibleConstructorReturn(this, (MdiNewBox.__proto__ || Object.getPrototypeOf(MdiNewBox)).apply(this, arguments));
    }

    _createClass(MdiNewBox, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 20,4C 21.11,4 22,4.89 22,6L 22,18C 22,19.11 21.11,20 20,20L 4,20C 2.89,20 2,19.11 2,18L 2.01,6C 2.01,4.89 2.89,4 4,4L 20,4 Z M 8.5,15L 8.5,9L 7.25,9L 7.25,12.5L 4.75,9L 3.5,9L 3.5,15L 4.75,15L 4.75,11.5L 7.3,15L 8.5,15 Z M 13.5,10.26L 13.5,9L 9.5,9L 9.5,15L 13.5,15L 13.5,13.75L 11,13.75L 11,12.64L 13.5,12.64L 13.5,11.38L 11,11.38L 11,10.26L 13.5,10.26 Z M 20.5,14L 20.5,9L 19.25,9L 19.25,13.5L 18.13,13.5L 18.13,9.99L 16.88,9.99L 16.88,13.51L 15.75,13.51L 15.75,9L 14.5,9L 14.5,14C 14.5,14.55 14.95,15 15.5,15L 19.5,15C 20.05,15 20.5,14.55 20.5,14 Z ' })
                )
            );
        }
    }]);

    return MdiNewBox;
}(React.Component);

exports.default = MdiNewBox;
module.exports = exports['default'];