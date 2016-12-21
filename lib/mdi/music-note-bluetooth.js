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

var MdiMusicNoteBluetooth = function (_React$Component) {
    _inherits(MdiMusicNoteBluetooth, _React$Component);

    function MdiMusicNoteBluetooth() {
        _classCallCheck(this, MdiMusicNoteBluetooth);

        return _possibleConstructorReturn(this, (MdiMusicNoteBluetooth.__proto__ || Object.getPrototypeOf(MdiMusicNoteBluetooth)).apply(this, arguments));
    }

    _createClass(MdiMusicNoteBluetooth, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 10,3L 10,12.2637C 9.51861,12.0912 9.01135,12.002 8.5,12C 6.01472,12 4,14.0147 4,16.5C 4,18.9853 6.01472,21 8.5,21C 10.9853,21 13,18.9853 13,16.5L 13,6L 17,6L 17,3L 10,3 Z M 20,7L 20,10.7891L 17.7109,8.5L 17,9.2109L 19.7891,12L 17,14.7891L 17.7109,15.5L 20,13.2109L 20,17L 20.5,17L 23.3496,14.1504L 21.2109,12L 23.3594,9.8496L 20.5,7L 20,7 Z M 21,8.9102L 21.9395,9.8496L 21,10.7891L 21,8.9102 Z M 21,13.2109L 21.9395,14.1504L 21,15.0898L 21,13.2109 Z ' })
                )
            );
        }
    }]);

    return MdiMusicNoteBluetooth;
}(React.Component);

exports.default = MdiMusicNoteBluetooth;
module.exports = exports['default'];