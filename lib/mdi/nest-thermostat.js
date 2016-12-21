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

var MdiNestThermostat = function (_React$Component) {
    _inherits(MdiNestThermostat, _React$Component);

    function MdiNestThermostat() {
        _classCallCheck(this, MdiNestThermostat);

        return _possibleConstructorReturn(this, (MdiNestThermostat.__proto__ || Object.getPrototypeOf(MdiNestThermostat)).apply(this, arguments));
    }

    _createClass(MdiNestThermostat, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 16.9491,16.9478L 14.8281,14.8268C 15.5521,14.1028 15.9991,13.1028 15.9991,11.9978C 15.9991,11.2578 15.7851,10.5728 15.4331,9.97777L 17.6001,7.81176C 18.4751,8.97976 18.9991,10.4258 18.9991,11.9978C 18.9991,13.9308 18.2161,15.6808 16.9491,16.9478 Z M 11.9991,4.99776C 13.5721,4.99776 15.0171,5.52276 16.1861,6.39776L 14.0191,8.56377C 13.4251,8.21276 12.7401,7.99776 11.9991,7.99776C 9.7901,7.99776 7.99908,9.78878 7.99908,11.9978C 7.99908,13.1028 8.44708,14.1028 9.17108,14.8268L 7.05008,16.9478C 5.78308,15.6808 4.99908,13.9308 4.99908,11.9978C 4.99908,8.13176 8.13309,4.99776 11.9991,4.99776 Z M 11.9991,1.99776C 6.4761,1.99776 1.99908,6.47478 1.99908,11.9978C 1.99908,17.5208 6.4761,21.9978 11.9991,21.9978C 17.5221,21.9978 21.9991,17.5208 21.9991,11.9978C 21.9991,6.47478 17.5221,1.99776 11.9991,1.99776 Z ' })
                )
            );
        }
    }]);

    return MdiNestThermostat;
}(React.Component);

exports.default = MdiNestThermostat;
module.exports = exports['default'];