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

var MdiBluetoothAudio = function (_React$Component) {
    _inherits(MdiBluetoothAudio, _React$Component);

    function MdiBluetoothAudio() {
        _classCallCheck(this, MdiBluetoothAudio);

        return _possibleConstructorReturn(this, (MdiBluetoothAudio.__proto__ || Object.getPrototypeOf(MdiBluetoothAudio)).apply(this, arguments));
    }

    _createClass(MdiBluetoothAudio, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 12.8783,16.2911L 10.9993,18.1701L 10.9993,14.4121M 10.9993,5.82607L 12.8783,7.70507L 10.9993,9.58407M 15.7063,7.70507L 9.99931,1.99807L 8.99931,1.99807L 8.99931,9.58407L 4.41331,4.99807L 2.99931,6.41207L 8.58531,11.9981L 2.99931,17.5841L 4.41331,18.9981L 8.99931,14.4121L 8.99931,21.9981L 9.99931,21.9981L 15.7063,16.2911L 11.4133,11.9981M 19.5283,6.71107L 18.2643,7.97507C 18.8903,9.18107 19.2493,10.5461 19.2493,11.9981C 19.2493,13.4501 18.8903,14.8151 18.2643,16.0211L 19.4633,17.2197C 20.4313,15.6801 20.9993,13.8651 20.9993,11.9121C 20.9993,10.0041 20.4553,8.22807 19.5283,6.71107 Z M 14.2413,12.0091L 16.5613,14.3281C 16.8403,13.6041 16.9993,12.8201 16.9993,11.9981C 16.9993,11.1821 16.8423,10.4041 16.5673,9.68406L 14.2413,12.0091 Z ' })
                )
            );
        }
    }]);

    return MdiBluetoothAudio;
}(React.Component);

exports.default = MdiBluetoothAudio;
module.exports = exports['default'];