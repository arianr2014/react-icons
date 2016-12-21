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

var MdiCached = function (_React$Component) {
    _inherits(MdiCached, _React$Component);

    function MdiCached() {
        _classCallCheck(this, MdiCached);

        return _possibleConstructorReturn(this, (MdiCached.__proto__ || Object.getPrototypeOf(MdiCached)).apply(this, arguments));
    }

    _createClass(MdiCached, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 18.9988,7.9975L 15,12.0025L 17.9975,12.0025C 17.9975,15.3075 15.3075,17.9975 12.0025,17.9975C 10.9912,17.9975 10.0288,17.7488 9.19875,17.3L 7.73875,18.76C 8.97,19.5412 10.43,20 12.0025,20C 16.4213,20 20,16.4212 20,12.0025L 22.9975,12.0025M 6.00125,12.0025C 6.00125,8.69125 8.69125,6.00125 12.0025,6.00125C 13.0075,6.00125 13.97,6.25 14.8,6.69875L 16.26,5.23875C 15.0288,4.4575 13.5687,3.99875 12.0025,3.99875C 7.57875,3.99875 3.99875,7.5775 3.99875,12.0025L 1.00125,12.0025L 5,16.0012L 8.99875,12.0025' })
                )
            );
        }
    }]);

    return MdiCached;
}(React.Component);

exports.default = MdiCached;
module.exports = exports['default'];