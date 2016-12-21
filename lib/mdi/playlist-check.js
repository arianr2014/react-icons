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

var MdiPlaylistCheck = function (_React$Component) {
    _inherits(MdiPlaylistCheck, _React$Component);

    function MdiPlaylistCheck() {
        _classCallCheck(this, MdiPlaylistCheck);

        return _possibleConstructorReturn(this, (MdiPlaylistCheck.__proto__ || Object.getPrototypeOf(MdiPlaylistCheck)).apply(this, arguments));
    }

    _createClass(MdiPlaylistCheck, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 14,10L 2,10L 2,12L 14,12L 14,10 Z M 14,6L 2,6L 2,8L 14,8L 14,6 Z M 2,16L 10,16L 10,14L 2,14L 2,16 Z M 21.5,11.5L 23,13L 16.01,20L 11.5,15.5L 13,14L 16.01,17L 21.5,11.5 Z ' })
                )
            );
        }
    }]);

    return MdiPlaylistCheck;
}(React.Component);

exports.default = MdiPlaylistCheck;
module.exports = exports['default'];