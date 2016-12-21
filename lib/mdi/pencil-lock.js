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

var MdiPencilLock = function (_React$Component) {
    _inherits(MdiPencilLock, _React$Component);

    function MdiPencilLock() {
        _classCallCheck(this, MdiPencilLock);

        return _possibleConstructorReturn(this, (MdiPencilLock.__proto__ || Object.getPrototypeOf(MdiPencilLock)).apply(this, arguments));
    }

    _createClass(MdiPencilLock, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'miter', d: 'M 5.5,2C 4.12,2 3,3.12 3,4.5L 3,5C 2.45,5 2,5.45 2,6L 2,10C 2,10.55 2.45,11 3,11L 8,11C 8.55,11 9,10.55 9,10L 9,6C 9,5.45 8.55,5 8,5L 8,4.5C 8,3.12 6.88,2 5.5,2 Z M 5.5,3C 6.3284,3 7,3.6716 7,4.5L 7,5L 4,5L 4,4.5C 4,3.6716 4.6716,3 5.5,3 Z M 19.6563,3C 19.4004,3 19.1642,3.0857 18.9688,3.2812L 17.125,5.125L 20.875,8.875L 22.7188,7.0312C 23.1098,6.6402 23.1098,6.0149 22.7188,5.625L 20.375,3.2812C 20.18,3.0857 19.9121,3 19.6563,3 Z M 16.0625,6.1875L 5,17.25L 5,21L 8.75,21L 19.8125,9.9375L 16.0625,6.1875 Z ' })
                )
            );
        }
    }]);

    return MdiPencilLock;
}(React.Component);

exports.default = MdiPencilLock;
module.exports = exports['default'];