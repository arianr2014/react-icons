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

var MdiGondola = function (_React$Component) {
    _inherits(MdiGondola, _React$Component);

    function MdiGondola() {
        _classCallCheck(this, MdiGondola);

        return _possibleConstructorReturn(this, (MdiGondola.__proto__ || Object.getPrototypeOf(MdiGondola)).apply(this, arguments));
    }

    _createClass(MdiGondola, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 18,10L 13,10L 13,7.5935L 22.123,6.073L 21.877,4.5935L 16.4065,5.505C 16.4635,5.3465 16.5,5.178 16.5,4.9995C 16.5,4.171 15.8285,3.4995 15,3.4995C 14.1715,3.4995 13.5,4.171 13.5,4.9995C 13.5,5.3545 13.6285,5.6765 13.835,5.9335L 13,6.07255L 13,5L 11,5L 11,6.4065L 10.4065,6.5055C 10.4635,6.347 10.5,6.1785 10.5,6C 10.5,5.1715 9.8285,4.5 9,4.5C 8.1715,4.5 7.5,5.1715 7.5,6C 7.5,6.355 7.6285,6.677 7.8345,6.934L 1.8765,7.927L 2.123,9.4065L 10.9995,7.927L 10.9995,10L 5.9995,10C 4.89499,10 3.9995,10.8955 3.9995,12L 3.9995,18C 3.9995,19.1045 4.89499,20 5.9995,20L 17.9995,20C 19.104,20 19.9995,19.1045 19.9995,18L 19.9995,12C 20,10.8955 19.1045,10 18,10 Z M 6,12L 8.25,12L 8.25,16L 6,16L 6,12 Z M 9.75,16L 9.75,12L 14.25,12L 14.25,16L 9.75,16 Z M 18,16L 15.75,16L 15.75,12L 18,12L 18,16 Z ' })
                )
            );
        }
    }]);

    return MdiGondola;
}(React.Component);

exports.default = MdiGondola;
module.exports = exports['default'];