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

var MdiLanguageSwift = function (_React$Component) {
    _inherits(MdiLanguageSwift, _React$Component);

    function MdiLanguageSwift() {
        _classCallCheck(this, MdiLanguageSwift);

        return _possibleConstructorReturn(this, (MdiLanguageSwift.__proto__ || Object.getPrototypeOf(MdiLanguageSwift)).apply(this, arguments));
    }

    _createClass(MdiLanguageSwift, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 17.0858,19.721C 14.7299,21.0819 11.4906,21.2217 8.23169,19.8249C 5.59298,18.7023 3.40353,16.7371 2,14.4918C 2.6737,15.0531 3.45967,15.5024 4.30177,15.8951C 7.66733,17.4726 11.0322,17.3646 13.3967,15.8951C 10.0282,13.3126 7.16496,9.9441 5.0317,7.1935C 4.58238,6.7443 4.24553,6.1829 3.90868,5.6776C 12.1892,11.7293 11.8328,13.2673 6.32261,4.667C 11.207,9.6075 15.7547,12.4146 15.7547,12.4146C 15.9051,12.4994 16.0212,12.5701 16.1146,12.6332C 16.2131,12.3828 16.2994,12.1228 16.3721,11.8533C 17.158,8.9901 16.26,5.7337 14.2948,3.0391C 18.842,5.7899 21.5371,10.9548 20.414,15.2778C 20.3847,15.3944 20.3529,15.5095 20.3579,15.671C 22.6032,18.4782 21.9859,21.4535 21.7052,20.8921C 20.4871,18.5085 18.2322,19.2374 17.0858,19.721L 17.0858,19.721 Z ' })
                )
            );
        }
    }]);

    return MdiLanguageSwift;
}(React.Component);

exports.default = MdiLanguageSwift;
module.exports = exports['default'];