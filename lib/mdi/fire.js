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

var MdiFire = function (_React$Component) {
    _inherits(MdiFire, _React$Component);

    function MdiFire() {
        _classCallCheck(this, MdiFire);

        return _possibleConstructorReturn(this, (MdiFire.__proto__ || Object.getPrototypeOf(MdiFire)).apply(this, arguments));
    }

    _createClass(MdiFire, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 11.7116,18.9981C 9.9306,18.9981 8.48758,17.5931 8.48758,15.8601C 8.48758,14.2371 9.53259,13.0971 11.3006,12.7391C 13.0676,12.3821 14.8996,11.5332 15.9166,10.1631C 16.3076,11.4541 16.5116,12.8111 16.5116,14.1981C 16.5116,16.8447 14.3586,18.9981 11.7116,18.9981 Z M 13.4996,0.667067C 13.4996,0.667067 14.2396,3.31507 14.2396,5.46507C 14.2396,7.52707 12.8876,9.19807 10.8266,9.19807C 8.76358,9.19807 7.19958,7.52707 7.19958,5.46507L 7.22659,5.10407C 5.21259,7.51174 3.9996,10.6131 3.9996,13.9981C 3.9996,18.4161 7.5816,21.9981 11.9996,21.9981C 16.4176,21.9981 19.9996,18.4161 19.9996,13.9981C 19.9996,8.60407 17.4066,3.79507 13.4996,0.667067 Z ' })
                )
            );
        }
    }]);

    return MdiFire;
}(React.Component);

exports.default = MdiFire;
module.exports = exports['default'];