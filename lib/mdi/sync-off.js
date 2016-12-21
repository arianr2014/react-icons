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

var MdiSyncOff = function (_React$Component) {
    _inherits(MdiSyncOff, _React$Component);

    function MdiSyncOff() {
        _classCallCheck(this, MdiSyncOff);

        return _possibleConstructorReturn(this, (MdiSyncOff.__proto__ || Object.getPrototypeOf(MdiSyncOff)).apply(this, arguments));
    }

    _createClass(MdiSyncOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 20,4L 14,4L 14,10L 16.24,7.76C 17.32,8.85 18,10.34 18,12C 18,13 17.75,13.94 17.32,14.77L 18.78,16.23C 19.55,15.01 20,13.56 20,12C 20,9.79 19.09,7.8 17.64,6.36L 20,4 Z M 2.86,5.41L 5.22,7.77C 4.45,8.99 4,10.44 4,12C 4,14.21 4.91,16.2 6.36,17.64L 4,20L 10,20L 10,14L 7.76,16.24C 6.68,15.15 6,13.66 6,12C 6,11 6.25,10.06 6.68,9.23L 14.76,17.31C 14.51,17.44 14.26,17.56 13.99,17.65L 13.99,19.74C 14.79,19.53 15.54,19.2 16.22,18.78L 18.58,21.14L 19.85,19.87L 4.14,4.14L 2.86,5.41 Z M 10,6.35L 10,4.26C 9.2,4.47 8.45,4.8 7.77,5.22L 9.23,6.68C 9.48,6.56 9.73,6.44 10,6.35 Z ' })
                )
            );
        }
    }]);

    return MdiSyncOff;
}(React.Component);

exports.default = MdiSyncOff;
module.exports = exports['default'];