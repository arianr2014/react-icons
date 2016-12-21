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

var MdiPlaystation = function (_React$Component) {
    _inherits(MdiPlaystation, _React$Component);

    function MdiPlaystation() {
        _classCallCheck(this, MdiPlaystation);

        return _possibleConstructorReturn(this, (MdiPlaystation.__proto__ || Object.getPrototypeOf(MdiPlaystation)).apply(this, arguments));
    }

    _createClass(MdiPlaystation, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 9.49194,4.27096C 10.878,4.52778 12.9005,5.13704 13.9864,5.50293C 16.7508,6.45204 17.6874,7.6314 17.6874,10.291C 17.6874,12.886 16.0859,13.8675 14.053,12.886L 14.053,8.05463C 14.053,7.4885 13.949,6.96609 13.4148,6.81828C 13.0097,6.68753 12.7554,7.06556 12.7554,7.6314L 12.7554,19.729L 9.49194,18.6941L 9.49194,4.27096 Z M 13.3744,17.62L 18.6233,15.7495C 19.2172,15.537 19.309,15.236 18.8266,15.0776C 18.3423,14.9185 17.4657,14.9653 16.8711,15.1785L 13.3744,16.4091L 13.3744,14.4484L 13.5758,14.381C 13.5758,14.381 14.5869,14.0235 16.0078,13.8664C 17.4283,13.7099 19.1683,13.8869 20.5333,14.4044C 22.0734,14.8922 22.247,15.6081 21.8565,16.1022C 21.464,16.5954 20.5059,16.948 20.5059,16.948L 13.3744,19.5087L 13.3744,17.62 Z M 3.50615,17.423C 1.92554,16.9778 1.66176,16.0515 2.38091,15.5178C 3.04852,15.0243 4.17957,14.6517 4.17957,14.6517L 8.85886,12.989L 8.85886,14.8834L 5.49285,16.0891C 4.89643,16.3041 4.80609,16.6046 5.28849,16.7632C 5.77273,16.9217 6.64755,16.8768 7.2436,16.6622L 8.85886,16.0773L 8.85886,17.7735L 8.53603,17.8274C 6.92003,18.0918 5.20075,17.9824 3.50615,17.423 Z ' })
                )
            );
        }
    }]);

    return MdiPlaystation;
}(React.Component);

exports.default = MdiPlaystation;
module.exports = exports['default'];