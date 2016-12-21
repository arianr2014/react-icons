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

var MdiLaptopMac = function (_React$Component) {
    _inherits(MdiLaptopMac, _React$Component);

    function MdiLaptopMac() {
        _classCallCheck(this, MdiLaptopMac);

        return _possibleConstructorReturn(this, (MdiLaptopMac.__proto__ || Object.getPrototypeOf(MdiLaptopMac)).apply(this, arguments));
    }

    _createClass(MdiLaptopMac, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 12,19C 11.4477,19 11,18.5523 11,18C 11,17.4477 11.4477,17 12,17C 12.5523,17 13,17.4477 13,18C 13,18.5523 12.5523,19 12,19M 4,5L 20,5L 20,16L 4,16M 20,18C 21.1046,18 22,17.1046 22,16L 22,5C 22,3.89 21.1,3 20,3L 4,3C 2.89,3 2,3.89 2,5L 2,16C 2,17.1046 2.89543,18 4,18L 1.27157e-006,18C 1.27157e-006,19.1046 0.895432,20 2,20L 22,20C 23.1046,20 24,19.1046 24,18L 20,18 Z ' })
                )
            );
        }
    }]);

    return MdiLaptopMac;
}(React.Component);

exports.default = MdiLaptopMac;
module.exports = exports['default'];