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

var MdiUmbraco = function (_React$Component) {
    _inherits(MdiUmbraco, _React$Component);

    function MdiUmbraco() {
        _classCallCheck(this, MdiUmbraco);

        return _possibleConstructorReturn(this, (MdiUmbraco.__proto__ || Object.getPrototypeOf(MdiUmbraco)).apply(this, arguments));
    }

    _createClass(MdiUmbraco, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 8.59756,8.59757L 7.17073,8.37806C 6.5122,11.6707 6.46285,14.2379 7.60976,15.5122C 8.59756,16.6098 11.8902,16.6098 11.8902,16.6098C 11.8902,16.6098 15.2927,16.6098 16.2805,15.5122C 17.4274,14.2379 17.378,11.6707 16.7195,8.37806L 15.2927,8.59757C 15.2927,8.59757 16.5431,13.8779 14.689,14.689C 13.811,15.0732 11.8902,15.0732 11.8902,15.0732C 11.8902,15.0732 10.0793,15.0732 9.20122,14.689C 7.3471,13.8779 8.59756,8.59757 8.59756,8.59757 Z M 12,3.00001C 16.9706,3.00001 21,7.02945 21,12C 21,16.9706 16.9706,21 12,21C 7.02944,21 3,16.9706 3,12C 3,7.02945 7.02944,3.00001 12,3.00001 Z ' })
                )
            );
        }
    }]);

    return MdiUmbraco;
}(React.Component);

exports.default = MdiUmbraco;
module.exports = exports['default'];