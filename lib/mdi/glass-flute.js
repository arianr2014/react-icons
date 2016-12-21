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

var MdiGlassFlute = function (_React$Component) {
    _inherits(MdiGlassFlute, _React$Component);

    function MdiGlassFlute() {
        _classCallCheck(this, MdiGlassFlute);

        return _possibleConstructorReturn(this, (MdiGlassFlute.__proto__ || Object.getPrototypeOf(MdiGlassFlute)).apply(this, arguments));
    }

    _createClass(MdiGlassFlute, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 8,1.99998L 16,1.99998C 15.6667,4.99999 15.3333,7.99999 14.75,9.83332C 14.1667,11.6667 13.3333,12.3333 12.9167,14.0833C 12.5,15.8333 12.5,18.6666 13.0833,20C 13.6667,21.3333 14.8333,21.1667 15.4167,21.25C 16,21.3333 16,21.6667 16,22L 8,22C 8,21.6667 8,21.3333 8.58333,21.25C 9.16667,21.1667 10.3333,21.3333 10.9167,20C 11.5,18.6666 11.5,15.8333 11.0833,14.0833C 10.6667,12.3333 9.83333,11.6667 9.25,9.83332C 8.66667,7.99999 8.33333,4.99999 8,1.99998 Z M 10,4C 10.0738,5.03382 10.1477,6.06765 10.236,7L 13.764,7C 13.8523,6.06765 13.9262,5.03382 14,3.99999L 10,4 Z ' })
                )
            );
        }
    }]);

    return MdiGlassFlute;
}(React.Component);

exports.default = MdiGlassFlute;
module.exports = exports['default'];