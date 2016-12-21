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

var MdiClockAlert = function (_React$Component) {
    _inherits(MdiClockAlert, _React$Component);

    function MdiClockAlert() {
        _classCallCheck(this, MdiClockAlert);

        return _possibleConstructorReturn(this, (MdiClockAlert.__proto__ || Object.getPrototypeOf(MdiClockAlert)).apply(this, arguments));
    }

    _createClass(MdiClockAlert, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 11.9941,1.998C 6.46709,1.998 2,6.475 2,11.998C 2,17.5211 6.46709,21.998 11.9941,21.998C 14.2511,21.998 16.3262,21.2422 18,19.9824L 18,17.2773C 16.5342,18.9418 14.3933,19.998 12,19.998C 7.57999,19.998 4,16.4161 4,11.998C 4,7.58 7.57999,3.998 12,3.998C 15.3584,3.998 18.2275,6.0686 19.4141,9L 21.541,9C 20.267,4.9415 16.4753,1.998 11.9941,1.998 Z M 11,6.998L 11,12.998L 16.2461,16.1484L 17,14.918L 12.5,12.248L 12.5,6.998L 11,6.998 Z M 20,11L 20,18L 22,18L 22,11L 20,11 Z M 20,20L 20,22L 22,22L 22,20L 20,20 Z ' })
                )
            );
        }
    }]);

    return MdiClockAlert;
}(React.Component);

exports.default = MdiClockAlert;
module.exports = exports['default'];