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

var MdiPower = function (_React$Component) {
    _inherits(MdiPower, _React$Component);

    function MdiPower() {
        _classCallCheck(this, MdiPower);

        return _possibleConstructorReturn(this, (MdiPower.__proto__ || Object.getPrototypeOf(MdiPower)).apply(this, arguments));
    }

    _createClass(MdiPower, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 16.56,5.44L 15.11,6.89C 16.84,7.94 18,9.83 18,12C 18,15.31 15.31,18 12,18C 8.69,18 6,15.31 6,12C 6,9.83 7.16,7.94 8.88,6.88L 7.44,5.44C 5.36,6.88 4,9.28 4,12C 4,16.42 7.58,20 12,20C 16.42,20 20,16.42 20,12C 20,9.28 18.64,6.88 16.56,5.44 Z M 13,3.00001L 11,3.00001L 11,13L 13,13' })
                )
            );
        }
    }]);

    return MdiPower;
}(React.Component);

exports.default = MdiPower;
module.exports = exports['default'];