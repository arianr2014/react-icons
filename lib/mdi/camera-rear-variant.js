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

var MdiCameraRearVariant = function (_React$Component) {
    _inherits(MdiCameraRearVariant, _React$Component);

    function MdiCameraRearVariant() {
        _classCallCheck(this, MdiCameraRearVariant);

        return _possibleConstructorReturn(this, (MdiCameraRearVariant.__proto__ || Object.getPrototypeOf(MdiCameraRearVariant)).apply(this, arguments));
    }

    _createClass(MdiCameraRearVariant, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 6,1.90735e-006L 18,1.90735e-006C 19.1046,1.90735e-006 20,0.895433 20,2L 20,22C 20,23.1046 19.1046,24 18,24L 6,24C 4.89543,24 4,23.1046 4,22L 4,2C 4,0.895433 4.89543,1.90735e-006 6,1.90735e-006 Z M 12,2.00001C 10.8954,2.00001 10,2.89544 10,4.00001C 10,5.10457 10.8954,6.00001 12,6.00001C 13.1046,6.00001 14,5.10457 14,4.00001C 14,2.89544 13.1046,2.00001 12,2.00001 Z M 13,18L 9,18L 9,20L 13,20L 13,22L 16,19L 13,16L 13,18 Z ' })
                )
            );
        }
    }]);

    return MdiCameraRearVariant;
}(React.Component);

exports.default = MdiCameraRearVariant;
module.exports = exports['default'];