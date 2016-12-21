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

var MdiPalette = function (_React$Component) {
    _inherits(MdiPalette, _React$Component);

    function MdiPalette() {
        _classCallCheck(this, MdiPalette);

        return _possibleConstructorReturn(this, (MdiPalette.__proto__ || Object.getPrototypeOf(MdiPalette)).apply(this, arguments));
    }

    _createClass(MdiPalette, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 17.5,12C 16.67,12 16,11.33 16,10.5C 16,9.67 16.67,9 17.5,9C 18.33,9 19,9.67 19,10.5C 19,11.33 18.33,12 17.5,12 Z M 14.5,8C 13.67,8 13,7.33 13,6.5C 13,5.67 13.67,5 14.5,5C 15.33,5 16,5.67 16,6.5C 16,7.33 15.33,8 14.5,8 Z M 9.5,8C 8.67,8 8,7.33 8,6.5C 8,5.67 8.67,5 9.5,5C 10.33,5 11,5.67 11,6.5C 11,7.33 10.33,8 9.5,8 Z M 6.5,12C 5.67,12 5,11.33 5,10.5C 5,9.67 5.67,9 6.5,9C 7.33,9 8,9.67 8,10.5C 8,11.33 7.33,12 6.5,12 Z M 12,3C 7.03,3 3,7.03 3,12C 3,16.97 7.03,21 12,21C 12.83,21 13.5,20.33 13.5,19.5C 13.5,19.11 13.35,18.76 13.11,18.49C 12.88,18.23 12.73,17.88 12.73,17.5C 12.73,16.67 13.4,16 14.23,16L 16,16C 18.76,16 21,13.76 21,11C 21,6.58 16.97,3 12,3 Z ' })
                )
            );
        }
    }]);

    return MdiPalette;
}(React.Component);

exports.default = MdiPalette;
module.exports = exports['default'];