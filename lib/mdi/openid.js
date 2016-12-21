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

var MdiOpenid = function (_React$Component) {
    _inherits(MdiOpenid, _React$Component);

    function MdiOpenid() {
        _classCallCheck(this, MdiOpenid);

        return _possibleConstructorReturn(this, (MdiOpenid.__proto__ || Object.getPrototypeOf(MdiOpenid)).apply(this, arguments));
    }

    _createClass(MdiOpenid, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 14,2L 11,3.5L 11,19.9375C 7.0189,19.5218 4,17.4612 4,15C 4,12.7499 6.52444,10.8463 10,10.2187L 10,8.1875C 4.85593,8.8846 1,11.6588 1,15C 1,18.5573 5.35565,21.4911 11,21.9375C 11.0316,21.94 11.0621,21.9352 11.0938,21.9375L 14,20.5L 14,2 Z M 15,8.1875L 15,10.2187C 16.1459,10.4257 17.1798,10.7677 18.0625,11.2187L 16.5,12L 23,13.5L 22.5,9L 20.5,10C 18.9989,9.116 17.1151,8.4741 15,8.1875 Z ' })
                )
            );
        }
    }]);

    return MdiOpenid;
}(React.Component);

exports.default = MdiOpenid;
module.exports = exports['default'];