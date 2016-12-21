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

var MdiVectorCircle = function (_React$Component) {
    _inherits(MdiVectorCircle, _React$Component);

    function MdiVectorCircle() {
        _classCallCheck(this, MdiVectorCircle);

        return _possibleConstructorReturn(this, (MdiVectorCircle.__proto__ || Object.getPrototypeOf(MdiVectorCircle)).apply(this, arguments));
    }

    _createClass(MdiVectorCircle, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 8.99875,2.0025L 8.99875,4.0575C 6.71875,4.9175 4.9175,6.71875 4.0525,8.99875L 2.0025,8.99875L 2.0025,15L 4.0575,15C 4.9175,17.28 6.71875,19.0875 8.99875,19.9513L 8.99875,22.0025L 15,22.0025L 15,19.9412C 17.28,19.0825 19.0875,17.28 19.9513,15L 22.0025,15L 22.0025,8.99875L 19.9413,8.99875C 19.0825,6.71875 17.28,4.9175 15,4.0525L 15,2.0025M 11.0013,3.99875L 12.9975,3.99875L 12.9975,6.00125L 11.0013,6.00125M 8.99875,6.25L 8.99875,7.9975L 15,7.9975L 15,6.25C 16.1763,6.86 17.1388,7.8225 17.7538,8.99875L 16.0012,8.99875L 16.0012,15L 17.7538,15C 17.1388,16.1762 16.1763,17.1388 15,17.7537L 15,16.0012L 8.99875,16.0012L 8.99875,17.7537C 7.8225,17.1388 6.86,16.1762 6.25,15L 7.9975,15L 7.9975,8.99875L 6.25,8.99875C 6.86,7.8225 7.8225,6.86 8.99875,6.25 Z M 3.99875,11.0012L 6.00125,11.0012L 6.00125,12.9975L 3.99875,12.9975M 17.9975,11.0012L 20,11.0012L 20,12.9975L 17.9975,12.9975M 11.0013,17.9975L 12.9975,17.9975L 12.9975,20L 11.0013,20' })
                )
            );
        }
    }]);

    return MdiVectorCircle;
}(React.Component);

exports.default = MdiVectorCircle;
module.exports = exports['default'];