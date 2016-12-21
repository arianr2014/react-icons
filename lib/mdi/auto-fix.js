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

var MdiAutoFix = function (_React$Component) {
    _inherits(MdiAutoFix, _React$Component);

    function MdiAutoFix() {
        _classCallCheck(this, MdiAutoFix);

        return _possibleConstructorReturn(this, (MdiAutoFix.__proto__ || Object.getPrototypeOf(MdiAutoFix)).apply(this, arguments));
    }

    _createClass(MdiAutoFix, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 7.49936,5.59817L 4.99936,6.99815L 6.39936,4.49815L 4.99936,1.99815L 7.49936,3.39815L 9.99936,1.99815L 8.59936,4.49815L 9.99936,6.99815L 7.49936,5.59817 Z M 19.4994,15.398L 21.9994,13.998L 20.5994,16.498L 21.9994,18.998L 19.4994,17.598L 16.9994,18.998L 18.3994,16.498L 16.9994,13.998L 19.4994,15.398 Z M 21.9994,1.99807L 20.5994,4.49807L 21.9994,6.99807L 19.4994,5.59809L 16.9994,6.99807L 18.3994,4.49807L 16.9994,1.99807L 19.4994,3.39805L 21.9994,1.99807 Z M 13.3424,12.7764L 15.7774,10.3414L 13.6564,8.21936L 11.2214,10.6554L 13.3424,12.7764 Z M 14.3704,7.29136L 16.7064,9.62738C 17.0974,10.0174 17.0974,10.6504 16.7064,11.0414L 5.04236,22.7054C 4.65136,23.0954 4.01836,23.0954 3.62836,22.7054L 1.29236,20.3694C 0.901362,19.9784 0.901362,19.3454 1.29236,18.9554L 12.9564,7.29136C 13.3474,6.90037 13.9804,6.90037 14.3704,7.29136 Z ' })
                )
            );
        }
    }]);

    return MdiAutoFix;
}(React.Component);

exports.default = MdiAutoFix;
module.exports = exports['default'];