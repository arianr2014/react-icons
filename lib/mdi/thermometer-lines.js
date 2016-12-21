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

var MdiThermometerLines = function (_React$Component) {
    _inherits(MdiThermometerLines, _React$Component);

    function MdiThermometerLines() {
        _classCallCheck(this, MdiThermometerLines);

        return _possibleConstructorReturn(this, (MdiThermometerLines.__proto__ || Object.getPrototypeOf(MdiThermometerLines)).apply(this, arguments));
    }

    _createClass(MdiThermometerLines, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 17,3.00001L 21,3.00003L 21,5.00003L 17,5.00001L 17,3.00001 Z M 17,7.00002L 21,7.00004L 21,9.00004L 17,9.00002L 17,7.00002 Z M 17,11L 21,11L 21,13L 17.7453,13L 17,12.101L 17,11 Z M 21,15L 21,17L 19,17C 19,16.305 18.8987,15.6337 18.7101,15L 21,15 Z M 17,17C 17,19.7614 14.7614,22 12,22C 9.23857,22 7,19.7614 7,17C 7,15.3642 7.78555,13.9118 9,12.9996L 9,5.00001C 9,3.34315 10.3431,2.00002 12,2.00002C 13.6568,2.00002 15,3.34315 15,5.00001L 15,12.9996C 16.2144,13.9118 17,15.3642 17,17 Z M 11,8.00006L 11,14.1707C 9.8348,14.5825 9,15.6938 9,17C 9,18.6569 10.3431,20 12,20C 13.6568,20 15,18.6569 15,17C 15,15.6938 14.1652,14.5825 13,14.1707L 12.9999,8.00006L 11,8.00006 Z M 6.99999,3.00001L 6.99999,5.00001L 3.00002,5.00003L 3.00002,3.00003L 6.99999,3.00001 Z M 7,7.00001L 7,9.00001L 3.00002,9.00003L 3.00002,7.00003L 7,7.00001 Z M 7,11L 7,12.101L 6.25468,13L 3.00002,13L 3.00002,11L 7,11 Z M 3.00001,15L 5.28988,15C 5.10128,15.6337 5,16.305 5,17L 3.00001,17L 3.00001,15 Z ' })
                )
            );
        }
    }]);

    return MdiThermometerLines;
}(React.Component);

exports.default = MdiThermometerLines;
module.exports = exports['default'];