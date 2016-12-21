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

var MdiMicrophone = function (_React$Component) {
    _inherits(MdiMicrophone, _React$Component);

    function MdiMicrophone() {
        _classCallCheck(this, MdiMicrophone);

        return _possibleConstructorReturn(this, (MdiMicrophone.__proto__ || Object.getPrototypeOf(MdiMicrophone)).apply(this, arguments));
    }

    _createClass(MdiMicrophone, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 11.9999,2.00028C 13.6568,2.00028 14.9999,3.34338 14.9999,5.00024L 14.9999,11.0001C 14.9999,12.657 13.6568,14.0001 11.9999,14.0001C 10.343,14.0001 8.99988,12.657 8.99988,11.0001L 8.99988,5.00024C 8.99988,3.34338 10.343,2.00028 11.9999,2.00028 Z M 19,11C 19,14.5265 16.3923,17.4439 13,17.9291L 13,21L 11,21L 11,17.9291C 7.6077,17.4439 5,14.5265 5,11L 7,11C 7,13.7614 9.23857,16 12,16C 14.7614,16 17,13.7614 17,11L 19,11 Z ' })
                )
            );
        }
    }]);

    return MdiMicrophone;
}(React.Component);

exports.default = MdiMicrophone;
module.exports = exports['default'];