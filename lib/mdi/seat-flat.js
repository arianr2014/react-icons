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

var MdiSeatFlat = function (_React$Component) {
    _inherits(MdiSeatFlat, _React$Component);

    function MdiSeatFlat() {
        _classCallCheck(this, MdiSeatFlat);

        return _possibleConstructorReturn(this, (MdiSeatFlat.__proto__ || Object.getPrototypeOf(MdiSeatFlat)).apply(this, arguments));
    }

    _createClass(MdiSeatFlat, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 22.0025,11.0012L 22.0025,12.9975L 8.99875,12.9975L 8.99875,7.0025L 17.9975,7.0025C 20.21,7.0025 22.0025,8.78875 22.0025,11.0012 Z M 2.0025,13.9987L 2.0025,16.0012L 7.9975,16.0012L 7.9975,17.9975L 16.0012,17.9975L 16.0012,16.0012L 22.0025,16.0012L 22.0025,13.9987M 7.13875,12.1C 8.30125,10.9087 8.28125,9.01875 7.1,7.86125C 5.90875,6.69875 4.01875,6.71875 2.86125,7.9C 1.69875,9.09125 1.71875,10.9812 2.9,12.1387C 4.09125,13.3013 5.98125,13.2813 7.13875,12.1 Z ' })
                )
            );
        }
    }]);

    return MdiSeatFlat;
}(React.Component);

exports.default = MdiSeatFlat;
module.exports = exports['default'];