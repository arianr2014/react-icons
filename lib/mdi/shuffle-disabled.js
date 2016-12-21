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

var MdiShuffleDisabled = function (_React$Component) {
    _inherits(MdiShuffleDisabled, _React$Component);

    function MdiShuffleDisabled() {
        _classCallCheck(this, MdiShuffleDisabled);

        return _possibleConstructorReturn(this, (MdiShuffleDisabled.__proto__ || Object.getPrototypeOf(MdiShuffleDisabled)).apply(this, arguments));
    }

    _createClass(MdiShuffleDisabled, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 16.0012,4.5025L 16.0012,6.9925L 5,7.00625L 5,8.99875L 16.0012,8.99875L 16.0012,11.4987L 19.5025,7.9975M 16.0012,12.5L 16.0012,14.99L 5,15.005L 5,17.0025L 16.0012,17.0025L 16.0012,19.5025L 19.5025,16.0012' })
                )
            );
        }
    }]);

    return MdiShuffleDisabled;
}(React.Component);

exports.default = MdiShuffleDisabled;
module.exports = exports['default'];