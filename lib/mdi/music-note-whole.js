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

var MdiMusicNoteWhole = function (_React$Component) {
    _inherits(MdiMusicNoteWhole, _React$Component);

    function MdiMusicNoteWhole() {
        _classCallCheck(this, MdiMusicNoteWhole);

        return _possibleConstructorReturn(this, (MdiMusicNoteWhole.__proto__ || Object.getPrototypeOf(MdiMusicNoteWhole)).apply(this, arguments));
    }

    _createClass(MdiMusicNoteWhole, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 10.5,12C 8.59529,12.0027 6.89857,13.2042 6.26367,15L 3,15L 3,18L 6.26367,18C 6.89857,19.7958 8.59529,20.9973 10.5,21C 12.4047,20.9973 14.1014,19.7958 14.7363,18L 19,18L 19,15L 14.7363,15C 14.1014,13.2042 12.4047,12.0027 10.5,12 Z M 10.5,14.5C 11.6046,14.5 12.5,15.3954 12.5,16.5C 12.5,17.6046 11.6046,18.5 10.5,18.5C 9.39543,18.5 8.5,17.6046 8.5,16.5C 8.5,15.3954 9.39543,14.5 10.5,14.5 Z ' })
                )
            );
        }
    }]);

    return MdiMusicNoteWhole;
}(React.Component);

exports.default = MdiMusicNoteWhole;
module.exports = exports['default'];