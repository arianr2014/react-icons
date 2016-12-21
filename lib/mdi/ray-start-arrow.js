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

var MdiRayStartArrow = function (_React$Component) {
    _inherits(MdiRayStartArrow, _React$Component);

    function MdiRayStartArrow() {
        _classCallCheck(this, MdiRayStartArrow);

        return _possibleConstructorReturn(this, (MdiRayStartArrow.__proto__ || Object.getPrototypeOf(MdiRayStartArrow)).apply(this, arguments));
    }

    _createClass(MdiRayStartArrow, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 23,12L 19,16L 19,13L 6.82929,13C 6.41746,14.1652 5.30622,15 4,15C 2.34315,15 1,13.6569 1,12C 1,10.3431 2.34315,9 4,9C 5.30622,9 6.41746,9.83481 6.82929,11L 19,11L 19,8L 23,12 Z ' })
                )
            );
        }
    }]);

    return MdiRayStartArrow;
}(React.Component);

exports.default = MdiRayStartArrow;
module.exports = exports['default'];