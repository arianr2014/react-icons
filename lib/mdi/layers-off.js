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

var MdiLayersOff = function (_React$Component) {
    _inherits(MdiLayersOff, _React$Component);

    function MdiLayersOff() {
        _classCallCheck(this, MdiLayersOff);

        return _possibleConstructorReturn(this, (MdiLayersOff.__proto__ || Object.getPrototypeOf(MdiLayersOff)).apply(this, arguments));
    }

    _createClass(MdiLayersOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 3.27,1L 2,2.27L 6.22,6.49L 3,9L 4.63,10.27L 12,16L 14.1,14.37L 15.53,15.8L 12,18.54L 4.63,12.81L 3,14.07L 12,21.07L 16.95,17.22L 20.73,21L 22,19.73L 3.27,1 Z M 19.36,10.27L 21,9L 12,2L 9.09,4.27L 16.96,12.15L 19.36,10.27 Z M 19.81,14.99L 21,14.07L 19.57,12.64L 18.38,13.56L 19.81,14.99 Z ' })
                )
            );
        }
    }]);

    return MdiLayersOff;
}(React.Component);

exports.default = MdiLayersOff;
module.exports = exports['default'];