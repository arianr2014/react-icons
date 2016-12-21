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

var MdiStethoscope = function (_React$Component) {
    _inherits(MdiStethoscope, _React$Component);

    function MdiStethoscope() {
        _classCallCheck(this, MdiStethoscope);

        return _possibleConstructorReturn(this, (MdiStethoscope.__proto__ || Object.getPrototypeOf(MdiStethoscope)).apply(this, arguments));
    }

    _createClass(MdiStethoscope, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 18.996,7.99C 19.56,7.99 19.996,8.426 19.996,8.99C 19.996,9.554 19.56,9.99 18.996,9.99C 18.432,9.99 17.996,9.554 17.996,8.99C 17.996,8.426 18.432,7.99 18.996,7.99 Z M 1.996,1.98L 1.996,10.98C 1.999,13.96 4.186,16.48 7.136,16.91C 7.763,19.92 10.42,22 13.5,22C 17.09,22 20,19.09 20,15.5L 20,11.81C 21.16,11.393 22,10.29 22,9C 22,7.35 20.65,6 19,6C 17.35,6 16,7.35 16,9C 16,10.29 16.843,11.4 18,11.81L 18.004,15.41C 18.004,17.91 16.004,19.91 13.504,19.91C 11.504,19.91 9.82,18.7 9.22,16.9C 12,16.3 14,13.8 14,11L 14,2L 10,2L 10,5L 12,5L 12,11C 12,13.21 10.21,15 8,15C 5.79,15 4,13.2 4,11L 4,5L 6,5L 6,2L 1.996,1.98 Z ' })
                )
            );
        }
    }]);

    return MdiStethoscope;
}(React.Component);

exports.default = MdiStethoscope;
module.exports = exports['default'];