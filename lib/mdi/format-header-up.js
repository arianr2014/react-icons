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

var MdiFormatHeaderUp = function (_React$Component) {
    _inherits(MdiFormatHeaderUp, _React$Component);

    function MdiFormatHeaderUp() {
        _classCallCheck(this, MdiFormatHeaderUp);

        return _possibleConstructorReturn(this, (MdiFormatHeaderUp.__proto__ || Object.getPrototypeOf(MdiFormatHeaderUp)).apply(this, arguments));
    }

    _createClass(MdiFormatHeaderUp, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 2,4.00001L 4,4.00001L 4,10L 8,10L 8,4.00001L 10,4.00001L 10,18L 8,18L 8,12L 4,12L 4,18L 2,18L 2,4.00001 Z M 20.5862,14.415L 17,10.828L 13.4142,14.415L 12.0002,13.001L 17,8L 22.0002,13.001L 20.5862,14.415 Z ' })
                )
            );
        }
    }]);

    return MdiFormatHeaderUp;
}(React.Component);

exports.default = MdiFormatHeaderUp;
module.exports = exports['default'];