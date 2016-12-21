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

var MdiBarrel = function (_React$Component) {
    _inherits(MdiBarrel, _React$Component);

    function MdiBarrel() {
        _classCallCheck(this, MdiBarrel);

        return _possibleConstructorReturn(this, (MdiBarrel.__proto__ || Object.getPrototypeOf(MdiBarrel)).apply(this, arguments));
    }

    _createClass(MdiBarrel, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 18,19L 19,19L 19,21L 5,21L 5,19L 6,19L 6,13L 5,13L 5,11L 6,11L 6,5L 5,5L 5,3L 19,3L 19,5L 18,5L 18,11L 19,11L 19,13L 18,13L 18,19 Z M 9,13C 9,14.6569 10.3431,16 12,16C 13.6569,16 15,14.6569 15,13C 15,11 12,7.62501 12,7.62501C 12,7.62501 9,11 9,13 Z ' })
                )
            );
        }
    }]);

    return MdiBarrel;
}(React.Component);

exports.default = MdiBarrel;
module.exports = exports['default'];