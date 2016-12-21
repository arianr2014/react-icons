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

var MdiFood = function (_React$Component) {
    _inherits(MdiFood, _React$Component);

    function MdiFood() {
        _classCallCheck(this, MdiFood);

        return _possibleConstructorReturn(this, (MdiFood.__proto__ || Object.getPrototypeOf(MdiFood)).apply(this, arguments));
    }

    _createClass(MdiFood, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'fill-rule': 'evenodd', 'stroke-linejoin': 'round', d: 'M 15.5,21L 14,8L 16.2341,8L 15.097,3.46181L 16.843,3.02431L 18.0898,8L 22,8L 20.5,21L 15.5,21 Z M 5,11L 10,11C 11.6568,11 13,12.3431 13,14L 2,14C 2,12.3431 3.34315,11 5,11 Z M 13,18C 13,19.6569 11.6568,21 10,21L 5,21C 3.34314,21 2,19.6569 2,18L 13,18 Z M 3,15L 8,15L 9.5,16.5L 11,15L 12,15C 12.5523,15 13,15.4477 13,16C 13,16.5523 12.5523,17 12,17L 3,17C 2.44772,17 2,16.5523 2,16C 2,15.4477 2.44772,15 3,15 Z ' })
                )
            );
        }
    }]);

    return MdiFood;
}(React.Component);

exports.default = MdiFood;
module.exports = exports['default'];