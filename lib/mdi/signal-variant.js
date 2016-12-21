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

var MdiSignalVariant = function (_React$Component) {
    _inherits(MdiSignalVariant, _React$Component);

    function MdiSignalVariant() {
        _classCallCheck(this, MdiSignalVariant);

        return _possibleConstructorReturn(this, (MdiSignalVariant.__proto__ || Object.getPrototypeOf(MdiSignalVariant)).apply(this, arguments));
    }

    _createClass(MdiSignalVariant, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 4,6L 4,4L 4.1,4C 12.9,4 20,11.1 20,19.9L 20,20L 18,20L 18,19.9C 18,12.2 11.8,6 4,6 Z M 4,10L 4,8C 10.6,8 16,13.4 16,20L 14,20C 14,14.5 9.5,10 4,10 Z M 4,14L 4,12C 8.4,12 12,15.6 12,20L 10,20C 10,16.7 7.3,14 4,14 Z M 4,16C 6.20914,16 8,17.7909 8,20L 4,20L 4,16 Z ' })
                )
            );
        }
    }]);

    return MdiSignalVariant;
}(React.Component);

exports.default = MdiSignalVariant;
module.exports = exports['default'];