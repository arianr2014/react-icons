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

var MdiLanguageHtml5 = function (_React$Component) {
    _inherits(MdiLanguageHtml5, _React$Component);

    function MdiLanguageHtml5() {
        _classCallCheck(this, MdiLanguageHtml5);

        return _possibleConstructorReturn(this, (MdiLanguageHtml5.__proto__ || Object.getPrototypeOf(MdiLanguageHtml5)).apply(this, arguments));
    }

    _createClass(MdiLanguageHtml5, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 12,17.5625L 16.0724,16.4335L 16.6175,10.3333L 9.37668,10.3333L 9.19507,8.29867L 16.7984,8.29867L 16.9763,6.31168L 7.02367,6.31168L 7.55964,12.3202L 14.4457,12.3202L 14.2151,14.8972L 12,15.4951L 9.78436,14.8984L 9.63665,13.2433L 7.64207,13.2433L 7.92665,16.4335L 12,17.5625 Z M 4.06844,3.00002L 19.9316,3.00002L 18.4854,19.2011L 11.9961,21L 5.51287,19.2002L 4.06844,3.00002 Z ' })
                )
            );
        }
    }]);

    return MdiLanguageHtml5;
}(React.Component);

exports.default = MdiLanguageHtml5;
module.exports = exports['default'];