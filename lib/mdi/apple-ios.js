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

var MdiAppleIos = function (_React$Component) {
    _inherits(MdiAppleIos, _React$Component);

    function MdiAppleIos() {
        _classCallCheck(this, MdiAppleIos);

        return _possibleConstructorReturn(this, (MdiAppleIos.__proto__ || Object.getPrototypeOf(MdiAppleIos)).apply(this, arguments));
    }

    _createClass(MdiAppleIos, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 20,9L 20,7L 16,7C 14.9,7 14,7.9 14,9L 14,11C 14,12.1 14.9,13 16,13L 18,13L 18,15L 14,15L 14,17L 18,17C 19.1,17 20,16.1 20,15L 20,13C 20,11.9 19.1,11 18,11L 16,11L 16,9M 11,15L 9,15L 9,9L 11,9M 11,7L 9,7C 7.9,7 7,7.9 7,9L 7,15C 7,16.1 7.9,17 9,17L 11,17C 12.1,17 13,16.1 13,15L 13,9C 13,7.9 12.1,7 11,7 Z M 4,17L 6,17L 6,11L 4,11M 4,9L 6,9L 6,7L 4,7L 4,9 Z ' })
                )
            );
        }
    }]);

    return MdiAppleIos;
}(React.Component);

exports.default = MdiAppleIos;
module.exports = exports['default'];