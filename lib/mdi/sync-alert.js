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

var MdiSyncAlert = function (_React$Component) {
    _inherits(MdiSyncAlert, _React$Component);

    function MdiSyncAlert() {
        _classCallCheck(this, MdiSyncAlert);

        return _possibleConstructorReturn(this, (MdiSyncAlert.__proto__ || Object.getPrototypeOf(MdiSyncAlert)).apply(this, arguments));
    }

    _createClass(MdiSyncAlert, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 11,13L 13,13L 13,7L 11,7M 21,4L 15,4L 15,10L 17.24,7.76C 18.32,8.85 19,10.34 19,12C 19,14.61 17.33,16.83 15,17.65L 15,19.74C 18.45,18.85 21,15.73 21,12C 21,9.79 20.09,7.8 18.64,6.36M 11,17L 13,17L 13,15L 11,15M 3,12C 3,14.21 3.91,16.2 5.36,17.64L 3,20L 9,20L 9,14L 6.76,16.24C 5.68,15.15 5,13.66 5,12C 5,9.39 6.67,7.17 9,6.35L 9,4.26C 5.55,5.15 3,8.27 3,12 Z ' })
                )
            );
        }
    }]);

    return MdiSyncAlert;
}(React.Component);

exports.default = MdiSyncAlert;
module.exports = exports['default'];