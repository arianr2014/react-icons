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

var MdiMoveResizeVariant = function (_React$Component) {
    _inherits(MdiMoveResizeVariant, _React$Component);

    function MdiMoveResizeVariant() {
        _classCallCheck(this, MdiMoveResizeVariant);

        return _possibleConstructorReturn(this, (MdiMoveResizeVariant.__proto__ || Object.getPrototypeOf(MdiMoveResizeVariant)).apply(this, arguments));
    }

    _createClass(MdiMoveResizeVariant, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 1.88,0.463751L 0.463753,1.88L 5.58625,7.0025L 2.0025,7.0025L 2.0025,8.99875L 8.99875,8.99875L 8.99875,2.0025L 7.0025,2.0025L 7.0025,5.58625M 11.0013,7.0025L 11.0013,8.98875L 21.0013,8.98875L 21.0013,15L 22.9975,15L 22.9975,8.99875C 22.9975,7.9 22.1,7.0025 21.0013,7.0025M 7.0025,11.0012L 7.0025,21.0012C 7.0025,22.1 7.9,22.9975 8.99875,22.9975L 15,22.9975L 15,21.0113L 8.99875,21.0113L 8.99875,11.0012M 15.8788,14.4625L 14.4625,15.8787L 19.595,21.0113L 17.0025,21.0113L 17.0025,22.9975L 22.9975,22.9975L 22.9975,17.0025L 21.0013,17.0025L 21.0013,19.585' })
                )
            );
        }
    }]);

    return MdiMoveResizeVariant;
}(React.Component);

exports.default = MdiMoveResizeVariant;
module.exports = exports['default'];