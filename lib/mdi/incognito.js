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

var MdiIncognito = function (_React$Component) {
    _inherits(MdiIncognito, _React$Component);

    function MdiIncognito() {
        _classCallCheck(this, MdiIncognito);

        return _possibleConstructorReturn(this, (MdiIncognito.__proto__ || Object.getPrototypeOf(MdiIncognito)).apply(this, arguments));
    }

    _createClass(MdiIncognito, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 12,3C 9.30828,3.003 7.40625,4.2187 7.40625,4.2187L 6,9L 18,9L 16.5938,4.2187C 16.5938,4.2187 14.6917,3.0025 12,3 Z M 12,11C 9.27221,11 5.38781,11.536 5.125,11.5937C 4.09216,11.8713 3.24636,12.1547 2.59375,12.4062C 1.57638,12.754 1,13 1,13L 23,13C 23,13 22.4236,12.754 21.4063,12.4062C 20.7468,12.1521 19.8911,11.8738 18.8438,11.5937C 18.8438,11.5937 14.8244,11 12,11 Z M 7.5,14C 5.567,14 4,15.567 4,17.5C 4,19.433 5.567,21 7.5,21C 9.433,21 11,19.433 11,17.5C 11,17.3427 10.9889,17.1831 10.9688,17.0312C 11.2878,16.961 11.6332,16.9049 12,16.9062C 12.3668,16.9075 12.7122,16.9612 13.0313,17.0312C 13.0111,17.1831 13,17.3427 13,17.5C 13,19.433 14.567,21 16.5,21C 18.433,21 20,19.433 20,17.5C 20,15.567 18.433,14 16.5,14C 15.0261,14 13.7659,14.8978 13.25,16.1875C 12.9313,16.0911 12.5491,16 12,16C 11.4509,16 11.0687,16.0911 10.75,16.1875C 10.2341,14.8978 8.97391,14 7.5,14 Z M 7.5,15C 8.88071,15 10,16.1193 10,17.5C 10,18.8807 8.88071,20 7.5,20C 6.11929,20 5,18.8807 5,17.5C 5,16.1193 6.11929,15 7.5,15 Z M 16.5,15C 17.8807,15 19,16.1193 19,17.5C 19,18.8807 17.8807,20 16.5,20C 15.1193,20 14,18.8807 14,17.5C 14,16.1193 15.1193,15 16.5,15 Z ' })
                )
            );
        }
    }]);

    return MdiIncognito;
}(React.Component);

exports.default = MdiIncognito;
module.exports = exports['default'];