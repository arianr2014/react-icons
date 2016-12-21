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

var MdiTagMultiple = function (_React$Component) {
    _inherits(MdiTagMultiple, _React$Component);

    function MdiTagMultiple() {
        _classCallCheck(this, MdiTagMultiple);

        return _possibleConstructorReturn(this, (MdiTagMultiple.__proto__ || Object.getPrototypeOf(MdiTagMultiple)).apply(this, arguments));
    }

    _createClass(MdiTagMultiple, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 5.49875,8.99951C 6.32776,8.99951 6.99875,8.32747 6.99875,7.49951C 6.99875,6.67057 6.32776,5.99951 5.49875,5.99951C 4.67076,5.99951 3.99875,6.67057 3.99875,7.49951C 3.99875,8.32747 4.67076,8.99951 5.49875,8.99951 Z M 17.4098,11.5801C 17.7738,11.9421 17.9988,12.4441 17.9988,12.9991C 17.9988,13.5511 17.7758,14.0501 17.4138,14.4131L 12.4138,19.4131C 12.0518,19.7741 11.5518,19.9991 10.9988,19.9991C 10.4478,19.9991 9.94781,19.7751 9.58481,19.4131L 2.58681,12.4151C 2.22382,12.0531 1.99881,11.5521 1.99881,10.9991L 1.99875,5.99959C 1.99875,4.89461 2.89475,3.99959 3.99875,3.99959L 8.99881,3.99911C 9.55181,3.99911 10.0518,4.22209 10.4138,4.58415L 17.4098,11.5801 Z M 13.5363,5.70634L 14.5363,4.70637L 21.411,11.581C 21.775,11.943 22,12.445 22,13C 22,13.552 21.777,14.051 21.415,14.414L 16.0358,19.7932L 15.0358,18.7932L 20.75,13L 13.5363,5.70634 Z ' })
                )
            );
        }
    }]);

    return MdiTagMultiple;
}(React.Component);

exports.default = MdiTagMultiple;
module.exports = exports['default'];