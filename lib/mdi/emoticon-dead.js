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

var MdiEmoticonDead = function (_React$Component) {
    _inherits(MdiEmoticonDead, _React$Component);

    function MdiEmoticonDead() {
        _classCallCheck(this, MdiEmoticonDead);

        return _possibleConstructorReturn(this, (MdiEmoticonDead.__proto__ || Object.getPrototypeOf(MdiEmoticonDead)).apply(this, arguments));
    }

    _createClass(MdiEmoticonDead, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 11.99,2C 6.47,2 2,6.47 2,12C 2,17.53 6.47,22 11.99,22C 17.51,22 22,17.53 22,12C 22,6.47 17.52,2 11.99,2 Z M 12,20C 7.58,20 4,16.42 4,12C 4,7.58 7.58,4 12,4C 16.42,4 20,7.58 20,12C 20,16.42 16.42,20 12,20 Z M 16.18,7.76L 15.12,8.82L 14.06,7.76L 13,8.82L 14.06,9.88L 13,10.94L 14.06,12L 15.12,10.94L 16.18,12L 17.24,10.94L 16.18,9.88L 17.24,8.82L 16.18,7.76 Z M 7.82,12L 8.88,10.94L 9.94,12L 11,10.94L 9.94,9.88L 11,8.82L 9.94,7.76L 8.88,8.82L 7.82,7.76L 6.76,8.82L 7.82,9.88L 6.76,10.94L 7.82,12 Z M 12,14C 9.67,14 7.69,15.46 6.89,17.5L 17.11,17.5C 16.31,15.46 14.33,14 12,14 Z ' })
                )
            );
        }
    }]);

    return MdiEmoticonDead;
}(React.Component);

exports.default = MdiEmoticonDead;
module.exports = exports['default'];