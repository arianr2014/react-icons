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

var MdiTableRowPlusAfter = function (_React$Component) {
    _inherits(MdiTableRowPlusAfter, _React$Component);

    function MdiTableRowPlusAfter() {
        _classCallCheck(this, MdiTableRowPlusAfter);

        return _possibleConstructorReturn(this, (MdiTableRowPlusAfter.__proto__ || Object.getPrototypeOf(MdiTableRowPlusAfter)).apply(this, arguments));
    }

    _createClass(MdiTableRowPlusAfter, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 22,10C 22,11.1046 21.1045,12 20,12L 4,12C 2.89543,12 2,11.1046 2,10L 2,3L 4,3L 4,5L 8,5L 8,3L 10,3L 10,5L 14,5L 14,3L 16,3L 16,5L 20,5L 20,3L 22,3L 22,10 Z M 4,10L 7.99998,10L 7.99998,7.00001L 4,7.00001L 4,10 Z M 9.99997,10L 14,10L 14,7.00001L 9.99997,7.00001L 9.99997,10 Z M 20,10L 20,7.00001L 16,7.00001L 16,10L 20,10 Z M 11,14L 13,14L 13,17L 16,17L 16,19L 13,19L 13,22L 11,22L 11,19L 8,19L 8,17L 11,17L 11,14 Z ' })
                )
            );
        }
    }]);

    return MdiTableRowPlusAfter;
}(React.Component);

exports.default = MdiTableRowPlusAfter;
module.exports = exports['default'];