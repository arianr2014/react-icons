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

var MdiSeatLegroomExtra = function (_React$Component) {
    _inherits(MdiSeatLegroomExtra, _React$Component);

    function MdiSeatLegroomExtra() {
        _classCallCheck(this, MdiSeatLegroomExtra);

        return _possibleConstructorReturn(this, (MdiSeatLegroomExtra.__proto__ || Object.getPrototypeOf(MdiSeatLegroomExtra)).apply(this, arguments));
    }

    _createClass(MdiSeatLegroomExtra, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 3.99875,12.0025L 3.99875,2.9978L 2.0025,2.9978L 2.0025,12.0025C 2.0025,14.7613 4.23875,17.0025 7.0025,17.0025L 12.9975,17.0025L 12.9975,15L 7.0025,15C 5.34125,15 3.99875,13.6625 3.99875,12.0025 Z M 22.8325,17.2413C 22.4513,16.5187 21.5375,16.27 20.8013,16.6112L 19.7125,17.1087L 16.2987,10.1312C 15.9625,9.44875 15.2688,9.00875 14.5113,9.00875L 11.0013,8.99875L 11.0013,2.9978L 5,2.9978L 5,11.0012C 5,12.6613 6.3375,13.9987 7.9975,13.9987L 15,13.9987L 18.4087,21.0012L 22.1287,19.3012C 22.9,18.94 23.2325,17.9975 22.8325,17.2413 Z ' })
                )
            );
        }
    }]);

    return MdiSeatLegroomExtra;
}(React.Component);

exports.default = MdiSeatLegroomExtra;
module.exports = exports['default'];