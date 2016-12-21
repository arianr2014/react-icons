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

var MdiFormatHeaderDown = function (_React$Component) {
    _inherits(MdiFormatHeaderDown, _React$Component);

    function MdiFormatHeaderDown() {
        _classCallCheck(this, MdiFormatHeaderDown);

        return _possibleConstructorReturn(this, (MdiFormatHeaderDown.__proto__ || Object.getPrototypeOf(MdiFormatHeaderDown)).apply(this, arguments));
    }

    _createClass(MdiFormatHeaderDown, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 2,4.00001L 4,4.00001L 4,10L 8,10L 8,4.00001L 10,4.00001L 10,18L 8,18L 8,12L 4,12L 4,18L 2,18L 2,4.00001 Z M 20.5862,8.585L 17,12.172L 13.4142,8.585L 12.0002,9.99902L 17,15L 22.0002,9.99902L 20.5862,8.585 Z ' })
                )
            );
        }
    }]);

    return MdiFormatHeaderDown;
}(React.Component);

exports.default = MdiFormatHeaderDown;
module.exports = exports['default'];