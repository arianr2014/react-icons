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

var MdiFacebook = function (_React$Component) {
    _inherits(MdiFacebook, _React$Component);

    function MdiFacebook() {
        _classCallCheck(this, MdiFacebook);

        return _possibleConstructorReturn(this, (MdiFacebook.__proto__ || Object.getPrototypeOf(MdiFacebook)).apply(this, arguments));
    }

    _createClass(MdiFacebook, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 16.9995,2L 16.9995,2.00194L 17.0001,2.00194L 17.0001,6.00192L 15,6.00192C 14.31,6.00192 14,6.81068 14,7.50193L 14,10.0019L 14.0001,10.0019L 17,10.0019L 17,14.0019L 14,14.0019L 14,22.0019L 9.99951,22L 10,14.0019L 7,14.0019L 7,10.0019L 10,10.0019L 10.0001,6.00192C 10.0001,3.79278 11.7909,2.00193 14.0001,2.00193L 16.9995,2 Z ' })
                )
            );
        }
    }]);

    return MdiFacebook;
}(React.Component);

exports.default = MdiFacebook;
module.exports = exports['default'];