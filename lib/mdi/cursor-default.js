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

var MdiCursorDefault = function (_React$Component) {
    _inherits(MdiCursorDefault, _React$Component);

    function MdiCursorDefault() {
        _classCallCheck(this, MdiCursorDefault);

        return _possibleConstructorReturn(this, (MdiCursorDefault.__proto__ || Object.getPrototypeOf(MdiCursorDefault)).apply(this, arguments));
    }

    _createClass(MdiCursorDefault, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 13.6358,21.9746C 13.1353,22.208 12.5403,21.9914 12.3069,21.4909L 10.1261,16.7561L 7.62365,18.7817C 7.45266,18.9183 7.23586,19 6.99999,19C 6.4477,19 5.99999,18.5523 5.99999,18L 5.99999,3.00001C 5.99999,2.44773 6.4477,2.00001 6.99999,2.00001C 7.24494,2.00001 7.46932,2.08808 7.64319,2.23429L 7.65351,2.22202L 19.1442,11.8638C 19.5672,12.2188 19.6224,12.8496 19.2674,13.2727C 19.1158,13.4534 18.9139,13.5669 18.6994,13.6101L 15.5391,14.2251L 17.7448,18.9552C 17.9782,19.4557 17.7616,20.0507 17.2611,20.2841L 13.6358,21.9746 Z ' })
                )
            );
        }
    }]);

    return MdiCursorDefault;
}(React.Component);

exports.default = MdiCursorDefault;
module.exports = exports['default'];