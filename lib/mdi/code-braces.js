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

var MdiCodeBraces = function (_React$Component) {
    _inherits(MdiCodeBraces, _React$Component);

    function MdiCodeBraces() {
        _classCallCheck(this, MdiCodeBraces);

        return _possibleConstructorReturn(this, (MdiCodeBraces.__proto__ || Object.getPrototypeOf(MdiCodeBraces)).apply(this, arguments));
    }

    _createClass(MdiCodeBraces, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 8,3C 6.89543,3 6,3.89539 6,5L 6,9C 6,10.1046 5.10457,11 4,11L 3,11L 3,13L 4,13C 5.10457,13 6,13.8954 6,15L 6,19C 6,20.1046 6.92841,20.7321 8,21L 10,21L 10,19L 8,19L 8,14C 8,12.8954 7.10457,12 6,12C 7.10457,12 8,11.1046 8,10L 8,5L 10,5L 10,3M 16,3C 17.1046,3 18,3.89539 18,5L 18,9C 18,10.1046 18.8954,11 20,11L 21,11L 21,13L 20,13C 18.8954,13 18,13.8954 18,15L 18,19C 18,20.1046 17.0716,20.7321 16,21L 14,21L 14,19L 16,19L 16,14C 16,12.8954 16.8954,12 18,12C 16.8954,12 16,11.1046 16,10L 16,5L 14,5L 14,3L 16,3 Z ' })
                )
            );
        }
    }]);

    return MdiCodeBraces;
}(React.Component);

exports.default = MdiCodeBraces;
module.exports = exports['default'];