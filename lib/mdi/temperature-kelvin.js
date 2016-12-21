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

var MdiTemperatureKelvin = function (_React$Component) {
    _inherits(MdiTemperatureKelvin, _React$Component);

    function MdiTemperatureKelvin() {
        _classCallCheck(this, MdiTemperatureKelvin);

        return _possibleConstructorReturn(this, (MdiTemperatureKelvin.__proto__ || Object.getPrototypeOf(MdiTemperatureKelvin)).apply(this, arguments));
    }

    _createClass(MdiTemperatureKelvin, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 5,3C 6.65685,3 8,4.34315 8,6C 8,7.65685 6.65686,9 5,9C 3.34315,9 2,7.65685 2,6C 2,4.34315 3.34315,3 5,3 Z M 5,5C 4.44771,5 4,5.44772 4,6C 4,6.55229 4.44771,7 5,7C 5.55228,7 6,6.55229 6,6C 6,5.44772 5.55228,5 5,5 Z M 10,5L 13,5L 13,11L 18,5L 22.0126,5L 16.8819,10.7762L 22,20L 18.3827,20L 14.756,13.1696L 13,15.1466L 13,20L 10,20L 10,5 Z ' })
                )
            );
        }
    }]);

    return MdiTemperatureKelvin;
}(React.Component);

exports.default = MdiTemperatureKelvin;
module.exports = exports['default'];