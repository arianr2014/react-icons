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

var MdiWechat = function (_React$Component) {
    _inherits(MdiWechat, _React$Component);

    function MdiWechat() {
        _classCallCheck(this, MdiWechat);

        return _possibleConstructorReturn(this, (MdiWechat.__proto__ || Object.getPrototypeOf(MdiWechat)).apply(this, arguments));
    }

    _createClass(MdiWechat, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 9.5,4C 5.35786,4 2,6.6863 2,10C 2,11.8851 3.08191,13.5562 4.78125,14.6562L 4,17L 6.5,15.5C 7.39384,15.8134 8.37077,15.9899 9.40625,16C 9.14821,15.3743 9,14.7014 9,14C 9,10.6863 12.134,8 16,8C 16.1892,8 16.3771,8.0186 16.5625,8.0312C 15.5419,5.6876 12.7774,4 9.5,4 Z M 6.5,6.5C 7.05228,6.5 7.5,6.9477 7.5,7.5C 7.5,8.0523 7.05228,8.5 6.5,8.5C 5.94772,8.5 5.5,8.0523 5.5,7.5C 5.5,6.9477 5.94772,6.5 6.5,6.5 Z M 11.5,6.5C 12.0523,6.5 12.5,6.9477 12.5,7.5C 12.5,8.0523 12.0523,8.5 11.5,8.5C 10.9477,8.5 10.5,8.0523 10.5,7.5C 10.5,6.9477 10.9477,6.5 11.5,6.5 Z M 16,9C 12.6863,9 10,11.2386 10,14C 10,16.7614 12.6863,19 16,19C 16.6662,19 17.3075,18.917 17.9063,18.75L 20,20L 19.375,18.125C 20.9498,17.2238 22,15.7123 22,14C 22,11.2386 19.3137,9 16,9 Z M 14,11.5C 14.5523,11.5 15,11.9477 15,12.5C 15,13.0523 14.5523,13.5 14,13.5C 13.4477,13.5 13,13.0523 13,12.5C 13,11.9477 13.4477,11.5 14,11.5 Z M 18,11.5C 18.5523,11.5 19,11.9477 19,12.5C 19,13.0523 18.5523,13.5 18,13.5C 17.4477,13.5 17,13.0523 17,12.5C 17,11.9477 17.4477,11.5 18,11.5 Z ' })
                )
            );
        }
    }]);

    return MdiWechat;
}(React.Component);

exports.default = MdiWechat;
module.exports = exports['default'];