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

var MdiFormatHeaderEqual = function (_React$Component) {
    _inherits(MdiFormatHeaderEqual, _React$Component);

    function MdiFormatHeaderEqual() {
        _classCallCheck(this, MdiFormatHeaderEqual);

        return _possibleConstructorReturn(this, (MdiFormatHeaderEqual.__proto__ || Object.getPrototypeOf(MdiFormatHeaderEqual)).apply(this, arguments));
    }

    _createClass(MdiFormatHeaderEqual, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 4,4L 6,4L 6,10L 10,10L 10,4L 12,4L 12,18L 10,18L 10,12L 6,12L 6,18L 4,18L 4,4 Z M 14,10L 14,8L 21,8L 21,10L 14,10 Z M 14,12L 21,12L 21,14L 14,14L 14,12 Z ' })
                )
            );
        }
    }]);

    return MdiFormatHeaderEqual;
}(React.Component);

exports.default = MdiFormatHeaderEqual;
module.exports = exports['default'];