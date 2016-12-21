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

var MdiSkull = function (_React$Component) {
    _inherits(MdiSkull, _React$Component);

    function MdiSkull() {
        _classCallCheck(this, MdiSkull);

        return _possibleConstructorReturn(this, (MdiSkull.__proto__ || Object.getPrototypeOf(MdiSkull)).apply(this, arguments));
    }

    _createClass(MdiSkull, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 12,2C 7.02944,2 3,6.0294 3,11C 3.00123,14.027 4.52547,16.8159 7,18.4707L 7,22L 9,22L 9,19L 11,19L 11,22L 13,22L 13,19L 15,19L 15,22L 17,22L 17,18.4629C 19.4727,16.8097 20.9961,14.0245 21,11C 21,6.0294 16.9706,2 12,2 Z M 8,11C 9.10457,11 10,11.8954 10,13C 10,14.1046 9.10457,15 8,15C 6.89543,15 6,14.1046 6,13C 6,11.8954 6.89543,11 8,11 Z M 16,11C 17.1046,11 18,11.8954 18,13C 18,14.1046 17.1046,15 16,15C 14.8954,15 14,14.1046 14,13C 14,11.8954 14.8954,11 16,11 Z M 12,14L 13.5,17L 10.5,17L 12,14 Z ' })
                )
            );
        }
    }]);

    return MdiSkull;
}(React.Component);

exports.default = MdiSkull;
module.exports = exports['default'];