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

var MdiFlagCheckered = function (_React$Component) {
    _inherits(MdiFlagCheckered, _React$Component);

    function MdiFlagCheckered() {
        _classCallCheck(this, MdiFlagCheckered);

        return _possibleConstructorReturn(this, (MdiFlagCheckered.__proto__ || Object.getPrototypeOf(MdiFlagCheckered)).apply(this, arguments));
    }

    _createClass(MdiFlagCheckered, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 14.4,6L 20,6L 20,16L 13,16L 12.6,14L 7,14L 7,21L 5,21L 5,4L 14,4L 14.4,6 Z M 14,14L 16,14L 16,12L 18,12L 18,10L 16,10L 16,8.00001L 14,8.00001L 14,10L 13,8.00001L 13,6L 11,6L 11,8L 9,8L 9,6.00001L 7,6.00001L 7,8L 9,8L 9,10L 7,10L 7,12L 9,12L 9,10L 11,10L 11,12L 13,12L 13,10L 14,12L 14,14 Z M 11,10L 11,8L 13,8.00001L 13,10L 11,10 Z M 14,10L 16,10L 16,12L 14,12L 14,10 Z ' })
                )
            );
        }
    }]);

    return MdiFlagCheckered;
}(React.Component);

exports.default = MdiFlagCheckered;
module.exports = exports['default'];