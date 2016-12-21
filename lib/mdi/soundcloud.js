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

var MdiSoundcloud = function (_React$Component) {
    _inherits(MdiSoundcloud, _React$Component);

    function MdiSoundcloud() {
        _classCallCheck(this, MdiSoundcloud);

        return _possibleConstructorReturn(this, (MdiSoundcloud.__proto__ || Object.getPrototypeOf(MdiSoundcloud)).apply(this, arguments));
    }

    _createClass(MdiSoundcloud, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 11.5588,8.87467L 11.5588,17L 20.3226,17L 20.3226,16.9902C 22.1679,16.8729 23,15.7265 23,14.3307C 23,12.8542 21.8848,11.6613 20.3837,11.6613C 19.9984,11.6613 19.6814,11.7396 19.3463,11.8838C 19.106,9.542 17.1189,7.71111 14.6723,7.71111C 13.4757,7.71111 12.3877,8.15109 11.5588,8.87467 Z M 10.6832,9.89154C 10.382,9.7131 10.0579,9.57378 9.7137,9.47844L 9.7137,17L 11.0973,17L 11.0973,9.33667C 10.9459,9.51022 10.8073,9.69845 10.6832,9.89154 Z M 8.3294,9.35132L 8.3294,17L 9.25243,17L 9.25243,9.38066C 9.06323,9.35132 8.86841,9.33912 8.67041,9.33912C 8.5548,9.33912 8.44112,9.34398 8.3294,9.35132 Z M 6.48484,9.99666L 6.48484,17L 7.40713,17L 7.40713,9.54444C 7.07761,9.65443 6.76789,9.80843 6.48484,9.99666 Z M 4.83239,12.5218C 4.76932,12.4827 4.70675,12.4436 4.63952,12.4093L 4.63952,17L 5.56181,17L 5.56181,10.862C 5.19465,11.3411 4.93872,11.9058 4.83239,12.5218 Z M 2.7947,12.2187L 2.7947,16.9071C 3.01274,16.9682 3.24251,17 3.4794,17L 3.71748,17L 3.71748,12.1356C 3.63778,12.1282 3.55859,12.1233 3.47792,12.1233C 3.24056,12.1233 3.01177,12.1575 2.7947,12.2187 Z M 0.999994,14.5629C 0.999994,15.306 1.33854,15.9709 1.87217,16.4207L 1.87217,12.7051C 1.33854,13.1524 0.999994,13.8198 0.999994,14.5629 Z ' })
                )
            );
        }
    }]);

    return MdiSoundcloud;
}(React.Component);

exports.default = MdiSoundcloud;
module.exports = exports['default'];