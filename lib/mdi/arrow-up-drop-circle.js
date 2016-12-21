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

var MdiArrowUpDropCircle = function (_React$Component) {
    _inherits(MdiArrowUpDropCircle, _React$Component);

    function MdiArrowUpDropCircle() {
        _classCallCheck(this, MdiArrowUpDropCircle);

        return _possibleConstructorReturn(this, (MdiArrowUpDropCircle.__proto__ || Object.getPrototypeOf(MdiArrowUpDropCircle)).apply(this, arguments));
    }

    _createClass(MdiArrowUpDropCircle, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'miter', d: 'M 12,22C 6.4772,22 2,17.5228 2,12C 2,6.47716 6.4772,2.00001 12,2.00001C 17.5228,2.00001 22,6.47716 22,12C 22,17.5228 17.5228,22 12,22 Z M 17,14L 12,8.99999L 7.00001,14L 17,14 Z ' })
                )
            );
        }
    }]);

    return MdiArrowUpDropCircle;
}(React.Component);

exports.default = MdiArrowUpDropCircle;
module.exports = exports['default'];