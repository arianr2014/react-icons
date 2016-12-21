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

var MdiRestore = function (_React$Component) {
    _inherits(MdiRestore, _React$Component);

    function MdiRestore() {
        _classCallCheck(this, MdiRestore);

        return _possibleConstructorReturn(this, (MdiRestore.__proto__ || Object.getPrototypeOf(MdiRestore)).apply(this, arguments));
    }

    _createClass(MdiRestore, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 13,3C 8.03,3 4,7.03 4,12L 1,12L 4.89,15.89L 4.96,16.03L 9,12L 6,12C 6,8.13 9.13,5 13,5C 16.87,5 20,8.13 20,12C 20,15.87 16.87,19 13,19C 11.07,19 9.32,18.21 8.06,16.94L 6.64,18.36C 8.27,19.99 10.51,21 13,21C 17.97,21 22,16.97 22,12C 22,7.03 17.97,3 13,3 Z M 12,8L 12,13L 16.28,15.54L 17,14.33L 13.5,12.25L 13.5,8L 12,8 Z ' })
                )
            );
        }
    }]);

    return MdiRestore;
}(React.Component);

exports.default = MdiRestore;
module.exports = exports['default'];