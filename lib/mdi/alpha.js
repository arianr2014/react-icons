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

var MdiAlpha = function (_React$Component) {
    _inherits(MdiAlpha, _React$Component);

    function MdiAlpha() {
        _classCallCheck(this, MdiAlpha);

        return _possibleConstructorReturn(this, (MdiAlpha.__proto__ || Object.getPrototypeOf(MdiAlpha)).apply(this, arguments));
    }

    _createClass(MdiAlpha, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 18.08,17.7967C 17.6222,17.9322 17.2122,18 16.85,18C 15.6522,18 14.8444,17.1156 14.4267,15.3467L 14.3767,15.3467C 13.3944,17.2578 12.0178,18.2133 10.2467,18.2133C 8.93778,18.2133 7.88944,17.7183 7.10167,16.7283C 6.31389,15.7383 5.92,14.4878 5.92,12.9767C 5.92,11.2522 6.36667,9.845 7.26,8.755C 8.15333,7.665 9.36222,7.12 10.8867,7.12C 11.7111,7.12 12.4456,7.34778 13.09,7.80334C 13.7344,8.25889 14.2233,8.9 14.5567,9.72667L 14.5967,9.72667L 15.3067,7.33334L 17.8667,7.33334L 15.73,12.6467C 15.9656,13.8933 16.215,14.7417 16.4783,15.1917C 16.7417,15.6417 17.0844,15.8667 17.5067,15.8667C 17.7356,15.8667 17.9333,15.8311 18.1,15.76L 18.08,17.7967 Z M 13.8233,12.5633C 13.6056,11.4256 13.2689,10.5539 12.8133,9.94834C 12.3578,9.34278 11.8122,9.04 11.1767,9.04C 10.3567,9.04 9.70222,9.40778 9.21333,10.1433C 8.72444,10.8789 8.48,11.7856 8.48,12.8633C 8.48,13.8367 8.69222,14.6517 9.11667,15.3083C 9.54111,15.965 10.1089,16.2933 10.82,16.2933C 11.42,16.2933 11.9678,16.0111 12.4633,15.4467C 12.9589,14.8822 13.3711,14.0533 13.7,12.96L 13.8233,12.5633 Z ' })
                )
            );
        }
    }]);

    return MdiAlpha;
}(React.Component);

exports.default = MdiAlpha;
module.exports = exports['default'];