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

var MdiPhoneIncoming = function (_React$Component) {
    _inherits(MdiPhoneIncoming, _React$Component);

    function MdiPhoneIncoming() {
        _classCallCheck(this, MdiPhoneIncoming);

        return _possibleConstructorReturn(this, (MdiPhoneIncoming.__proto__ || Object.getPrototypeOf(MdiPhoneIncoming)).apply(this, arguments));
    }

    _createClass(MdiPhoneIncoming, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'miter', d: 'M 4,3C 3.45,3 3,3.45 3,4C 3,13.39 10.61,21 20,21C 20.55,21 21,20.55 21,20L 21,16.5C 21,15.95 20.55,15.5 20,15.5C 18.75,15.5 17.5497,15.2997 16.4297,14.9297C 16.0797,14.8197 15.6902,14.8999 15.4102,15.1699L 13.2109,17.3691C 10.3809,15.9291 8.05914,13.6193 6.61914,10.7793L 8.82031,8.5703C 9.10031,8.3103 9.18031,7.9203 9.07031,7.5703C 8.70031,6.4503 8.5,5.25 8.5,4C 8.5,3.45 8.05,3 7.5,3L 4,3 Z M 19,11L 19,9.5L 15.5,9.5L 21,4L 20,3L 14.5,8.5L 14.5,5L 13,5L 13,11L 19,11 Z ' })
                )
            );
        }
    }]);

    return MdiPhoneIncoming;
}(React.Component);

exports.default = MdiPhoneIncoming;
module.exports = exports['default'];