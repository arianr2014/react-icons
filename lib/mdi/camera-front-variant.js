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

var MdiCameraFrontVariant = function (_React$Component) {
    _inherits(MdiCameraFrontVariant, _React$Component);

    function MdiCameraFrontVariant() {
        _classCallCheck(this, MdiCameraFrontVariant);

        return _possibleConstructorReturn(this, (MdiCameraFrontVariant.__proto__ || Object.getPrototypeOf(MdiCameraFrontVariant)).apply(this, arguments));
    }

    _createClass(MdiCameraFrontVariant, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 6,1.90735e-006L 18,1.90735e-006C 19.1046,1.90735e-006 20,0.895433 20,2L 20,22C 20,23.1046 19.1046,24 18,24L 6,24C 4.89543,24 4,23.1046 4,22L 4,2C 4,0.895433 4.89543,1.90735e-006 6,1.90735e-006 Z M 12,6C 13.6569,6 15,7.34315 15,9C 15,10.6569 13.6569,12 12,12C 10.3431,12 9,10.6569 9,9C 9,7.34315 10.3431,6 12,6 Z M 11,1.00003L 11,3.00002L 13,3.00002L 13,1.00003L 11,1.00003 Z M 6,4.00001L 5.99999,16.5C 6,15.1193 8.68629,14 12,14C 15.3137,14 18,15.1193 18,16.5L 18,4.00001L 6,4.00001 Z M 13,18L 9,18L 9,20L 13,20L 13,22L 16,19L 13,16L 13,18 Z ' })
                )
            );
        }
    }]);

    return MdiCameraFrontVariant;
}(React.Component);

exports.default = MdiCameraFrontVariant;
module.exports = exports['default'];