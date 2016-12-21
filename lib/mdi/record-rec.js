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

var MdiRecordRec = function (_React$Component) {
    _inherits(MdiRecordRec, _React$Component);

    function MdiRecordRec() {
        _classCallCheck(this, MdiRecordRec);

        return _possibleConstructorReturn(this, (MdiRecordRec.__proto__ || Object.getPrototypeOf(MdiRecordRec)).apply(this, arguments));
    }

    _createClass(MdiRecordRec, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 12.5,5C 8.36,5 5,8.35875 5,12.5C 5,16.64 8.36,20 12.5,20C 16.6412,20 20,16.64 20,12.5C 20,8.35875 16.6412,5 12.5,5 Z M 7.0025,10L 8.99875,10C 9.55125,10 10,10.4488 10,11.0012L 10,12.0025C 10,12.505 9.62375,12.9 9.14125,12.9738L 10.3075,15L 9.155,15L 7.9975,12.9975L 7.9975,15L 7.0025,15M 12.0025,10L 13.9987,10L 13.9987,11.0012L 12.0025,11.0012L 12.0025,12.0025L 13.9987,12.0025L 13.9987,12.9975L 12.0025,12.9975L 12.0025,13.9987L 13.9987,13.9987L 13.9987,15L 12.0025,15C 11.445,15 11.0013,14.5513 11.0013,13.9987L 11.0013,11.0012C 11.0013,10.4488 11.445,10 12.0025,10 Z M 16.0012,10L 17.9975,10L 17.9975,11.0012L 16.0012,11.0012L 16.0012,13.9987L 17.9975,13.9987L 17.9975,15L 16.0012,15C 15.4488,15 15,14.5513 15,13.9987L 15,11.0012C 15,10.4488 15.4488,10 16.0012,10 Z M 7.9975,11.0012L 7.9975,12.0025L 8.99875,12.0025L 8.99875,11.0012' })
                )
            );
        }
    }]);

    return MdiRecordRec;
}(React.Component);

exports.default = MdiRecordRec;
module.exports = exports['default'];