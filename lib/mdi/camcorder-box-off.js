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

var MdiCamcorderBoxOff = function (_React$Component) {
    _inherits(MdiCamcorderBoxOff, _React$Component);

    function MdiCamcorderBoxOff() {
        _classCallCheck(this, MdiCamcorderBoxOff);

        return _possibleConstructorReturn(this, (MdiCamcorderBoxOff.__proto__ || Object.getPrototypeOf(MdiCamcorderBoxOff)).apply(this, arguments));
    }

    _createClass(MdiCamcorderBoxOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 6.00001,7.99999L 6.727,7.99999L 14,15.273L 14,16L 6.00001,16M 2.27302,0.999987L 1.00001,2.273L 3.003,4.27599C 2.40602,4.622 2.00001,5.26 2.00001,5.99999L 2.00001,18C 2.00001,19.104 2.89601,20 4.00001,20L 18.727,20L 20.727,22L 22,20.727M 20,3.99999L 7.818,3.99999L 11.818,7.99999L 14,7.99999L 14,10.182L 14.566,10.747L 18,7.99999L 18,14.182L 21.983,18.165C 21.988,18.11 22,18.056 22,18L 22,5.99999C 22,4.89604 21.104,3.99999 20,3.99999 Z ' })
                )
            );
        }
    }]);

    return MdiCamcorderBoxOff;
}(React.Component);

exports.default = MdiCamcorderBoxOff;
module.exports = exports['default'];