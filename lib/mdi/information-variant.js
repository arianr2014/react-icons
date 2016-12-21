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

var MdiInformationVariant = function (_React$Component) {
    _inherits(MdiInformationVariant, _React$Component);

    function MdiInformationVariant() {
        _classCallCheck(this, MdiInformationVariant);

        return _possibleConstructorReturn(this, (MdiInformationVariant.__proto__ || Object.getPrototypeOf(MdiInformationVariant)).apply(this, arguments));
    }

    _createClass(MdiInformationVariant, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 13.5,4C 12.6716,4 12,4.6716 12,5.5C 12,6.3284 12.6716,7 13.5,7C 14.3284,7 15,6.3284 15,5.5C 15,4.6716 14.3284,4 13.5,4 Z M 13.1367,8.7695C 11.9453,8.8716 8.69531,11.459 8.69531,11.459C 8.51652,11.6084 8.55632,11.5972 8.71875,11.877C 8.87863,12.1523 8.85754,12.1685 9.05273,12.0391C 9.24793,11.9096 9.58031,11.7049 10.1328,11.3555C 12.2484,9.9986 10.466,13.1448 9.5625,18.4258C 9.20337,21.0518 11.5571,19.6977 12.166,19.3027C 12.7749,18.9078 14.3772,17.8013 14.5391,17.6894C 14.7601,17.5367 14.6003,17.4162 14.4297,17.1719C 14.3107,17.0014 14.1875,17.1152 14.1875,17.1152C 13.5423,17.553 12.3479,18.4527 12.1855,17.8809C 12.0231,17.309 13.2232,13.4001 13.8926,10.709C 14.0161,10.0747 14.2968,8.6701 13.1367,8.7695 Z ' })
                )
            );
        }
    }]);

    return MdiInformationVariant;
}(React.Component);

exports.default = MdiInformationVariant;
module.exports = exports['default'];