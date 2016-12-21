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

var MdiPlaylistPlus = function (_React$Component) {
    _inherits(MdiPlaylistPlus, _React$Component);

    function MdiPlaylistPlus() {
        _classCallCheck(this, MdiPlaylistPlus);

        return _possibleConstructorReturn(this, (MdiPlaylistPlus.__proto__ || Object.getPrototypeOf(MdiPlaylistPlus)).apply(this, arguments));
    }

    _createClass(MdiPlaylistPlus, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 2,16L 10,16L 10,14L 2,14M 18,14L 18,10L 16,10L 16,14L 12,14L 12,16L 16,16L 16,20L 18,20L 18,16L 22,16L 22,14M 14,6L 2,6L 2,8L 14,8M 14,10L 2,10L 2,12L 14,12L 14,10 Z ' })
                )
            );
        }
    }]);

    return MdiPlaylistPlus;
}(React.Component);

exports.default = MdiPlaylistPlus;
module.exports = exports['default'];