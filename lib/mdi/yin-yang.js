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

var MdiYinYang = function (_React$Component) {
    _inherits(MdiYinYang, _React$Component);

    function MdiYinYang() {
        _classCallCheck(this, MdiYinYang);

        return _possibleConstructorReturn(this, (MdiYinYang.__proto__ || Object.getPrototypeOf(MdiYinYang)).apply(this, arguments));
    }

    _createClass(MdiYinYang, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 12,2C 17.5228,2 22,6.47716 22,12C 22,17.5228 17.5228,22 12,22C 6.47715,22 2,17.5228 2,12C 2,6.47716 6.47715,2 12,2 Z M 12,4.00001C 7.58172,4.00001 4,7.58173 4,12C 4,16.4183 7.58172,20 12,20C 9.79086,20 8,18.2091 8,16C 8,13.7909 9.79086,12 12,12C 14.2091,12 16,10.2091 16,8C 16,5.79086 14.2091,4.00001 12,4.00001 Z M 12,6.50001C 12.8284,6.50001 13.5,7.17158 13.5,8C 13.5,8.82843 12.8284,9.5 12,9.5C 11.1716,9.5 10.5,8.82843 10.5,8C 10.5,7.17158 11.1716,6.50001 12,6.50001 Z M 12,14.5C 11.1716,14.5 10.5,15.1716 10.5,16C 10.5,16.8284 11.1716,17.5 12,17.5C 12.8284,17.5 13.5,16.8284 13.5,16C 13.5,15.1716 12.8284,14.5 12,14.5 Z ' })
                )
            );
        }
    }]);

    return MdiYinYang;
}(React.Component);

exports.default = MdiYinYang;
module.exports = exports['default'];