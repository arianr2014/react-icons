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

var MdiNumeric9Box = function (_React$Component) {
    _inherits(MdiNumeric9Box, _React$Component);

    function MdiNumeric9Box() {
        _classCallCheck(this, MdiNumeric9Box);

        return _possibleConstructorReturn(this, (MdiNumeric9Box.__proto__ || Object.getPrototypeOf(MdiNumeric9Box)).apply(this, arguments));
    }

    _createClass(MdiNumeric9Box, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 19,3C 20.1,3 21,3.9 21,5L 21,19C 21,20.1 20.1,21 19,21L 5,21C 3.9,21 3,20.1 3,19L 3,5C 3,3.9 3.9,3 5,3L 19,3 Z M 13,11L 11,11L 11,9L 13,9L 13,11 Z M 13,7L 11,7C 9.9,7 9,7.89 9,9L 9,11C 9,12.11 9.9,13 11,13L 13,13L 13,15L 9,15L 9,17L 13,17C 14.1,17 15,16.11 15,15L 15,9C 15,7.89 14.1,7 13,7 Z ' })
                )
            );
        }
    }]);

    return MdiNumeric9Box;
}(React.Component);

exports.default = MdiNumeric9Box;
module.exports = exports['default'];