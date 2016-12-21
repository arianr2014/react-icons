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

var MdiOpacity = function (_React$Component) {
    _inherits(MdiOpacity, _React$Component);

    function MdiOpacity() {
        _classCallCheck(this, MdiOpacity);

        return _possibleConstructorReturn(this, (MdiOpacity.__proto__ || Object.getPrototypeOf(MdiOpacity)).apply(this, arguments));
    }

    _createClass(MdiOpacity, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'miter', d: 'M 17.6602,8L 12,2.35L 6.34001,8C 4.78,9.56 4,11.64 4,13.64C 4,15.64 4.78,17.75 6.34001,19.31C 7.9,20.87 9.95,21.66 12,21.66C 14.05,21.66 16.1,20.87 17.6602,19.31C 19.22,17.75 20,15.64 20,13.64C 20,11.64 19.22,9.56 17.6602,8 Z M 6,14C 6.01,12 6.62,10.73 7.76,9.6L 12,5.27L 16.2402,9.65C 17.38,10.77 17.9902,12 18,14L 6,14 Z ' })
                )
            );
        }
    }]);

    return MdiOpacity;
}(React.Component);

exports.default = MdiOpacity;
module.exports = exports['default'];