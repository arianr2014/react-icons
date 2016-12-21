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

var MdiSnowman = function (_React$Component) {
    _inherits(MdiSnowman, _React$Component);

    function MdiSnowman() {
        _classCallCheck(this, MdiSnowman);

        return _possibleConstructorReturn(this, (MdiSnowman.__proto__ || Object.getPrototypeOf(MdiSnowman)).apply(this, arguments));
    }

    _createClass(MdiSnowman, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 17,17C 17,19.7614 14.7614,22 12,22C 9.23858,22 7,19.7614 7,17C 7,15.5067 7.65459,14.1664 8.69248,13.2502C 8.25548,12.6091 8,11.8344 8,11C 8,10.863 8.00688,10.7277 8.02032,10.5943L 5.03711,8.87193L 4.82972,8.71308L 2.28578,9.39473L 2.02696,8.42881L 4.24172,7.83536L 2.25602,6.68892L 2.75602,5.82289L 4.74172,6.96934L 4.14828,4.75457L 5.11421,4.49575L 5.79585,7.0397L 6.03711,7.13988L 8.73055,8.69494C 9.11223,8.15456 9.62451,7.71299 10.2214,7.41618C 9.48059,6.86992 9,5.99108 9,5C 9,3.34315 10.3431,2 12,2C 13.6569,2 15,3.34315 15,5C 15,5.99109 14.5194,6.86992 13.7786,7.41618C 14.3755,7.71299 14.8878,8.15456 15.2695,8.69494L 17.9629,7.13988L 18.2041,7.0397L 18.8858,4.49575L 19.8517,4.75457L 19.2583,6.96934L 21.244,5.82289L 21.744,6.68892L 19.7583,7.83536L 21.973,8.42881L 21.7142,9.39473L 19.1703,8.71308L 18.9629,8.87193L 15.9797,10.5943L 16,11C 16,11.8344 15.7445,12.6091 15.3075,13.2502C 16.3454,14.1664 17,15.5067 17,17 Z ' })
                )
            );
        }
    }]);

    return MdiSnowman;
}(React.Component);

exports.default = MdiSnowman;
module.exports = exports['default'];