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

var MdiCreditCardScan = function (_React$Component) {
    _inherits(MdiCreditCardScan, _React$Component);

    function MdiCreditCardScan() {
        _classCallCheck(this, MdiCreditCardScan);

        return _possibleConstructorReturn(this, (MdiCreditCardScan.__proto__ || Object.getPrototypeOf(MdiCreditCardScan)).apply(this, arguments));
    }

    _createClass(MdiCreditCardScan, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 2,4L 6,4L 6,2L 2,2C 0.900001,2 1.27157e-006,2.9 1.27157e-006,4L 1.27157e-006,8L 2,8L 2,4 Z M 22,2L 18,2L 18,4L 22,4L 22,8L 24,8L 24,4C 24,2.9 23.1,2 22,2 Z M 2,16L 1.27157e-006,16L 1.27157e-006,20C 1.27157e-006,21.1 0.900001,22 2,22L 6,22L 6,20L 2,20L 2,16 Z M 22,20L 18,20L 18,22L 22,22C 23.1,22 24,21.1 24,20L 24,16L 22,16L 22,20 Z M 4,8L 4,16C 4,17.1 4.9,18 6,18L 18,18C 19.1,18 20,17.1 20,16L 20,8C 20,6.9 19.1,6 18,6L 6,6C 4.9,6 4,6.9 4,8 Z M 6,16L 6,12L 18,12L 18,16L 6,16 Z M 18,8L 18,10L 6,10L 6,8L 18,8 Z ' })
                )
            );
        }
    }]);

    return MdiCreditCardScan;
}(React.Component);

exports.default = MdiCreditCardScan;
module.exports = exports['default'];