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

var MdiWeatherNight = function (_React$Component) {
    _inherits(MdiWeatherNight, _React$Component);

    function MdiWeatherNight() {
        _classCallCheck(this, MdiWeatherNight);

        return _possibleConstructorReturn(this, (MdiWeatherNight.__proto__ || Object.getPrototypeOf(MdiWeatherNight)).apply(this, arguments));
    }

    _createClass(MdiWeatherNight, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 17.7533,4.09017L 15.2205,6.03115L 16.1287,9.09017L 13.5,7.28115L 10.8713,9.09017L 11.7795,6.03115L 9.24675,4.09017L 12.4367,4.00861L 13.5,1L 14.5633,4.00861L 17.7533,4.09017 Z M 21.25,10.998L 19.6124,12.253L 20.1996,14.2308L 18.5,13.0612L 16.8004,14.2308L 17.3876,12.253L 15.75,10.998L 17.8125,10.9453L 18.5,9L 19.1875,10.9453L 21.25,10.998 Z M 18.9708,15.9451C 19.8009,15.8661 20.6935,17.0479 20.1576,17.7991C 19.8393,18.2453 19.48,18.6713 19.0795,19.0717C 15.1743,22.9769 8.84266,22.9769 4.93741,19.0717C 1.03217,15.1664 1.03217,8.83477 4.93741,4.92953C 5.33782,4.52912 5.76373,4.16977 6.20993,3.85147C 6.96118,3.31555 8.14293,4.20819 8.06402,5.0383C 7.79155,7.9047 8.75282,10.8662 10.9478,13.0613C 13.1428,15.2563 16.1044,16.2175 18.9708,15.9451 Z M 17.334,17.9707C 14.495,17.8094 11.7025,16.6443 9.53361,14.4755C 7.36473,12.3066 6.19963,9.51403 6.03833,6.6751C 3.23118,9.81639 3.33561,14.6414 6.35163,17.6574C 9.36764,20.6735 14.1927,20.7779 17.334,17.9707 Z ' })
                )
            );
        }
    }]);

    return MdiWeatherNight;
}(React.Component);

exports.default = MdiWeatherNight;
module.exports = exports['default'];