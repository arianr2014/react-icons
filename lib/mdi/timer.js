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

var MdiTimer = function (_React$Component) {
    _inherits(MdiTimer, _React$Component);

    function MdiTimer() {
        _classCallCheck(this, MdiTimer);

        return _possibleConstructorReturn(this, (MdiTimer.__proto__ || Object.getPrototypeOf(MdiTimer)).apply(this, arguments));
    }

    _createClass(MdiTimer, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 12,20C 8.13,20 5,16.87 5,13C 5,9.13 8.13,6 12,6C 15.87,6 19,9.13 19,13C 19,16.87 15.87,20 12,20 Z M 19.03,7.39L 20.45,5.97C 20.02,5.46 19.55,4.98 19.04,4.56L 17.62,5.98C 16.07,4.74 14.12,4 12,4C 7.03,4 3,8.03 3,13C 3,17.97 7.02,22 12,22C 16.98,22 21,17.97 21,13C 21,10.88 20.26,8.93 19.03,7.39 Z M 11,14L 13,14L 13,8L 11,8M 15,1L 9,1L 9,3L 15,3L 15,1 Z ' })
                )
            );
        }
    }]);

    return MdiTimer;
}(React.Component);

exports.default = MdiTimer;
module.exports = exports['default'];