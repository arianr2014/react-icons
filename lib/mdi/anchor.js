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

var MdiAnchor = function (_React$Component) {
    _inherits(MdiAnchor, _React$Component);

    function MdiAnchor() {
        _classCallCheck(this, MdiAnchor);

        return _possibleConstructorReturn(this, (MdiAnchor.__proto__ || Object.getPrototypeOf(MdiAnchor)).apply(this, arguments));
    }

    _createClass(MdiAnchor, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 12.0025,2.0025C 10.3413,2.0025 8.99875,3.34448 8.99875,5C 8.99875,6.27 9.8,7.4025 11.0013,7.8275L 11.0013,10L 7.9975,10L 7.9975,12.0025L 11.0013,12.0025L 11.0013,18.9162C 9.16,18.6275 7.53375,17.5688 6.53375,16.0012L 7.9975,16.0012L 7.9975,13.9987L 2.9975,13.9987L 2.9975,18.9988L 5,18.9988L 5,17.3C 6.5825,19.6087 9.19875,20.9963 12.0025,21.0012C 14.8,20.9963 17.4175,19.6137 18.9988,17.305L 18.9988,18.9988L 21.0013,18.9988L 21.0013,13.9987L 16.0012,13.9987L 16.0012,16.0012L 17.4613,16.0012C 16.46,17.5637 14.8337,18.6275 12.9975,18.9162L 12.9975,12.0025L 16.0012,12.0025L 16.0012,10L 12.9975,10L 12.9975,7.8225C 14.1988,7.4025 15,6.27 15,5C 15,3.34448 13.6575,2.0025 12.0025,2.0025 Z M 12.0025,3.99875C 12.5537,3.99875 12.9975,4.44875 12.9975,5C 12.9975,5.55125 12.5537,6.00125 12.0025,6.00125C 11.445,6.00125 11.0013,5.55125 11.0013,5C 11.0013,4.44875 11.445,3.99875 12.0025,3.99875 Z ' })
                )
            );
        }
    }]);

    return MdiAnchor;
}(React.Component);

exports.default = MdiAnchor;
module.exports = exports['default'];