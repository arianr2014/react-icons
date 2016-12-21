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

var MdiFullscreenExit = function (_React$Component) {
    _inherits(MdiFullscreenExit, _React$Component);

    function MdiFullscreenExit() {
        _classCallCheck(this, MdiFullscreenExit);

        return _possibleConstructorReturn(this, (MdiFullscreenExit.__proto__ || Object.getPrototypeOf(MdiFullscreenExit)).apply(this, arguments));
    }

    _createClass(MdiFullscreenExit, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 14,14L 19,14L 19,16L 16,16L 16,19L 14,19L 14,14 Z M 5,14L 10,14L 10,19L 8,19L 8,16L 5,16L 5,14 Z M 8,5L 10,5L 10,10L 5,10L 5,8L 8,8L 8,5 Z M 19,8L 19,10L 14,10L 14,5L 16,5L 16,8L 19,8 Z ' })
                )
            );
        }
    }]);

    return MdiFullscreenExit;
}(React.Component);

exports.default = MdiFullscreenExit;
module.exports = exports['default'];