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

var MdiWalletMembership = function (_React$Component) {
    _inherits(MdiWalletMembership, _React$Component);

    function MdiWalletMembership() {
        _classCallCheck(this, MdiWalletMembership);

        return _possibleConstructorReturn(this, (MdiWalletMembership.__proto__ || Object.getPrototypeOf(MdiWalletMembership)).apply(this, arguments));
    }

    _createClass(MdiWalletMembership, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 20,10L 4,10L 4,4L 20,4M 20,15L 4,15L 4,13L 20,13M 20,2L 4,2C 2.89,2 2,2.89 2,4L 2,15C 2,16.11 2.89,17 4,17L 8,17L 8,22L 12,20L 16,22L 16,17L 20,17C 21.11,17 22,16.11 22,15L 22,4C 22,2.89 21.11,2 20,2 Z ' })
                )
            );
        }
    }]);

    return MdiWalletMembership;
}(React.Component);

exports.default = MdiWalletMembership;
module.exports = exports['default'];