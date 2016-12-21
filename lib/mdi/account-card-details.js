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

var MdiAccountCardDetails = function (_React$Component) {
    _inherits(MdiAccountCardDetails, _React$Component);

    function MdiAccountCardDetails() {
        _classCallCheck(this, MdiAccountCardDetails);

        return _possibleConstructorReturn(this, (MdiAccountCardDetails.__proto__ || Object.getPrototypeOf(MdiAccountCardDetails)).apply(this, arguments));
    }

    _createClass(MdiAccountCardDetails, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 2,3L 22,3C 23.0472,3 24,3.9528 24,5L 24,19C 24,20.0472 23.0472,21 22,21L 2,21C 0.952801,21 1.27157e-006,20.0472 1.27157e-006,19L 1.27157e-006,5C 1.27157e-006,3.9528 0.952801,3 2,3 Z M 14,6L 14,7L 22,7L 22,6L 14,6 Z M 14,8L 14,9L 21.5,9L 22,9L 22,8L 14,8 Z M 14,10L 14,11L 21,11L 21,10L 14,10 Z M 8,13.9062C 6,13.9062 2,15 2,17L 2,18L 14,18L 14,17C 14,15 10,13.9062 8,13.9062 Z M 8,6C 6.34315,6 5,7.34315 5,9C 5,10.6569 6.34314,12 8,12C 9.65685,12 11,10.6569 11,9C 11,7.34315 9.65685,6 8,6 Z ' })
                )
            );
        }
    }]);

    return MdiAccountCardDetails;
}(React.Component);

exports.default = MdiAccountCardDetails;
module.exports = exports['default'];