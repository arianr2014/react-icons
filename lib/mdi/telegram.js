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

var MdiTelegram = function (_React$Component) {
    _inherits(MdiTelegram, _React$Component);

    function MdiTelegram() {
        _classCallCheck(this, MdiTelegram);

        return _possibleConstructorReturn(this, (MdiTelegram.__proto__ || Object.getPrototypeOf(MdiTelegram)).apply(this, arguments));
    }

    _createClass(MdiTelegram, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 9.77757,18.6464L 10.0597,14.4208L 17.7449,7.48672C 18.0822,7.18735 17.6712,7.04137 17.2234,7.3129L 7.73819,13.297L 3.64114,12.0183C 2.75635,11.7474 2.75,11.1394 3.83979,10.7023L 19.8058,4.5443C 20.535,4.21322 21.2388,4.71943 20.9604,5.83549L 18.2415,18.648C 18.0516,19.5585 17.5015,19.7763 16.7392,19.3557L 12.5977,16.2959L 10.6063,18.232C 10.3756,18.4575 10.1919,18.6464 9.77757,18.6464 Z ' })
                )
            );
        }
    }]);

    return MdiTelegram;
}(React.Component);

exports.default = MdiTelegram;
module.exports = exports['default'];