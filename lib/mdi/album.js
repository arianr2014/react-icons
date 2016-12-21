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

var MdiAlbum = function (_React$Component) {
    _inherits(MdiAlbum, _React$Component);

    function MdiAlbum() {
        _classCallCheck(this, MdiAlbum);

        return _possibleConstructorReturn(this, (MdiAlbum.__proto__ || Object.getPrototypeOf(MdiAlbum)).apply(this, arguments));
    }

    _createClass(MdiAlbum, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 12,11C 11.45,11 11,11.45 11,12C 11,12.55 11.45,13 12,13C 12.55,13 13,12.55 13,12C 13,11.45 12.55,11 12,11 Z M 12,16.5C 9.51,16.5 7.5,14.49 7.5,12C 7.5,9.51 9.51,7.5 12,7.5C 14.49,7.5 16.5,9.51 16.5,12C 16.5,14.49 14.49,16.5 12,16.5 Z M 12,2C 6.48,2 2,6.48 2,12C 2,17.52 6.48,22 12,22C 17.52,22 22,17.52 22,12C 22,6.48 17.52,2 12,2 Z ' })
                )
            );
        }
    }]);

    return MdiAlbum;
}(React.Component);

exports.default = MdiAlbum;
module.exports = exports['default'];