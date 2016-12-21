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

var MdiScaleBalance = function (_React$Component) {
    _inherits(MdiScaleBalance, _React$Component);

    function MdiScaleBalance() {
        _classCallCheck(this, MdiScaleBalance);

        return _possibleConstructorReturn(this, (MdiScaleBalance.__proto__ || Object.getPrototypeOf(MdiScaleBalance)).apply(this, arguments));
    }

    _createClass(MdiScaleBalance, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 12,3C 10.7302,3.0018 9.59905,3.8028 9.17578,5L 3,5L 3,7L 4.94531,7L 2,14C 1.52812,16 3,17 5.5,17C 8,17 9.5599,16 9,14L 6.05469,7L 9.17383,7C 9.47597,7.853 10.147,8.524 11,8.8262L 11,20L 2,20L 2,22L 22,22L 22,20L 13,20L 13,8.8242C 13.8518,8.522 14.522,7.8518 14.8242,7L 17.9453,7L 15,14C 14.5281,16 16,17 18.5,17C 21,17 22.5599,16 22,14L 19.0547,7L 21,7L 21,5L 14.8262,5C 14.4027,3.8021 13.2705,3.001 12,3 Z M 12,5C 12.5523,5 13,5.4477 13,6C 13,6.5523 12.5523,7 12,7C 11.4477,7 11,6.5523 11,6C 11,5.4477 11.4477,5 12,5 Z M 5.5,10.25L 7,14L 4,14L 5.5,10.25 Z M 18.5,10.25L 20,14L 17,14L 18.5,10.25 Z ' })
                )
            );
        }
    }]);

    return MdiScaleBalance;
}(React.Component);

exports.default = MdiScaleBalance;
module.exports = exports['default'];