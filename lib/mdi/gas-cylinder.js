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

var MdiGasCylinder = function (_React$Component) {
    _inherits(MdiGasCylinder, _React$Component);

    function MdiGasCylinder() {
        _classCallCheck(this, MdiGasCylinder);

        return _possibleConstructorReturn(this, (MdiGasCylinder.__proto__ || Object.getPrototypeOf(MdiGasCylinder)).apply(this, arguments));
    }

    _createClass(MdiGasCylinder, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 16,9.00001L 16,14L 16,20C 16,21.1046 15.1046,22 14,22L 9.99999,22C 8.89542,22 7.99999,21.1046 7.99999,20L 7.99999,14L 7.99999,9.00001C 7.99999,7.13617 9.27477,5.57007 11,5.12603L 11,4L 9,4L 9,2L 15,2L 15,4L 13,4L 13,5.12603C 14.7252,5.57008 16,7.13617 16,9.00001 Z ' })
                )
            );
        }
    }]);

    return MdiGasCylinder;
}(React.Component);

exports.default = MdiGasCylinder;
module.exports = exports['default'];