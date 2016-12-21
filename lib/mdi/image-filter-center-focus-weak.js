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

var MdiImageFilterCenterFocusWeak = function (_React$Component) {
    _inherits(MdiImageFilterCenterFocusWeak, _React$Component);

    function MdiImageFilterCenterFocusWeak() {
        _classCallCheck(this, MdiImageFilterCenterFocusWeak);

        return _possibleConstructorReturn(this, (MdiImageFilterCenterFocusWeak.__proto__ || Object.getPrototypeOf(MdiImageFilterCenterFocusWeak)).apply(this, arguments));
    }

    _createClass(MdiImageFilterCenterFocusWeak, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 5,15L 2.9975,15L 2.9975,18.9988C 2.9975,20.0975 3.90125,21.0012 5,21.0012L 8.99875,21.0012L 8.99875,18.9988L 5,18.9988M 5,5L 8.99875,5L 8.99875,2.9978L 5,2.9978C 3.90125,2.9978 2.9975,3.90125 2.9975,5L 2.9975,8.99875L 5,8.99875M 18.9988,2.9978L 15,2.9978L 15,5L 18.9988,5L 18.9988,8.99875L 21.0013,8.99875L 21.0013,5C 21.0013,3.90125 20.0975,2.9978 18.9988,2.9978 Z M 18.9988,18.9988L 15,18.9988L 15,21.0012L 18.9988,21.0012C 20.0975,21.0012 21.0013,20.0975 21.0013,18.9988L 21.0013,15L 18.9988,15M 12.0025,7.9975C 9.79,7.9975 7.9975,9.79 7.9975,12.0025C 7.9975,14.2087 9.79,16.0012 12.0025,16.0012C 14.2087,16.0012 16.0012,14.2087 16.0012,12.0025C 16.0012,9.79 14.2087,7.9975 12.0025,7.9975 Z M 12.0025,13.9987C 10.8988,13.9987 10,13.1 10,12.0025C 10,10.8987 10.8988,10 12.0025,10C 13.1,10 13.9987,10.8987 13.9987,12.0025C 13.9987,13.1 13.1,13.9987 12.0025,13.9987 Z ' })
                )
            );
        }
    }]);

    return MdiImageFilterCenterFocusWeak;
}(React.Component);

exports.default = MdiImageFilterCenterFocusWeak;
module.exports = exports['default'];