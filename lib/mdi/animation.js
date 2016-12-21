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

var MdiAnimation = function (_React$Component) {
    _inherits(MdiAnimation, _React$Component);

    function MdiAnimation() {
        _classCallCheck(this, MdiAnimation);

        return _possibleConstructorReturn(this, (MdiAnimation.__proto__ || Object.getPrototypeOf(MdiAnimation)).apply(this, arguments));
    }

    _createClass(MdiAnimation, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 4,2C 2.892,2 2,2.892 2,4L 2,14L 4,14L 4,4L 14,4L 14,2L 4,2 Z M 8,6C 6.892,6 6,6.892 6,8L 6,18L 8,18L 8,8L 18,8L 18,6L 8,6 Z M 12,10C 10.892,10 10,10.892 10,12L 10,20C 10,21.108 10.892,22 12,22L 20,22C 21.108,22 22,21.108 22,20L 22,12C 22,10.892 21.108,10 20,10L 12,10 Z ' })
                )
            );
        }
    }]);

    return MdiAnimation;
}(React.Component);

exports.default = MdiAnimation;
module.exports = exports['default'];