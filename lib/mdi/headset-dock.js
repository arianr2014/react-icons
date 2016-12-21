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

var MdiHeadsetDock = function (_React$Component) {
    _inherits(MdiHeadsetDock, _React$Component);

    function MdiHeadsetDock() {
        _classCallCheck(this, MdiHeadsetDock);

        return _possibleConstructorReturn(this, (MdiHeadsetDock.__proto__ || Object.getPrototypeOf(MdiHeadsetDock)).apply(this, arguments));
    }

    _createClass(MdiHeadsetDock, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 2,18L 9,18L 9,6.12602C 7.27477,6.57006 6,8.13616 6,10L 6,11L 8,11L 8,17L 6,17C 4.89543,17 4,16.1046 4,15L 4,10C 4,6.68629 6.68629,4 10,4L 11,4C 14.3137,4 17,6.68629 17,10L 17,12L 18,12L 18,9L 20,9L 20,12C 20,13.1046 19.1046,14 18,14L 17,14L 17,15C 17,16.1046 16.1046,17 15,17L 13,17L 13,11L 15,11L 15,10C 15,8.13616 13.7252,6.57006 12,6.12601L 12,18L 22,18L 22,20L 2,20L 2,18 Z ' })
                )
            );
        }
    }]);

    return MdiHeadsetDock;
}(React.Component);

exports.default = MdiHeadsetDock;
module.exports = exports['default'];