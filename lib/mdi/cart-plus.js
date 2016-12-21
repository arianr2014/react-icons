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

var MdiCartPlus = function (_React$Component) {
    _inherits(MdiCartPlus, _React$Component);

    function MdiCartPlus() {
        _classCallCheck(this, MdiCartPlus);

        return _possibleConstructorReturn(this, (MdiCartPlus.__proto__ || Object.getPrototypeOf(MdiCartPlus)).apply(this, arguments));
    }

    _createClass(MdiCartPlus, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 11.0013,8.99875L 12.9975,8.99875L 12.9975,6.00125L 16.0012,6.00125L 16.0012,3.99875L 12.9975,3.99875L 12.9975,1.00073L 11.0013,1.00073L 11.0013,3.99875L 7.9975,3.99875L 7.9975,6.00125L 11.0013,6.00125M 7.0025,17.9975C 5.89875,17.9975 5.01,18.9012 5.01,20C 5.01,21.0988 5.89875,22.0025 7.0025,22.0025C 8.1,22.0025 8.99875,21.0988 8.99875,20C 8.99875,18.9012 8.1,17.9975 7.0025,17.9975 Z M 17.0025,17.9975C 15.8988,17.9975 15.01,18.9012 15.01,20C 15.01,21.0988 15.8988,22.0025 17.0025,22.0025C 18.1,22.0025 18.9988,21.0988 18.9988,20C 18.9988,18.9012 18.1,17.9975 17.0025,17.9975 Z M 7.1675,14.7512L 7.2025,14.6287L 8.1,12.9975L 15.5513,12.9975C 16.2987,12.9975 16.9575,12.5875 17.3,11.9675L 21.1625,4.96125L 19.4188,3.99875L 19.4088,3.99875L 18.31,6.00125L 15.5513,11.0012L 8.53,11.0012L 8.39875,10.7325L 6.1625,6.00125L 5.21,3.99875L 4.2675,2.0025L 1.00125,2.0025L 1.00125,3.99875L 2.9975,3.99875L 6.60125,11.5912L 5.24875,14.0375C 5.0875,14.3212 5,14.6487 5,15C 5,16.0988 5.89875,17.0025 7.0025,17.0025L 18.9988,17.0025L 18.9988,15L 7.4225,15C 7.29,15 7.1675,14.8875 7.1675,14.7512 Z ' })
                )
            );
        }
    }]);

    return MdiCartPlus;
}(React.Component);

exports.default = MdiCartPlus;
module.exports = exports['default'];