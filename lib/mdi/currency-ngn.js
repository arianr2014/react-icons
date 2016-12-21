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

var MdiCurrencyNgn = function (_React$Component) {
    _inherits(MdiCurrencyNgn, _React$Component);

    function MdiCurrencyNgn() {
        _classCallCheck(this, MdiCurrencyNgn);

        return _possibleConstructorReturn(this, (MdiCurrencyNgn.__proto__ || Object.getPrototypeOf(MdiCurrencyNgn)).apply(this, arguments));
    }

    _createClass(MdiCurrencyNgn, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 4,9L 6,9L 6,3L 8,3L 11.4231,9L 16,9L 16,3L 18,3L 18,9L 20,9L 20,11L 18,11L 18,13L 20,13L 20,15L 18,15L 18,21L 16,21L 12.5652,15L 8,15L 8,21L 6,21L 6,15L 4,15L 4,13L 6,13L 6,11L 4,11L 4,9 Z M 8,9L 9.13031,9L 8,7.02558L 8,9 Z M 8,11L 8,13L 11.4202,13L 10.2753,11L 8,11 Z M 16,17.0223L 16,15L 14.8462,15L 16,17.0223 Z M 12.5642,11L 13.7052,13L 16,13L 16,11L 12.5642,11 Z ' })
                )
            );
        }
    }]);

    return MdiCurrencyNgn;
}(React.Component);

exports.default = MdiCurrencyNgn;
module.exports = exports['default'];