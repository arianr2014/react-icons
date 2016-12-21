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

var MdiFormatSubscript = function (_React$Component) {
    _inherits(MdiFormatSubscript, _React$Component);

    function MdiFormatSubscript() {
        _classCallCheck(this, MdiFormatSubscript);

        return _possibleConstructorReturn(this, (MdiFormatSubscript.__proto__ || Object.getPrototypeOf(MdiFormatSubscript)).apply(this, arguments));
    }

    _createClass(MdiFormatSubscript, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 16,7.41002L 11.41,12L 16,16.59L 14.59,18L 10,13.41L 5.41,18L 4,16.59L 8.59,12L 4,7.41002L 5.41,6.00002L 10,10.59L 14.59,6.00002L 16,7.41002 Z M 21.8484,21.03L 16.9655,21.03L 16.9655,20.0339L 17.8616,19.2301C 18.6176,18.5829 19.183,18.039 19.5577,17.5982C 19.9324,17.1575 20.1244,16.7459 20.1337,16.3636C 20.1361,16.0817 20.0459,15.8484 19.863,15.6637C 19.6801,15.4791 19.3899,15.3834 18.9923,15.3767C 18.6918,15.3832 18.4154,15.4429 18.1629,15.556L 17.5095,15.9378L 17.0508,14.7665C 17.3155,14.556 17.6422,14.3808 18.0309,14.241C 18.4196,14.1012 18.8503,14.0287 19.323,14.0233C 20.1018,14.037 20.6953,14.2481 21.1036,14.6567C 21.5119,15.0653 21.7175,15.5893 21.7204,16.2286C 21.7065,16.7905 21.528,17.3076 21.1848,17.78C 20.8415,18.2523 20.4165,18.7045 19.9097,19.1366L 19.2696,19.6559L 19.2696,19.6767L 21.8484,19.6767L 21.8484,21.03 Z ' })
                )
            );
        }
    }]);

    return MdiFormatSubscript;
}(React.Component);

exports.default = MdiFormatSubscript;
module.exports = exports['default'];