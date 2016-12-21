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

var MdiRotateLeft = function (_React$Component) {
    _inherits(MdiRotateLeft, _React$Component);

    function MdiRotateLeft() {
        _classCallCheck(this, MdiRotateLeft);

        return _possibleConstructorReturn(this, (MdiRotateLeft.__proto__ || Object.getPrototypeOf(MdiRotateLeft)).apply(this, arguments));
    }

    _createClass(MdiRotateLeft, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 13,4.07L 13,1L 8.45,5.55L 13,10L 13,6.09C 15.84,6.57 18,9.03 18,12C 18,14.97 15.84,17.43 13,17.91L 13,19.93C 16.95,19.44 20,16.08 20,12C 20,7.92 16.95,4.56 13,4.07 Z M 7.1,18.32C 8.26,19.22 9.61,19.76 11,19.93L 11,17.9C 10.13,17.75 9.29,17.41 8.54,16.87L 7.1,18.32 Z M 6.09,13L 4.07,13C 4.24,14.39 4.79,15.73 5.69,16.89L 7.1,15.47C 6.58,14.72 6.23,13.88 6.09,13 Z M 7.11,8.53L 5.7,7.11C 4.8,8.27 4.24,9.61 4.07,11L 6.09,11C 6.23,10.13 6.58,9.28 7.11,8.53 Z ' })
                )
            );
        }
    }]);

    return MdiRotateLeft;
}(React.Component);

exports.default = MdiRotateLeft;
module.exports = exports['default'];