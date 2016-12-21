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

var MdiMessageBulleted = function (_React$Component) {
    _inherits(MdiMessageBulleted, _React$Component);

    function MdiMessageBulleted() {
        _classCallCheck(this, MdiMessageBulleted);

        return _possibleConstructorReturn(this, (MdiMessageBulleted.__proto__ || Object.getPrototypeOf(MdiMessageBulleted)).apply(this, arguments));
    }

    _createClass(MdiMessageBulleted, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 20,2L 4,2C 2.9,2 2.01,2.9 2.01,4L 2,22L 6,18L 20,18C 21.1,18 22,17.1 22,16L 22,4C 22,2.9 21.1,2 20,2 Z M 8,14L 6,14L 6,12L 8,12L 8,14 Z M 8,11L 6,11L 6,9L 8,9L 8,11 Z M 8,8L 6,8L 6,6L 8,6L 8,8 Z M 15,14L 10,14L 10,12L 15,12L 15,14 Z M 18,11L 10,11L 10,9L 18,9L 18,11 Z M 18,8L 10,8L 10,6L 18,6L 18,8 Z ' })
                )
            );
        }
    }]);

    return MdiMessageBulleted;
}(React.Component);

exports.default = MdiMessageBulleted;
module.exports = exports['default'];