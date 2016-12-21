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

var MdiTrophyOutline = function (_React$Component) {
    _inherits(MdiTrophyOutline, _React$Component);

    function MdiTrophyOutline() {
        _classCallCheck(this, MdiTrophyOutline);

        return _possibleConstructorReturn(this, (MdiTrophyOutline.__proto__ || Object.getPrototypeOf(MdiTrophyOutline)).apply(this, arguments));
    }

    _createClass(MdiTrophyOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 2,2L 2,11C 2,12 3,13 4,13L 6.19922,13C 6.59922,15 7.9,16.7 11,17L 11,19.0996C 8.8,19.2996 8,20.3992 8,21.6992L 8,22L 16,22L 16,21.6992C 16,20.3992 15.2,19.2996 13,19.0996L 13,17C 16.1,16.7 17.4008,15 17.8008,13L 20,13C 21,13 22,12 22,11L 22,2L 18,2C 17.1,2 16,3 16,4L 8,4C 8,3 6.9,2 6,2L 2,2 Z M 4,4L 6,4L 6,6L 6,11L 4,11L 4,4 Z M 18,4L 20,4L 20,11L 18,11L 18,6L 18,4 Z M 8,6L 16,6L 16,11.5C 16,13.433 15.415,15 12,15C 8.58503,15 8,13.433 8,11.5L 8,6 Z ' })
                )
            );
        }
    }]);

    return MdiTrophyOutline;
}(React.Component);

exports.default = MdiTrophyOutline;
module.exports = exports['default'];