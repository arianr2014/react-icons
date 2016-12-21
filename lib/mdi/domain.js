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

var MdiDomain = function (_React$Component) {
    _inherits(MdiDomain, _React$Component);

    function MdiDomain() {
        _classCallCheck(this, MdiDomain);

        return _possibleConstructorReturn(this, (MdiDomain.__proto__ || Object.getPrototypeOf(MdiDomain)).apply(this, arguments));
    }

    _createClass(MdiDomain, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 18,15L 16,15L 16,17L 18,17M 18,11L 16,11L 16,13L 18,13M 20,19L 12,19L 12,17L 14,17L 14,15L 12,15L 12,13L 14,13L 14,11L 12,11L 12,9L 20,9M 10,7L 8,7L 8,5L 10,5M 10,11L 8,11L 8,9L 10,9M 10,15L 8,15L 8,13L 10,13M 10,19L 8,19L 8,17L 10,17M 6,7L 4,7L 4,5L 6,5M 6,11L 4,11L 4,9L 6,9M 6,15L 4,15L 4,13L 6,13M 6,19L 4,19L 4,17L 6,17M 12,7L 12,3L 2,3L 2,21L 22,21L 22,7L 12,7 Z ' })
                )
            );
        }
    }]);

    return MdiDomain;
}(React.Component);

exports.default = MdiDomain;
module.exports = exports['default'];