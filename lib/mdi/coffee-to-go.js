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

var MdiCoffeeToGo = function (_React$Component) {
    _inherits(MdiCoffeeToGo, _React$Component);

    function MdiCoffeeToGo() {
        _classCallCheck(this, MdiCoffeeToGo);

        return _possibleConstructorReturn(this, (MdiCoffeeToGo.__proto__ || Object.getPrototypeOf(MdiCoffeeToGo)).apply(this, arguments));
    }

    _createClass(MdiCoffeeToGo, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 3.00001,19.0002L 3.00001,17.0002L 17.0104,17.0001L 15.2553,15.2449L 16.6695,13.8307L 20.8388,18.0001L 16.6695,22.1695L 15.2553,20.7553L 17.0104,19.0001L 3.00001,19.0002 Z M 17.0001,8L 17.0001,5L 15.0001,5L 15.0001,8L 17.0001,8 Z M 17.0001,3C 18.1051,3 19.0001,3.895 19.0001,5L 19.0001,8C 19.0001,9.105 18.1051,10 17.0001,10L 15.0001,10L 15.0002,10.9999C 15.0002,13.2089 13.2092,14.9999 11.0002,14.9999L 7.00012,15C 4.79112,15 3.00012,13.209 3.00012,11L 3,3.00012L 17.0001,3 Z ' })
                )
            );
        }
    }]);

    return MdiCoffeeToGo;
}(React.Component);

exports.default = MdiCoffeeToGo;
module.exports = exports['default'];