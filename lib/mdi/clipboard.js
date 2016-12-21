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

var MdiClipboard = function (_React$Component) {
    _inherits(MdiClipboard, _React$Component);

    function MdiClipboard() {
        _classCallCheck(this, MdiClipboard);

        return _possibleConstructorReturn(this, (MdiClipboard.__proto__ || Object.getPrototypeOf(MdiClipboard)).apply(this, arguments));
    }

    _createClass(MdiClipboard, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 9.00013,3.99997C 9.00013,2.34313 10.3432,0.999947 12.0001,0.999947C 13.6569,0.999947 15.0001,2.34313 15.0001,3.99997L 18.9998,4.00009C 20.1044,4.00009 20.9998,4.89551 20.9998,6.00006L 20.9998,19C 20.9998,20.1046 20.1044,21 18.9998,21L 5,21C 3.89543,21 3,20.1046 3,19L 3,6.00006C 3,4.89551 3.89543,4.00009 5,4.00009L 9.00013,3.99997 Z M 12.0001,2.99993C 11.4477,2.99993 11.0001,3.44762 11.0001,3.99995C 11.0001,4.55222 11.4478,4.99994 12.0001,4.99994C 12.5523,4.99994 13.0001,4.55222 13.0001,3.99995C 13.0001,3.44762 12.5524,2.99993 12.0001,2.99993 Z ' })
                )
            );
        }
    }]);

    return MdiClipboard;
}(React.Component);

exports.default = MdiClipboard;
module.exports = exports['default'];