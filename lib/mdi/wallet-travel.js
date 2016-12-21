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

var MdiWalletTravel = function (_React$Component) {
    _inherits(MdiWalletTravel, _React$Component);

    function MdiWalletTravel() {
        _classCallCheck(this, MdiWalletTravel);

        return _possibleConstructorReturn(this, (MdiWalletTravel.__proto__ || Object.getPrototypeOf(MdiWalletTravel)).apply(this, arguments));
    }

    _createClass(MdiWalletTravel, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 20,14L 4,14L 4,8L 7,8L 7,10L 9,10L 9,8L 15,8L 15,10L 17,10L 17,8L 20,8M 20,19L 4,19L 4,17L 20,17M 9,4L 15,4L 15,6L 9,6M 20,6L 17,6L 17,4C 17,2.89 16.11,2 15,2L 9,2C 7.89,2 7,2.89 7,4L 7,6L 4,6C 2.89,6 2,6.89 2,8L 2,19C 2,20.11 2.89,21 4,21L 20,21C 21.11,21 22,20.11 22,19L 22,8C 22,6.89 21.11,6 20,6 Z ' })
                )
            );
        }
    }]);

    return MdiWalletTravel;
}(React.Component);

exports.default = MdiWalletTravel;
module.exports = exports['default'];