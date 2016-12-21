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

var MdiFullscreen = function (_React$Component) {
    _inherits(MdiFullscreen, _React$Component);

    function MdiFullscreen() {
        _classCallCheck(this, MdiFullscreen);

        return _possibleConstructorReturn(this, (MdiFullscreen.__proto__ || Object.getPrototypeOf(MdiFullscreen)).apply(this, arguments));
    }

    _createClass(MdiFullscreen, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 5,5L 10,5L 10,7L 7,7L 7,10L 5,10L 5,5 Z M 14,5.00001L 19,5.00001L 19,10L 17,10L 17,7.00001L 14,7.00001L 14,5.00001 Z M 17,14L 19,14L 19,19L 14,19L 14,17L 17,17L 17,14 Z M 10,17L 10,19L 5,19L 5,14L 7,14L 7,17L 10,17 Z ' })
                )
            );
        }
    }]);

    return MdiFullscreen;
}(React.Component);

exports.default = MdiFullscreen;
module.exports = exports['default'];