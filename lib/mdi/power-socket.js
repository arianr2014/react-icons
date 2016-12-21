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

var MdiPowerSocket = function (_React$Component) {
    _inherits(MdiPowerSocket, _React$Component);

    function MdiPowerSocket() {
        _classCallCheck(this, MdiPowerSocket);

        return _possibleConstructorReturn(this, (MdiPowerSocket.__proto__ || Object.getPrototypeOf(MdiPowerSocket)).apply(this, arguments));
    }

    _createClass(MdiPowerSocket, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 15,15L 17,15L 17,11L 15,11M 7,15L 9,15L 9,11L 7,11M 11,13L 13,13L 13,9L 11,9M 8.83,7L 15.2,7L 19,10.8L 19,17L 5,17L 5,10.8M 8,5L 3,10L 3,19L 21,19L 21,10L 16,5L 8,5 Z ' })
                )
            );
        }
    }]);

    return MdiPowerSocket;
}(React.Component);

exports.default = MdiPowerSocket;
module.exports = exports['default'];