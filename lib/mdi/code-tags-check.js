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

var MdiCodeTagsCheck = function (_React$Component) {
    _inherits(MdiCodeTagsCheck, _React$Component);

    function MdiCodeTagsCheck() {
        _classCallCheck(this, MdiCodeTagsCheck);

        return _possibleConstructorReturn(this, (MdiCodeTagsCheck.__proto__ || Object.getPrototypeOf(MdiCodeTagsCheck)).apply(this, arguments));
    }

    _createClass(MdiCodeTagsCheck, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 6.5918,3.4062L 1.99414,8.002L 6.5918,12.5977L 8.00586,11.1836L 4.82227,8.002L 8.00586,4.8203L 6.5918,3.4062 Z M 12.4082,3.4062L 10.9941,4.8203L 14.1777,8.002L 10.9941,11.1836L 12.4082,12.5977L 17.0059,8.002L 12.4082,3.4062 Z M 21.5898,11.5898L 13.5,19.6797L 9.83008,16L 8.41992,17.4102L 13.5,22.5L 23,13L 21.5898,11.5898 Z ' })
                )
            );
        }
    }]);

    return MdiCodeTagsCheck;
}(React.Component);

exports.default = MdiCodeTagsCheck;
module.exports = exports['default'];