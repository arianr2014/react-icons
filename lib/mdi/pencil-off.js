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

var MdiPencilOff = function (_React$Component) {
    _inherits(MdiPencilOff, _React$Component);

    function MdiPencilOff() {
        _classCallCheck(this, MdiPencilOff);

        return _possibleConstructorReturn(this, (MdiPencilOff.__proto__ || Object.getPrototypeOf(MdiPencilOff)).apply(this, arguments));
    }

    _createClass(MdiPencilOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 18.6563,2C 18.4004,2 18.1642,2.0857 17.9688,2.2812L 16.125,4.125L 19.875,7.875L 21.7188,6.0312C 22.1098,5.6402 22.1098,5.0149 21.7188,4.625L 19.375,2.2812C 19.18,2.0857 18.9121,2 18.6563,2 Z M 3.28125,4L 2,5.2812L 8.5,11.75L 4,16.25L 4,20L 7.75,20L 12.25,15.5L 18.7188,22L 20,20.7187L 13.5,14.25L 9.75,10.5L 3.28125,4 Z M 15.0625,5.1875L 11.0313,9.2187L 14.7813,12.9687L 18.8125,8.9375L 15.0625,5.1875 Z ' })
                )
            );
        }
    }]);

    return MdiPencilOff;
}(React.Component);

exports.default = MdiPencilOff;
module.exports = exports['default'];