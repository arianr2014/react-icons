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

var MdiXml = function (_React$Component) {
    _inherits(MdiXml, _React$Component);

    function MdiXml() {
        _classCallCheck(this, MdiXml);

        return _possibleConstructorReturn(this, (MdiXml.__proto__ || Object.getPrototypeOf(MdiXml)).apply(this, arguments));
    }

    _createClass(MdiXml, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 12.8931,2.98876L 14.8494,3.40458L 11.1069,21.0112L 9.15065,20.5954L 12.8931,2.98876 Z M 19.5858,11.9926L 16,8.40686L 16,5.57844L 22.4216,12L 16,18.4103L 16,15.5784L 19.5858,11.9926 Z M 1.57842,12.0031L 8,5.58148L 8,8.4099L 4.41421,11.9957L 8,15.5815L 8,18.4134L 1.57842,12.0031 Z ' })
                )
            );
        }
    }]);

    return MdiXml;
}(React.Component);

exports.default = MdiXml;
module.exports = exports['default'];