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

var MdiSigmaLower = function (_React$Component) {
    _inherits(MdiSigmaLower, _React$Component);

    function MdiSigmaLower() {
        _classCallCheck(this, MdiSigmaLower);

        return _possibleConstructorReturn(this, (MdiSigmaLower.__proto__ || Object.getPrototypeOf(MdiSigmaLower)).apply(this, arguments));
    }

    _createClass(MdiSigmaLower, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 19,12C 19,16.4183 15.6421,20 11.5,20C 7.35786,20 4,16.4183 4,12C 4,7.58172 7.35786,4 11.5,4L 20,4L 20,6L 16.4609,6C 18.018,7.46589 19,9.61061 19,12 Z M 11.5,6C 8.46243,6 6,8.68629 6,12C 6,15.3137 8.46243,18 11.5,18C 14.5376,18 17,15.3137 17,12C 17,8.68629 14.5376,6 11.5,6 Z ' })
                )
            );
        }
    }]);

    return MdiSigmaLower;
}(React.Component);

exports.default = MdiSigmaLower;
module.exports = exports['default'];