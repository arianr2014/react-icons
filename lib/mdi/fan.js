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

var MdiFan = function (_React$Component) {
    _inherits(MdiFan, _React$Component);

    function MdiFan() {
        _classCallCheck(this, MdiFan);

        return _possibleConstructorReturn(this, (MdiFan.__proto__ || Object.getPrototypeOf(MdiFan)).apply(this, arguments));
    }

    _createClass(MdiFan, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 12,11C 11.4477,11 11,11.4477 11,12C 11,12.5523 11.4477,13 12,13C 12.5523,13 13,12.5523 13,12C 13,11.4477 12.5523,11 12,11 Z M 12.5,1.99999C 17,2 17.1114,5.56925 14.75,6.74998C 13.7605,7.24475 13.3217,8.2903 13.131,9.2205C 13.6123,9.41653 14.0312,9.73393 14.3497,10.1347C 18.0479,8.13324 22.026,8.91646 22.026,12.4844C 22.026,16.9844 18.4568,17.0958 17.276,14.7344C 16.778,13.7384 15.722,13.3004 14.7873,13.1116C 14.5947,13.594 14.2806,14.0147 13.8827,14.3358C 15.8688,18.0276 15.0815,21.9896 11.5208,21.9896C 7.02082,21.9896 6.90938,18.4203 9.27083,17.2396C 10.2542,16.7479 10.6936,15.7123 10.8863,14.7865C 10.398,14.5911 9.97301,14.2712 9.65071,13.8659C 5.95832,15.8535 1.99478,15.0666 1.99479,11.5052C 1.99479,7.00522 5.56404,6.89378 6.74477,9.25522C 7.24005,10.2458 8.28723,10.6844 9.21814,10.8748C 9.41416,10.3907 9.73291,9.96932 10.1358,9.64937C 8.15268,5.95884 8.94075,1.99999 12.5,1.99999 Z ' })
                )
            );
        }
    }]);

    return MdiFan;
}(React.Component);

exports.default = MdiFan;
module.exports = exports['default'];