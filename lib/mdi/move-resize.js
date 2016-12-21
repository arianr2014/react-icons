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

var MdiMoveResize = function (_React$Component) {
    _inherits(MdiMoveResize, _React$Component);

    function MdiMoveResize() {
        _classCallCheck(this, MdiMoveResize);

        return _possibleConstructorReturn(this, (MdiMoveResize.__proto__ || Object.getPrototypeOf(MdiMoveResize)).apply(this, arguments));
    }

    _createClass(MdiMoveResize, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 8.99875,1.00073L 8.99875,2.0025L 10,2.0025L 10,5L 8.99875,5L 8.99875,6.00125L 12.0025,6.00125L 12.0025,5L 11.0013,5L 11.0013,2.0025L 12.0025,2.0025L 12.0025,1.00073M 8.99875,7.0025C 7.89125,7.0025 7.0025,7.89 7.0025,8.99875L 7.0025,21.0012C 7.0025,22.1087 7.89125,22.9975 8.99875,22.9975L 21.0013,22.9975C 22.11,22.9975 22.9975,22.1087 22.9975,21.0012L 22.9975,8.99875C 22.9975,7.89 22.11,7.0025 21.0013,7.0025M 1.00125,8.99875L 1.00125,12.0025L 2.0025,12.0025L 2.0025,11.0012L 5,11.0012L 5,12.0025L 6.00125,12.0025L 6.00125,8.99875L 5,8.99875L 5,10L 2.0025,10L 2.0025,8.99875M 8.99875,8.99875L 21.0013,8.99875L 21.0013,21.0012L 8.99875,21.0012M 13.9987,10L 13.9987,11.0012L 15,11.0012L 15,16.0012L 11.0013,16.0012L 11.0013,15L 10,15L 10,17.9975L 11.0013,17.9975L 11.0013,17.0025L 15,17.0025L 15,18.9988L 13.9987,18.9988L 13.9987,20L 17.0025,20L 17.0025,18.9988L 16.0012,18.9988L 16.0012,17.0025L 18.9988,17.0025L 18.9988,17.9975L 20,17.9975L 20,15L 18.9988,15L 18.9988,16.0012L 16.0012,16.0012L 16.0012,11.0012L 17.0025,11.0012L 17.0025,10' })
                )
            );
        }
    }]);

    return MdiMoveResize;
}(React.Component);

exports.default = MdiMoveResize;
module.exports = exports['default'];