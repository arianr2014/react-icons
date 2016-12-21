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

var MdiJeepney = function (_React$Component) {
    _inherits(MdiJeepney, _React$Component);

    function MdiJeepney() {
        _classCallCheck(this, MdiJeepney);

        return _possibleConstructorReturn(this, (MdiJeepney.__proto__ || Object.getPrototypeOf(MdiJeepney)).apply(this, arguments));
    }

    _createClass(MdiJeepney, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 19,13L 19,7L 20,7L 20,4L 4,4L 4,7L 5,7L 5,13L 2,13C 2,13.9306 2.5,14.7051 3.5,14.9287L 3.5,20C 3.5,20.5508 3.948,21 4.5,21L 5.5,21C 6.052,21 6.5,20.5508 6.5,20L 6.5,19L 17.5,19L 17.5,20C 17.5,20.5508 17.9473,21 18.5,21L 19.5,21C 20.0508,21 20.5,20.5508 20.5,20L 20.5,14.9287C 21.5,14.7046 22,13.9297 22,13L 19,13 Z M 8,14.9995C 7.1704,14.9995 6.5,14.3281 6.5,13.499C 6.5,12.6714 7.1704,11.9995 8,11.9995C 8.8291,11.9995 9.5,12.6709 9.5,13.499C 9.5,14.3281 8.8291,14.9995 8,14.9995 Z M 16,14.9995C 15.1728,14.9995 14.5,14.3281 14.5,13.499C 14.5,12.6714 15.1728,11.9995 16,11.9995C 16.8291,11.9995 17.5,12.6709 17.5,13.499C 17.5,14.3281 16.8281,14.9995 16,14.9995 Z M 17.5,10.4946C 15.9219,10.1806 14.0302,9.9995 12,9.9995C 9.96705,9.9995 8,10.1836 6.5,10.4946L 6.5,7L 17.5,7L 17.5,10.4946 Z ' })
                )
            );
        }
    }]);

    return MdiJeepney;
}(React.Component);

exports.default = MdiJeepney;
module.exports = exports['default'];