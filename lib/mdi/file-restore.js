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

var MdiFileRestore = function (_React$Component) {
    _inherits(MdiFileRestore, _React$Component);

    function MdiFileRestore() {
        _classCallCheck(this, MdiFileRestore);

        return _possibleConstructorReturn(this, (MdiFileRestore.__proto__ || Object.getPrototypeOf(MdiFileRestore)).apply(this, arguments));
    }

    _createClass(MdiFileRestore, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 14,2L 6,2C 4.9,2 4.01,2.9 4.01,4L 4,20C 4,21.1 4.89,22 5.99,22L 18,22C 19.1,22 20,21.1 20,20L 20,8L 14,2 Z M 12,18C 9.95,18 8.19,16.76 7.42,15L 9.13,15C 9.76,15.9 10.81,16.5 12,16.5C 13.93,16.5 15.5,14.93 15.5,13C 15.5,11.07 13.93,9.5 12,9.5C 10.65,9.5 9.48,10.28 8.9,11.4L 10.5,13L 6.5,13L 6.5,9L 7.8,10.3C 8.69,8.92 10.23,8 12,8C 14.76,8 17,10.24 17,13C 17,15.76 14.76,18 12,18 Z ' })
                )
            );
        }
    }]);

    return MdiFileRestore;
}(React.Component);

exports.default = MdiFileRestore;
module.exports = exports['default'];