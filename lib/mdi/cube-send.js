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

var MdiCubeSend = function (_React$Component) {
    _inherits(MdiCubeSend, _React$Component);

    function MdiCubeSend() {
        _classCallCheck(this, MdiCubeSend);

        return _possibleConstructorReturn(this, (MdiCubeSend.__proto__ || Object.getPrototypeOf(MdiCubeSend)).apply(this, arguments));
    }

    _createClass(MdiCubeSend, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 16.0012,3.99875L 8.99875,8.0425L 8.99875,15.9575L 16.0012,20L 22.9975,15.9575L 22.9975,8.0425M 16.0012,6.30875L 19.795,8.50125L 16.0012,10.6887L 12.2075,8.50125M 0,7.0025L 0,8.99875L 7.0025,8.99875L 7.0025,7.0025M 11.0013,10.1125L 15,12.4213L 15,17.1087L 11.0013,14.805M 21.0013,10.1125L 21.0013,14.805L 17.0025,17.1087L 17.0025,12.4213M 2.0025,11.0012L 2.0025,12.9975L 7.0025,12.9975L 7.0025,11.0012M 3.99875,15L 3.99875,17.0025L 7.0025,17.0025L 7.0025,15' })
                )
            );
        }
    }]);

    return MdiCubeSend;
}(React.Component);

exports.default = MdiCubeSend;
module.exports = exports['default'];