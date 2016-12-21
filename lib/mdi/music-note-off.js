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

var MdiMusicNoteOff = function (_React$Component) {
    _inherits(MdiMusicNoteOff, _React$Component);

    function MdiMusicNoteOff() {
        _classCallCheck(this, MdiMusicNoteOff);

        return _possibleConstructorReturn(this, (MdiMusicNoteOff.__proto__ || Object.getPrototypeOf(MdiMusicNoteOff)).apply(this, arguments));
    }

    _createClass(MdiMusicNoteOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 12,3L 12,8.6758L 15,11.6758L 15,6L 19,6L 19,3L 12,3 Z M 5.27734,4.5L 4,5.7676L 10.2559,12.0254C 7.88662,12.1549 6,14.0984 6,16.5C 6,18.9853 8.01472,21 10.5,21C 12.9016,21 14.8451,19.1134 14.9746,16.7441L 19.6836,21.4531L 20.957,20.1797L 15,14.2227L 12,11.2227L 5.27734,4.5 Z ' })
                )
            );
        }
    }]);

    return MdiMusicNoteOff;
}(React.Component);

exports.default = MdiMusicNoteOff;
module.exports = exports['default'];