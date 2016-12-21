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

var MdiHumanGreeting = function (_React$Component) {
    _inherits(MdiHumanGreeting, _React$Component);

    function MdiHumanGreeting() {
        _classCallCheck(this, MdiHumanGreeting);

        return _possibleConstructorReturn(this, (MdiHumanGreeting.__proto__ || Object.getPrototypeOf(MdiHumanGreeting)).apply(this, arguments));
    }

    _createClass(MdiHumanGreeting, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 1.49875,3.99875L 1.49875,5.4975C 1.49875,9.64875 3.70625,13.2762 7.0025,15.2975L 7.0025,20L 22.0025,20L 22.0025,17.9975C 22.0025,15.3412 16.67,13.9987 13.9987,13.9987C 13.9987,13.9987 13.8325,13.9987 13.75,13.9987C 8.99875,13.9987 5,10 5,5.4975L 5,3.99875M 13.9987,3.99875C 11.7925,3.99875 10,5.79125 10,7.9975C 10,10.21 11.7925,12.0025 13.9987,12.0025C 16.2113,12.0025 17.9975,10.21 17.9975,7.9975C 17.9975,5.79125 16.2113,3.99875 13.9987,3.99875 Z ' })
                )
            );
        }
    }]);

    return MdiHumanGreeting;
}(React.Component);

exports.default = MdiHumanGreeting;
module.exports = exports['default'];