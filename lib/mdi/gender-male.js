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

var MdiGenderMale = function (_React$Component) {
    _inherits(MdiGenderMale, _React$Component);

    function MdiGenderMale() {
        _classCallCheck(this, MdiGenderMale);

        return _possibleConstructorReturn(this, (MdiGenderMale.__proto__ || Object.getPrototypeOf(MdiGenderMale)).apply(this, arguments));
    }

    _createClass(MdiGenderMale, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 9,9C 10.2947,9 11.4937,9.41009 12.474,10.1075L 17.5815,5L 13,5L 13,3L 21,3L 21,11L 19,11L 19,6.40989L 13.8889,11.5209C 14.5885,12.5022 15,13.7031 15,15C 15,18.3137 12.3137,21 9,21C 5.68629,21 3,18.3137 3,15C 3,11.6863 5.68629,9 9,9 Z M 9,11C 6.79086,11 5,12.7909 5,15C 5,17.2091 6.79086,19 9,19C 11.2091,19 13,17.2091 13,15C 13,12.7909 11.2091,11 9,11 Z ' })
                )
            );
        }
    }]);

    return MdiGenderMale;
}(React.Component);

exports.default = MdiGenderMale;
module.exports = exports['default'];