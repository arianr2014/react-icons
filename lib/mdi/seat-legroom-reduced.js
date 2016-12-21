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

var MdiSeatLegroomReduced = function (_React$Component) {
    _inherits(MdiSeatLegroomReduced, _React$Component);

    function MdiSeatLegroomReduced() {
        _classCallCheck(this, MdiSeatLegroomReduced);

        return _possibleConstructorReturn(this, (MdiSeatLegroomReduced.__proto__ || Object.getPrototypeOf(MdiSeatLegroomReduced)).apply(this, arguments));
    }

    _createClass(MdiSeatLegroomReduced, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 19.9712,19.1987C 20.1513,20.1613 19.4188,21.0012 18.5012,21.0012L 13.9987,21.0012L 13.9987,17.9975L 15,13.9987L 8.99875,13.9987C 7.34875,13.9987 6.00125,12.6512 6.00125,11.0012L 6.00125,2.9978L 12.0025,2.9978L 12.0025,8.99875L 17.0025,8.99875C 18.1,8.99875 18.9988,9.9025 18.9988,11.0012L 17.0025,17.9975L 18.4425,17.9975C 19.17,17.9975 19.8287,18.4913 19.9712,19.1987 Z M 5,12.0025L 5,2.9978L 2.9975,2.9978L 2.9975,12.0025C 2.9975,14.7613 5.23875,17.0025 7.9975,17.0025L 12.0025,17.0025L 12.0025,15L 7.9975,15C 6.3375,15 5,13.6625 5,12.0025 Z ' })
                )
            );
        }
    }]);

    return MdiSeatLegroomReduced;
}(React.Component);

exports.default = MdiSeatLegroomReduced;
module.exports = exports['default'];