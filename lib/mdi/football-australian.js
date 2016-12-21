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

var MdiFootballAustralian = function (_React$Component) {
    _inherits(MdiFootballAustralian, _React$Component);

    function MdiFootballAustralian() {
        _classCallCheck(this, MdiFootballAustralian);

        return _possibleConstructorReturn(this, (MdiFootballAustralian.__proto__ || Object.getPrototypeOf(MdiFootballAustralian)).apply(this, arguments));
    }

    _createClass(MdiFootballAustralian, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 7.52166,7.52166C 9.17157,5.87174 11.2929,4.69323 13.3749,4.18254C 18,3 21,6 19.8207,10.6283C 19.3068,12.7071 18.1283,14.8284 16.4783,16.4783C 14.8284,18.1283 12.7071,19.3068 10.6283,19.8207C 6,21 3,18 4.18254,13.3749C 4.69323,11.2929 5.87174,9.17157 7.52166,7.52166 Z M 10.6161,11.2626L 10.2626,11.6161L 12.3839,13.7374L 12.7374,13.3839L 10.6161,11.2626 Z M 11.6161,10.2626L 11.2626,10.6161L 13.3839,12.7374L 13.7374,12.3839L 11.6161,10.2626 Z M 9.61611,12.2626L 9.26256,12.6161L 11.3839,14.7374L 11.7374,14.3839L 9.61611,12.2626 Z M 12.6287,9.27513L 12.2751,9.62868L 14.3964,11.75L 14.75,11.3965L 12.6287,9.27513 Z M 8.62868,13.2751L 8.27512,13.6287L 10.3964,15.75L 10.75,15.3964L 8.62868,13.2751 Z M 13.6287,8.27513L 13.2751,8.62868L 15.3964,10.75L 15.75,10.3964L 13.6287,8.27513 Z ' })
                )
            );
        }
    }]);

    return MdiFootballAustralian;
}(React.Component);

exports.default = MdiFootballAustralian;
module.exports = exports['default'];