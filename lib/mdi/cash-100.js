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

var MdiCash100 = function (_React$Component) {
    _inherits(MdiCash100, _React$Component);

    function MdiCash100() {
        _classCallCheck(this, MdiCash100);

        return _possibleConstructorReturn(this, (MdiCash100.__proto__ || Object.getPrototypeOf(MdiCash100)).apply(this, arguments));
    }

    _createClass(MdiCash100, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 2,5L 22,5L 22,20L 2,20L 2,5 Z M 20,18L 20,7L 4,7L 4,18L 20,18 Z M 17,8C 17,9.10457 17.8954,10 19,10L 19,15C 17.8954,15 17,15.8954 17,17L 7,17C 7,15.8954 6.10457,15 5,15L 5,10C 6.10457,10 7,9.10457 7,8L 17,8 Z M 17,13L 17,12C 17,10.8954 16.3284,10 15.5,10C 14.6716,10 14,10.8954 14,12L 14,13C 14,14.1046 14.6716,15 15.5,15C 16.3284,15 17,14.1046 17,13 Z M 15.5,11C 15.7761,11 16,11.2239 16,11.5L 16,13.5C 16,13.7761 15.7761,14 15.5,14C 15.2238,14 15,13.7761 15,13.5L 15,11.5C 15,11.2239 15.2238,11 15.5,11 Z M 13,13L 13,12C 13,10.8954 12.3284,10 11.5,10C 10.6716,10 10,10.8954 10,12L 10,13C 10,14.1046 10.6716,15 11.5,15C 12.3284,15 13,14.1046 13,13 Z M 11.5,11C 11.7761,11 12,11.2239 12,11.5L 12,13.5C 12,13.7761 11.7761,14 11.5,14C 11.2238,14 11,13.7761 11,13.5L 11,11.5C 11,11.2239 11.2238,11 11.5,11 Z M 8,15L 9,15L 9,10L 8,10L 7,10.5L 7,11.5L 8,11L 8,15 Z ' })
                )
            );
        }
    }]);

    return MdiCash100;
}(React.Component);

exports.default = MdiCash100;
module.exports = exports['default'];