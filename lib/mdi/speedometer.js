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

var MdiSpeedometer = function (_React$Component) {
    _inherits(MdiSpeedometer, _React$Component);

    function MdiSpeedometer() {
        _classCallCheck(this, MdiSpeedometer);

        return _possibleConstructorReturn(this, (MdiSpeedometer.__proto__ || Object.getPrototypeOf(MdiSpeedometer)).apply(this, arguments));
    }

    _createClass(MdiSpeedometer, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'round', d: 'M 12,16C 10.3431,16 9,14.6569 9,13C 9,11.8807 9.61297,10.9046 10.5215,10.389L 20.2083,4.77463L 14.6791,14.3515C 14.1848,15.3294 13.1707,16 12,16 Z M 12,3C 13.8078,3 15.5035,3.47969 16.9668,4.31872L 14.8691,5.52987C 13.9785,5.18759 13.0111,5 12,5.00001C 7.58172,5 4,8.58173 4,13C 4,15.208 4.89454,17.2072 6.34099,18.6547L 6.3462,18.6495C 6.73672,19.04 6.73672,19.6732 6.3462,20.0637C 5.95639,20.4535 5.32484,20.4542 4.93414,20.0659L 4.92893,20.0711C 3.11929,18.2614 2,15.7614 2,13C 2,7.47716 6.47715,3 12,3 Z M 22,13C 22,15.7614 20.8807,18.2614 19.0711,20.0711L 19.0689,20.0689C 18.678,20.4542 18.0487,20.4525 17.6599,20.0637C 17.2694,19.6732 17.2694,19.04 17.6599,18.6495L 17.6621,18.6516C 19.1067,17.2043 20,15.2065 20,13C 20,11.9783 19.8084,11.0013 19.4593,10.1029L 20.6678,8.00976C 21.5152,9.47842 22,11.1826 22,13 Z ' })
                )
            );
        }
    }]);

    return MdiSpeedometer;
}(React.Component);

exports.default = MdiSpeedometer;
module.exports = exports['default'];