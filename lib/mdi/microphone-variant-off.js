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

var MdiMicrophoneVariantOff = function (_React$Component) {
    _inherits(MdiMicrophoneVariantOff, _React$Component);

    function MdiMicrophoneVariantOff() {
        _classCallCheck(this, MdiMicrophoneVariantOff);

        return _possibleConstructorReturn(this, (MdiMicrophoneVariantOff.__proto__ || Object.getPrototypeOf(MdiMicrophoneVariantOff)).apply(this, arguments));
    }

    _createClass(MdiMicrophoneVariantOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 2,5.26848L 3.27711,4L 20,20.7229L 18.7315,22L 15.9917,19.2601C 15.8576,21.348 14.1217,23 12,23C 9.79086,23 8,21.2091 8,19L 8,18L 7,18L 6.16077,9.8176C 5.81524,9.46942 5.5333,9.05804 5.33385,8.60232L 2,5.26848 Z M 9,3C 11.2091,3 13,4.79086 13,7L 8.82269,7L 6.0843,4.26161C 6.81394,3.48502 7.85033,3 9,3 Z M 11.8392,9.8176L 11.8207,9.99803L 9.82269,8L 12.874,8C 12.6944,8.69771 12.3313,9.32175 11.8392,9.8176 Z M 11,18L 10,18L 10,19C 9.99999,20.1046 10.8954,21 12,21C 13.1046,21 14,20.1046 14,19L 14,17.2685L 11.3471,14.6156L 11,18 Z M 18,10L 20,10L 19,11L 20,12L 18,12C 16.8954,12 16,12.8954 16,14L 16,14.1773L 14.3,12.4773C 14.899,11.0234 16.33,10 18,10 Z M 8,12C 8,12.5523 8.44771,13 9,13C 9.20753,13 9.40029,12.9368 9.56008,12.8286L 8.17144,11.4399C 8.06321,11.5997 8,11.7925 8,12 Z ' })
                )
            );
        }
    }]);

    return MdiMicrophoneVariantOff;
}(React.Component);

exports.default = MdiMicrophoneVariantOff;
module.exports = exports['default'];