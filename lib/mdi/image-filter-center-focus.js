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

var MdiImageFilterCenterFocus = function (_React$Component) {
    _inherits(MdiImageFilterCenterFocus, _React$Component);

    function MdiImageFilterCenterFocus() {
        _classCallCheck(this, MdiImageFilterCenterFocus);

        return _possibleConstructorReturn(this, (MdiImageFilterCenterFocus.__proto__ || Object.getPrototypeOf(MdiImageFilterCenterFocus)).apply(this, arguments));
    }

    _createClass(MdiImageFilterCenterFocus, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 12,9C 10.34,9 9,10.34 9,12C 9,13.66 10.34,15 12,15C 13.66,15 15,13.66 15,12C 15,10.34 13.66,9 12,9 Z M 19,19L 15,19L 15,21L 19,21C 20.1,21 21,20.1 21,19L 21,15L 19,15M 19,3L 15,3L 15,5L 19,5L 19,9L 21,9L 21,5C 21,3.9 20.1,3 19,3 Z M 5,5L 9,5L 9,3L 5,3C 3.9,3 3,3.9 3,5L 3,9L 5,9M 5,15L 3,15L 3,19C 3,20.1 3.9,21 5,21L 9,21L 9,19L 5,19L 5,15 Z ' })
                )
            );
        }
    }]);

    return MdiImageFilterCenterFocus;
}(React.Component);

exports.default = MdiImageFilterCenterFocus;
module.exports = exports['default'];