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

var MdiFlashlight = function (_React$Component) {
    _inherits(MdiFlashlight, _React$Component);

    function MdiFlashlight() {
        _classCallCheck(this, MdiFlashlight);

        return _possibleConstructorReturn(this, (MdiFlashlight.__proto__ || Object.getPrototypeOf(MdiFlashlight)).apply(this, arguments));
    }

    _createClass(MdiFlashlight, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 9,10L 6,5L 18,5L 15,10L 9,10 Z M 18,4L 6,4L 6,2.00001L 18,2.00001L 18,4 Z M 9,22L 9,11L 15,11L 15,22L 9,22 Z M 12,13C 11.4477,13 11,13.4477 11,14C 11,14.5523 11.4477,15 12,15C 12.5523,15 13,14.5523 13,14C 13,13.4477 12.5523,13 12,13 Z ' })
                )
            );
        }
    }]);

    return MdiFlashlight;
}(React.Component);

exports.default = MdiFlashlight;
module.exports = exports['default'];