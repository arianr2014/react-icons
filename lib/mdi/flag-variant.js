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

var MdiFlagVariant = function (_React$Component) {
    _inherits(MdiFlagVariant, _React$Component);

    function MdiFlagVariant() {
        _classCallCheck(this, MdiFlagVariant);

        return _possibleConstructorReturn(this, (MdiFlagVariant.__proto__ || Object.getPrototypeOf(MdiFlagVariant)).apply(this, arguments));
    }

    _createClass(MdiFlagVariant, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 6,3C 6.55229,3 7,3.44771 7,4L 7,4.875C 8.0625,4.4375 9.5,4 11,4C 14,4 14,6 16,6C 19,6 20,4 20,4L 20,12C 20,12 19,14 16,14C 13,14 13,12 11,12C 8,12 7,14 7,14L 7,21L 5,21L 5,4C 5,3.44771 5.44771,3 6,3 Z ' })
                )
            );
        }
    }]);

    return MdiFlagVariant;
}(React.Component);

exports.default = MdiFlagVariant;
module.exports = exports['default'];