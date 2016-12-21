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

var MdiEvStation = function (_React$Component) {
    _inherits(MdiEvStation, _React$Component);

    function MdiEvStation() {
        _classCallCheck(this, MdiEvStation);

        return _possibleConstructorReturn(this, (MdiEvStation.__proto__ || Object.getPrototypeOf(MdiEvStation)).apply(this, arguments));
    }

    _createClass(MdiEvStation, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 19.77,7.23L 19.78,7.22L 16.06,3.5L 15,4.56L 17.11,6.67C 16.17,7.03 15.5,7.93 15.5,9C 15.5,10.38 16.62,11.5 18,11.5C 18.36,11.5 18.69,11.42 19,11.29L 19,18.5C 19,19.05 18.55,19.5 18,19.5C 17.45,19.5 17,19.05 17,18.5L 17,14C 17,12.9 16.1,12 15,12L 14,12L 14,5C 14,3.9 13.1,3 12,3L 6,3C 4.9,3 4,3.9 4,5L 4,21L 14,21L 14,13.5L 15.5,13.5L 15.5,18.5C 15.5,19.88 16.62,21 18,21C 19.38,21 20.5,19.88 20.5,18.5L 20.5,9C 20.5,8.31 20.22,7.68 19.77,7.23 Z M 18,10C 17.45,10 17,9.55 17,9C 17,8.45 17.45,8 18,8C 18.55,8 19,8.45 19,9C 19,9.55 18.55,10 18,10 Z M 8,18L 8,13.5L 6,13.5L 10,6L 10,11L 12,11L 8,18 Z ' })
                )
            );
        }
    }]);

    return MdiEvStation;
}(React.Component);

exports.default = MdiEvStation;
module.exports = exports['default'];