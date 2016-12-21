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

var MdiEmoticonExcited = function (_React$Component) {
    _inherits(MdiEmoticonExcited, _React$Component);

    function MdiEmoticonExcited() {
        _classCallCheck(this, MdiEmoticonExcited);

        return _possibleConstructorReturn(this, (MdiEmoticonExcited.__proto__ || Object.getPrototypeOf(MdiEmoticonExcited)).apply(this, arguments));
    }

    _createClass(MdiEmoticonExcited, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 11.99,2C 6.47,2 2,6.47 2,12C 2,17.53 6.47,22 11.99,22C 17.51,22 22,17.53 22,12C 22,6.47 17.52,2 11.99,2 Z M 12,20C 7.58,20 4,16.42 4,12C 4,7.58 7.58,4 12,4C 16.42,4 20,7.58 20,12C 20,16.42 16.42,20 12,20 Z M 13,9.94L 14.06,11L 15.12,9.94L 16.18,11L 17.24,9.94L 15.12,7.82L 13,9.94 Z M 8.88,9.94L 9.94,11L 11,9.94L 8.88,7.82L 6.76,9.94L 7.82,11L 8.88,9.94 Z M 12,17.5C 14.33,17.5 16.31,16.04 17.11,14L 6.89,14C 7.69,16.04 9.67,17.5 12,17.5 Z ' })
                )
            );
        }
    }]);

    return MdiEmoticonExcited;
}(React.Component);

exports.default = MdiEmoticonExcited;
module.exports = exports['default'];