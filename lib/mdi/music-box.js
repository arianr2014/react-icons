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

var MdiMusicBox = function (_React$Component) {
    _inherits(MdiMusicBox, _React$Component);

    function MdiMusicBox() {
        _classCallCheck(this, MdiMusicBox);

        return _possibleConstructorReturn(this, (MdiMusicBox.__proto__ || Object.getPrototypeOf(MdiMusicBox)).apply(this, arguments));
    }

    _createClass(MdiMusicBox, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 16,9L 13,9L 13,14.5C 13,15.88 11.88,17 10.5,17C 9.12,17 8,15.88 8,14.5C 8,13.12 9.12,12 10.5,12C 11.07,12 11.58,12.19 12,12.51L 12,7L 16,7M 19,3.00002L 4.99999,3.00002C 3.9,3.00002 3,3.90002 3,5.00002L 3,19C 3,20.1 3.9,21 4.99999,21L 19,21C 20.1,21 21,20.1 21,19L 21,5.00002C 21,3.90002 20.1,3.00002 19,3.00002 Z ' })
                )
            );
        }
    }]);

    return MdiMusicBox;
}(React.Component);

exports.default = MdiMusicBox;
module.exports = exports['default'];