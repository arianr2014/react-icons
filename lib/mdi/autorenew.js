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

var MdiAutorenew = function (_React$Component) {
    _inherits(MdiAutorenew, _React$Component);

    function MdiAutorenew() {
        _classCallCheck(this, MdiAutorenew);

        return _possibleConstructorReturn(this, (MdiAutorenew.__proto__ || Object.getPrototypeOf(MdiAutorenew)).apply(this, arguments));
    }

    _createClass(MdiAutorenew, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 12.0025,6.00125L 12.0025,8.99875L 16.0012,5L 12.0025,1.00073L 12.0025,3.99875C 7.57875,3.99875 3.99875,7.5775 3.99875,12.0025C 3.99875,13.5687 4.4575,15.0287 5.23875,16.26L 6.69875,14.8C 6.25,13.97 6.00125,13.0075 6.00125,12.0025C 6.00125,8.69125 8.69125,6.00125 12.0025,6.00125 Z M 18.76,7.73875L 17.3,9.19875C 17.7388,10.0388 17.9975,10.9913 17.9975,12.0025C 17.9975,15.3075 15.3075,17.9975 12.0025,17.9975L 12.0025,15L 7.9975,18.9988L 12.0025,22.9975L 12.0025,20C 16.4213,20 20,16.4212 20,12.0025C 20,10.43 19.5413,8.97 18.76,7.73875 Z ' })
                )
            );
        }
    }]);

    return MdiAutorenew;
}(React.Component);

exports.default = MdiAutorenew;
module.exports = exports['default'];