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

var MdiDatabasePlus = function (_React$Component) {
    _inherits(MdiDatabasePlus, _React$Component);

    function MdiDatabasePlus() {
        _classCallCheck(this, MdiDatabasePlus);

        return _possibleConstructorReturn(this, (MdiDatabasePlus.__proto__ || Object.getPrototypeOf(MdiDatabasePlus)).apply(this, arguments));
    }

    _createClass(MdiDatabasePlus, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 8.99875,2.9978C 4.58,2.9978 1.00125,4.79 1.00125,7.0025C 1.00125,9.20875 4.58,11.0012 8.99875,11.0012C 13.4175,11.0012 17.0025,9.20875 17.0025,7.0025C 17.0025,4.79 13.4175,2.9978 8.99875,2.9978 Z M 1.00125,8.99875L 1.00125,12.0025C 1.00125,14.2087 4.58,16.0012 8.99875,16.0012C 13.4175,16.0012 17.0025,14.2087 17.0025,12.0025L 17.0025,8.99875C 17.0025,11.2112 13.4175,12.9975 8.99875,12.9975C 4.58,12.9975 1.00125,11.2112 1.00125,8.99875 Z M 1.00125,13.9987L 1.00125,17.0025C 1.00125,19.2087 4.58,21.0012 8.99875,21.0012C 10.405,20.9963 11.7875,20.81 12.9975,20.4587L 12.9975,17.4562C 11.7875,17.8125 10.405,17.9975 8.99875,17.9975C 4.58,17.9975 1.00125,16.2112 1.00125,13.9987 Z M 17.9975,13.9987L 17.9975,17.0025L 15,17.0025L 15,18.9988L 17.9975,18.9988L 17.9975,22.0025L 20,22.0025L 20,18.9988L 22.9975,18.9988L 22.9975,17.0025L 20,17.0025L 20,13.9987' })
                )
            );
        }
    }]);

    return MdiDatabasePlus;
}(React.Component);

exports.default = MdiDatabasePlus;
module.exports = exports['default'];