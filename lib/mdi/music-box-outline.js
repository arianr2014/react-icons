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

var MdiMusicBoxOutline = function (_React$Component) {
    _inherits(MdiMusicBoxOutline, _React$Component);

    function MdiMusicBoxOutline() {
        _classCallCheck(this, MdiMusicBoxOutline);

        return _possibleConstructorReturn(this, (MdiMusicBoxOutline.__proto__ || Object.getPrototypeOf(MdiMusicBoxOutline)).apply(this, arguments));
    }

    _createClass(MdiMusicBoxOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 16,9L 13,9L 13,14.5C 13,15.88 11.88,17 10.5,17C 9.12,17 8,15.88 8,14.5C 8,13.12 9.12,12 10.5,12C 11.07,12 11.58,12.19 12,12.51L 12,7L 16,7L 16,9 Z M 19,3.00002C 20.1,3.00002 21,3.90002 21,5.00002L 21,19C 21,20.1 20.1,21 19,21L 4.99999,21C 3.9,21 3,20.1 3,19L 3,5.00002C 3,3.90002 3.9,3.00002 4.99999,3.00002L 19,3.00002 Z M 5,5L 5,19L 19,19L 19,5L 5,5 Z ' })
                )
            );
        }
    }]);

    return MdiMusicBoxOutline;
}(React.Component);

exports.default = MdiMusicBoxOutline;
module.exports = exports['default'];