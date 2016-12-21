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

var MdiArrowCompress = function (_React$Component) {
    _inherits(MdiArrowCompress, _React$Component);

    function MdiArrowCompress() {
        _classCallCheck(this, MdiArrowCompress);

        return _possibleConstructorReturn(this, (MdiArrowCompress.__proto__ || Object.getPrototypeOf(MdiArrowCompress)).apply(this, arguments));
    }

    _createClass(MdiArrowCompress, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'miter', d: 'M 19.5,3.0898L 15,7.5898L 15,4L 13,4L 13,11L 20,11L 20,9L 16.4102,9L 20.9102,4.5L 19.5,3.0898 Z M 4,13L 4,15L 7.5898,15L 3.0898,19.5L 4.5,20.91L 9,16.41L 9,20L 11,20L 11,13L 4,13 Z ' })
                )
            );
        }
    }]);

    return MdiArrowCompress;
}(React.Component);

exports.default = MdiArrowCompress;
module.exports = exports['default'];