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

var MdiPi = function (_React$Component) {
    _inherits(MdiPi, _React$Component);

    function MdiPi() {
        _classCallCheck(this, MdiPi);

        return _possibleConstructorReturn(this, (MdiPi.__proto__ || Object.getPrototypeOf(MdiPi)).apply(this, arguments));
    }

    _createClass(MdiPi, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 3.99875,5L 3.99875,7.0025L 6.00125,7.0025L 6.00125,18.9988L 7.9975,18.9988L 7.9975,7.0025L 13.9987,7.0025L 13.9987,16.0012C 13.9987,17.6563 15.3413,18.9988 17.0025,18.9988C 18.6575,18.9988 20,17.6563 20,16.0012L 17.9975,16.0012C 17.9975,16.5525 17.5537,17.0025 17.0025,17.0025C 16.445,17.0025 16.0012,16.5525 16.0012,16.0012L 16.0012,7.0025L 17.9975,7.0025L 17.9975,5' })
                )
            );
        }
    }]);

    return MdiPi;
}(React.Component);

exports.default = MdiPi;
module.exports = exports['default'];