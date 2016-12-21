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

var MdiOpenInNew = function (_React$Component) {
    _inherits(MdiOpenInNew, _React$Component);

    function MdiOpenInNew() {
        _classCallCheck(this, MdiOpenInNew);

        return _possibleConstructorReturn(this, (MdiOpenInNew.__proto__ || Object.getPrototypeOf(MdiOpenInNew)).apply(this, arguments));
    }

    _createClass(MdiOpenInNew, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 14,3L 14,5L 17.59,5L 7.76,14.83L 9.17,16.24L 19,6.41L 19,10L 21,10L 21,3M 19,19L 5,19L 5,5L 12,5L 12,3L 5,3C 3.89,3 3,3.9 3,5L 3,19C 3,20.1 3.89,21 5,21L 19,21C 20.1,21 21,20.1 21,19L 21,12L 19,12L 19,19 Z ' })
                )
            );
        }
    }]);

    return MdiOpenInNew;
}(React.Component);

exports.default = MdiOpenInNew;
module.exports = exports['default'];