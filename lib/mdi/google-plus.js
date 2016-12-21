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

var MdiGooglePlus = function (_React$Component) {
    _inherits(MdiGooglePlus, _React$Component);

    function MdiGooglePlus() {
        _classCallCheck(this, MdiGooglePlus);

        return _possibleConstructorReturn(this, (MdiGooglePlus.__proto__ || Object.getPrototypeOf(MdiGooglePlus)).apply(this, arguments));
    }

    _createClass(MdiGooglePlus, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 23,11L 21,11L 21,9L 19,9L 19,11L 17,11L 17,13L 19,13L 19,15L 21,15L 21,13L 23,13M 8,11L 8,13.4L 12,13.4C 11.8,14.4 10.8,16.4 8,16.4C 5.6,16.4 3.7,14.4 3.7,12C 3.7,9.6 5.6,7.6 8,7.6C 9.4,7.6 10.3,8.2 10.8,8.7L 12.7,6.9C 11.5,5.7 9.9,5 8,5C 4.1,5 1,8.1 1,12C 1,15.9 4.1,19 8,19C 12,19 14.7,16.2 14.7,12.2C 14.7,11.7 14.7,11.4 14.6,11L 8,11 Z ' })
                )
            );
        }
    }]);

    return MdiGooglePlus;
}(React.Component);

exports.default = MdiGooglePlus;
module.exports = exports['default'];