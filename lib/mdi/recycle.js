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

var MdiRecycle = function (_React$Component) {
    _inherits(MdiRecycle, _React$Component);

    function MdiRecycle() {
        _classCallCheck(this, MdiRecycle);

        return _possibleConstructorReturn(this, (MdiRecycle.__proto__ || Object.getPrototypeOf(MdiRecycle)).apply(this, arguments));
    }

    _createClass(MdiRecycle, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 21.8241,15.4244L 19.3241,19.7545C 18.8331,20.605 17.9179,21.0578 17,21L 15,21L 15,23L 12.5,18.5L 15,14L 15,16L 17.8195,16L 15.5983,12.1528L 19.9285,9.65282L 21.7291,12.7716C 22.2487,13.5395 22.3189,14.5675 21.8241,15.4244 Z M 9.20974,3.06352L 14.2097,3.06352C 15.1918,3.06352 16.0416,3.62975 16.4504,4.45354L 17.4504,6.18559L 19.1825,5.18559L 16.5353,9.60066L 11.3883,9.68559L 13.1203,8.68559L 11.7105,6.24381L 9.48938,10.091L 5.15925,7.591L 6.95986,4.47224C 7.3651,3.63833 8.22029,3.06352 9.20974,3.06352 Z M 5.05385,19.7559L 2.55385,15.4258C 2.06283,14.5753 2.1283,13.5563 2.63729,12.7903L 3.63729,11.0582L 1.90524,10.0582L 7.05237,10.1432L 9.69947,14.5582L 7.96742,13.5582L 6.55766,16L 11,16L 11,21L 7.39877,21C 6.47397,21.066 5.54857,20.6128 5.05385,19.7559 Z ' })
                )
            );
        }
    }]);

    return MdiRecycle;
}(React.Component);

exports.default = MdiRecycle;
module.exports = exports['default'];