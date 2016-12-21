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

var MdiEmailSecure = function (_React$Component) {
    _inherits(MdiEmailSecure, _React$Component);

    function MdiEmailSecure() {
        _classCallCheck(this, MdiEmailSecure);

        return _possibleConstructorReturn(this, (MdiEmailSecure.__proto__ || Object.getPrototypeOf(MdiEmailSecure)).apply(this, arguments));
    }

    _createClass(MdiEmailSecure, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 20.5,-1.90735e-006C 21.88,-1.90735e-006 23,1.12 23,2.5L 23,3C 23.55,3 24,3.45 24,4L 24,7.99999C 24,8.54999 23.55,8.99999 23,8.99999L 18,8.99999C 17.45,8.99999 17,8.54999 17,7.99999L 17,4C 17,3.45 17.45,3 18,3L 18,2.5C 18,1.12 19.12,-1.90735e-006 20.5,-1.90735e-006 Z M 12,11.0002L 4,6.0002L 4,8.0002L 12,13.0002L 16.1817,10.3866C 16.6862,10.7716 17.3164,11.0002 18,11.0002L 22,11.0002L 22,18.0002C 22,19.1002 21.1,20.0002 20,20.0002L 4,20.0002C 2.9,20.0002 2,19.1002 2,18.0002L 2.01,6.0002C 2.01,4.9002 2.9,4.0002 4,4.0002L 15,4.0002L 15,8.0002C 15,8.35643 15.0621,8.69817 15.176,9.01517L 12,11.0002 Z M 20.5,1.00001C 19.6716,1.00001 19,1.67158 19,2.50001L 19,3L 22,3L 22,2.50001C 22,1.67158 21.3284,1.00001 20.5,1.00001 Z ' })
                )
            );
        }
    }]);

    return MdiEmailSecure;
}(React.Component);

exports.default = MdiEmailSecure;
module.exports = exports['default'];