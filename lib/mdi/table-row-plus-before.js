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

var MdiTableRowPlusBefore = function (_React$Component) {
    _inherits(MdiTableRowPlusBefore, _React$Component);

    function MdiTableRowPlusBefore() {
        _classCallCheck(this, MdiTableRowPlusBefore);

        return _possibleConstructorReturn(this, (MdiTableRowPlusBefore.__proto__ || Object.getPrototypeOf(MdiTableRowPlusBefore)).apply(this, arguments));
    }

    _createClass(MdiTableRowPlusBefore, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 22,14C 22,12.8954 21.1045,12 20,12L 4,12C 2.89543,12 2,12.8954 2,14L 2,21L 4,21L 4,19L 8,19L 8,21L 10,21L 10,19L 14,19L 14,21L 16,21L 16,19L 20,19L 20,21L 22,21L 22,14 Z M 4,14L 7.99998,14L 7.99998,17L 4,17L 4,14 Z M 9.99997,14L 14,14L 14,17L 9.99997,17L 9.99997,14 Z M 20,14L 20,17L 16,17L 16,14L 20,14 Z M 11,10L 13,10L 13,7L 16,7L 16,5L 13,5L 13,2L 11,2L 11,5L 8,5L 8,7L 11,7L 11,10 Z ' })
                )
            );
        }
    }]);

    return MdiTableRowPlusBefore;
}(React.Component);

exports.default = MdiTableRowPlusBefore;
module.exports = exports['default'];