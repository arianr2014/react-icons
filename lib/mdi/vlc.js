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

var MdiVlc = function (_React$Component) {
    _inherits(MdiVlc, _React$Component);

    function MdiVlc() {
        _classCallCheck(this, MdiVlc);

        return _possibleConstructorReturn(this, (MdiVlc.__proto__ || Object.getPrototypeOf(MdiVlc)).apply(this, arguments));
    }

    _createClass(MdiVlc, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 12,1C 11.584,0.993399 11.1866,1.2276 11,1.75L 9.875,4.875C 10.3619,5.3986 11.2754,5.5 12,5.5C 12.7246,5.5 13.6381,5.3986 14.125,4.875L 13,1.75C 12.8228,1.2538 12.416,1.0066 12,1 Z M 8.4375,8.9062L 7,12.9062C 8.06819,14.2718 10.2562,14.5 12,14.5C 13.7438,14.5 15.9318,14.2718 17,12.9062L 15.5625,8.9062C 14.7624,9.832 13.2386,10 12,10C 10.7614,10 9.23758,9.832 8.4375,8.9062 Z M 5.4375,15C 4.61514,15 3.7578,15.647 3.53125,16.4375L 2.0625,21.5625C 1.83595,22.353 2.30264,23 3.125,23L 20.875,23C 21.6974,23 22.164,22.353 21.9375,21.5625L 20.4688,16.4375C 20.2422,15.647 19.3849,15 18.5625,15L 17.75,15L 18.0938,15.9687C 18.2074,16.287 18.2914,16.6946 18.0938,16.9687C 16.844,18.7027 14.1374,19 12,19C 9.86254,19 7.15603,18.7027 5.90625,16.9687C 5.70864,16.6946 5.79259,16.287 5.90625,15.9687L 6.25,15L 5.4375,15 Z ' })
                )
            );
        }
    }]);

    return MdiVlc;
}(React.Component);

exports.default = MdiVlc;
module.exports = exports['default'];