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

var MdiThumbUpOutline = function (_React$Component) {
    _inherits(MdiThumbUpOutline, _React$Component);

    function MdiThumbUpOutline() {
        _classCallCheck(this, MdiThumbUpOutline);

        return _possibleConstructorReturn(this, (MdiThumbUpOutline.__proto__ || Object.getPrototypeOf(MdiThumbUpOutline)).apply(this, arguments));
    }

    _createClass(MdiThumbUpOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 5,9L 5,21L 1,21L 1,9L 5,9 Z M 9,21C 7.896,21 7.00001,20.104 7.00001,19L 7.00001,9C 7.00001,8.448 7.224,7.948 7.58602,7.58602L 14.172,1.00001L 15.232,2.05502C 15.504,2.32601 15.672,2.70101 15.672,3.11499L 15.639,3.43099L 14.685,8L 21,8C 22.105,8 23,8.89502 23,10L 23,10.085L 23,12C 23,12.257 22.947,12.502 22.859,12.727L 19.842,19.78C 19.538,20.497 18.828,21 18,21L 9,21 Z M 8.99939,18.998L 18.0256,18.998L 20.9994,11.9923L 20.9994,9.99805L 12.2145,9.99805L 13.3446,4.68131L 8.99939,9.02648L 8.99939,18.998 Z ' })
                )
            );
        }
    }]);

    return MdiThumbUpOutline;
}(React.Component);

exports.default = MdiThumbUpOutline;
module.exports = exports['default'];