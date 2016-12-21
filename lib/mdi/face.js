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

var MdiFace = function (_React$Component) {
    _inherits(MdiFace, _React$Component);

    function MdiFace() {
        _classCallCheck(this, MdiFace);

        return _possibleConstructorReturn(this, (MdiFace.__proto__ || Object.getPrototypeOf(MdiFace)).apply(this, arguments));
    }

    _createClass(MdiFace, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 9,11.75C 8.31,11.75 7.75,12.31 7.75,13C 7.75,13.69 8.31,14.25 9,14.25C 9.69,14.25 10.25,13.69 10.25,13C 10.25,12.31 9.69,11.75 9,11.75 Z M 15,11.75C 14.31,11.75 13.75,12.31 13.75,13C 13.75,13.69 14.31,14.25 15,14.25C 15.69,14.25 16.25,13.69 16.25,13C 16.25,12.31 15.69,11.75 15,11.75 Z M 12,2C 6.48,2 2,6.48 2,12C 2,17.52 6.48,22 12,22C 17.52,22 22,17.52 22,12C 22,6.48 17.52,2 12,2 Z M 12,20C 7.59,20 4,16.41 4,12C 4,11.71 4.02,11.42 4.05,11.14C 6.41,10.09 8.28,8.16 9.26,5.77C 11.07,8.33 14.05,10 17.42,10C 18.2,10 18.95,9.91 19.67,9.74C 19.88,10.45 20,11.21 20,12C 20,16.41 16.41,20 12,20 Z ' })
                )
            );
        }
    }]);

    return MdiFace;
}(React.Component);

exports.default = MdiFace;
module.exports = exports['default'];