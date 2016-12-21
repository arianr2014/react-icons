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

var MdiOpenInApp = function (_React$Component) {
    _inherits(MdiOpenInApp, _React$Component);

    function MdiOpenInApp() {
        _classCallCheck(this, MdiOpenInApp);

        return _possibleConstructorReturn(this, (MdiOpenInApp.__proto__ || Object.getPrototypeOf(MdiOpenInApp)).apply(this, arguments));
    }

    _createClass(MdiOpenInApp, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 12,10L 8,14L 11,14L 11,20L 13,20L 13,14L 16,14M 19,4L 5,4C 3.89,4 3,4.9 3,6L 3,18C 3,19.1 3.89,20 5,20L 9,20L 9,18L 5,18L 5,8L 19,8L 19,18L 15,18L 15,20L 19,20C 20.1,20 21,19.1 21,18L 21,6C 21,4.9 20.11,4 19,4 Z ' })
                )
            );
        }
    }]);

    return MdiOpenInApp;
}(React.Component);

exports.default = MdiOpenInApp;
module.exports = exports['default'];