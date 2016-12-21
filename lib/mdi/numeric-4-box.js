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

var MdiNumeric4Box = function (_React$Component) {
    _inherits(MdiNumeric4Box, _React$Component);

    function MdiNumeric4Box() {
        _classCallCheck(this, MdiNumeric4Box);

        return _possibleConstructorReturn(this, (MdiNumeric4Box.__proto__ || Object.getPrototypeOf(MdiNumeric4Box)).apply(this, arguments));
    }

    _createClass(MdiNumeric4Box, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 15,17L 13,17L 13,13L 9,13L 9,7L 11,7L 11,11L 13,11L 13,7L 15,7M 19,3L 5,3C 3.9,3 3,3.9 3,5L 3,19C 3,20.1 3.9,21 5,21L 19,21C 20.1,21 21,20.1 21,19L 21,5C 21,3.9 20.1,3 19,3 Z ' })
                )
            );
        }
    }]);

    return MdiNumeric4Box;
}(React.Component);

exports.default = MdiNumeric4Box;
module.exports = exports['default'];