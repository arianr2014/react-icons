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

var MdiRotate90 = function (_React$Component) {
    _inherits(MdiRotate90, _React$Component);

    function MdiRotate90() {
        _classCallCheck(this, MdiRotate90);

        return _possibleConstructorReturn(this, (MdiRotate90.__proto__ || Object.getPrototypeOf(MdiRotate90)).apply(this, arguments));
    }

    _createClass(MdiRotate90, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 7.34,6.41L 0.860001,12.9L 7.35,19.38L 13.84,12.9L 7.34,6.41 Z M 3.69,12.9L 7.35,9.24L 11,12.9L 7.34,16.56L 3.69,12.9 Z M 19.36,6.64C 17.61,4.88 15.3,4 13,4L 13,0.76L 8.76,5L 13,9.24L 13,6C 14.79,6 16.58,6.68 17.95,8.05C 20.68,10.78 20.68,15.22 17.95,17.95C 16.58,19.32 14.79,20 13,20C 12.03,20 11.06,19.79 10.16,19.39L 8.67,20.88C 10.02,21.62 11.51,22 13,22C 15.3,22 17.61,21.12 19.36,19.36C 22.88,15.85 22.88,10.15 19.36,6.64 Z ' })
                )
            );
        }
    }]);

    return MdiRotate90;
}(React.Component);

exports.default = MdiRotate90;
module.exports = exports['default'];