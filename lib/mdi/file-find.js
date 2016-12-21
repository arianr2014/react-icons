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

var MdiFileFind = function (_React$Component) {
    _inherits(MdiFileFind, _React$Component);

    function MdiFileFind() {
        _classCallCheck(this, MdiFileFind);

        return _possibleConstructorReturn(this, (MdiFileFind.__proto__ || Object.getPrototypeOf(MdiFileFind)).apply(this, arguments));
    }

    _createClass(MdiFileFind, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 9,13C 9,14.66 10.34,16 12,16C 13.66,16 15,14.66 15,13C 15,11.34 13.66,10 12,10C 10.34,10 9,11.34 9,13 Z M 20,19.59L 20,8L 14,2L 6,2C 4.9,2 4.01,2.9 4.01,4L 4,20C 4,21.1 4.89,22 5.99,22L 18,22C 18.45,22 18.85,21.85 19.19,21.6L 14.76,17.17C 13.96,17.69 13.02,18 12,18C 9.24,18 7,15.76 7,13C 7,10.24 9.24,8 12,8C 14.76,8 17,10.24 17,13C 17,14.02 16.69,14.96 16.17,15.75L 20,19.59 Z ' })
                )
            );
        }
    }]);

    return MdiFileFind;
}(React.Component);

exports.default = MdiFileFind;
module.exports = exports['default'];