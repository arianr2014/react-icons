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

var MdiFoodForkDrink = function (_React$Component) {
    _inherits(MdiFoodForkDrink, _React$Component);

    function MdiFoodForkDrink() {
        _classCallCheck(this, MdiFoodForkDrink);

        return _possibleConstructorReturn(this, (MdiFoodForkDrink.__proto__ || Object.getPrototypeOf(MdiFoodForkDrink)).apply(this, arguments));
    }

    _createClass(MdiFoodForkDrink, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 3,3C 2.446,3 2,3.446 2,4L 2,8L 2,9.5C 2,11.1864 3.02954,12.6285 4.5,13.2187L 4.5,19.5C 4.5,20.331 5.169,21 6,21C 6.831,21 7.5,20.331 7.5,19.5L 7.5,13.2187C 8.97046,12.6285 10,11.1864 10,9.5L 10,8L 10,4C 10,3.446 9.554,3 9,3C 8.446,3 8,3.446 8,4L 8,8C 8,8.277 7.777,8.5 7.5,8.5C 7.223,8.5 7,8.277 7,8L 7,4C 7,3.446 6.554,3 6,3C 5.446,3 5,3.446 5,4L 5,8C 5,8.277 4.777,8.5 4.5,8.5C 4.223,8.5 4,8.277 4,8L 4,4C 4,3.446 3.554,3 3,3 Z M 19.875,3C 19.7463,3.0181 19.6189,3.0852 19.5,3.1562L 16,5.25L 16,9L 12,9L 12,11L 13,11L 14,21L 20,21L 21,11L 22,11L 22,9L 18,9L 18,6.3437L 20.5,4.8437C 20.9755,4.5594 21.1281,3.9755 20.8438,3.5C 20.6305,3.1434 20.261,2.9456 19.875,3 Z ' })
                )
            );
        }
    }]);

    return MdiFoodForkDrink;
}(React.Component);

exports.default = MdiFoodForkDrink;
module.exports = exports['default'];