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

var MdiQrcode = function (_React$Component) {
    _inherits(MdiQrcode, _React$Component);

    function MdiQrcode() {
        _classCallCheck(this, MdiQrcode);

        return _possibleConstructorReturn(this, (MdiQrcode.__proto__ || Object.getPrototypeOf(MdiQrcode)).apply(this, arguments));
    }

    _createClass(MdiQrcode, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 5.00001,4.99999L 7.00001,4.99999L 7.00001,6.99999L 5.00001,6.99999L 5.00001,4.99999 Z M 1,1.00004L 11,1.00005L 11,11L 1,11L 1,1.00004 Z M 3,3.00002L 3,9.00002L 8.99999,9.00003L 8.99999,3.00002L 3,3.00002 Z M 5,17L 6.99999,17L 6.99999,19L 5,19L 5,17 Z M 1,13L 11,13L 11,23L 1,23L 1,13 Z M 3,15L 3,21L 8.99999,21L 8.99999,15L 3,15 Z M 17,5.00001L 19,5.00001L 19,7.00001L 17,7.00001L 17,5.00001 Z M 13,1.00004L 22.9999,1.00005L 22.9999,11L 13,11L 13,1.00004 Z M 15,3.00002L 15,9.00002L 21,9.00003L 21,3.00002L 15,3.00002 Z M 13,13L 17,13L 17,15L 19,15L 19,13L 23,13L 23,15L 19,15L 19,17L 23,17L 23,23L 19,23L 19,21L 15,21L 15,23L 13,23L 13,21L 15,21L 15,19L 13,19L 13,13 Z M 21,21L 21,19L 19,19L 19,21L 21,21 Z M 19,17L 17,17L 17,15L 15,15L 15,19L 19,19L 19,17 Z ' })
                )
            );
        }
    }]);

    return MdiQrcode;
}(React.Component);

exports.default = MdiQrcode;
module.exports = exports['default'];