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

var MdiFridgeFilledTop = function (_React$Component) {
    _inherits(MdiFridgeFilledTop, _React$Component);

    function MdiFridgeFilledTop() {
        _classCallCheck(this, MdiFridgeFilledTop);

        return _possibleConstructorReturn(this, (MdiFridgeFilledTop.__proto__ || Object.getPrototypeOf(MdiFridgeFilledTop)).apply(this, arguments));
    }

    _createClass(MdiFridgeFilledTop, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'miter', d: 'M 7,2.00001C 5.89543,2.00001 5,2.89541 5,4.00001L 5,19C 5,20.1046 5.89543,21 7,21L 7,22L 9,22L 9,21L 15,21L 15,22L 17,22L 17,21C 18.1046,21 19,20.1046 19,19L 19,4C 19,2.8954 18.1046,2 17,2L 7,2.00001 Z M 7.99999,6.00001L 9.99999,6.00001L 9.99999,8.00001L 7.99999,8.00001L 7.99999,6.00001 Z M 7,11L 17,11L 17,19L 7,19L 7,11 Z M 8,12L 8,15L 10,15L 10,12L 8,12 Z ' })
                )
            );
        }
    }]);

    return MdiFridgeFilledTop;
}(React.Component);

exports.default = MdiFridgeFilledTop;
module.exports = exports['default'];