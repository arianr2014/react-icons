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

var MdiNumeric3Box = function (_React$Component) {
    _inherits(MdiNumeric3Box, _React$Component);

    function MdiNumeric3Box() {
        _classCallCheck(this, MdiNumeric3Box);

        return _possibleConstructorReturn(this, (MdiNumeric3Box.__proto__ || Object.getPrototypeOf(MdiNumeric3Box)).apply(this, arguments));
    }

    _createClass(MdiNumeric3Box, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 15.01,10.5C 15.01,11.33 14.34,12 13.51,12C 14.34,12 15.01,12.67 15.01,13.5L 15.01,15C 15.01,16.11 14.11,17 13.01,17L 9.01,17L 9.01,15L 13.01,15L 13.01,13L 11.01,13L 11.01,11L 13.01,11L 13.01,9L 9.01,9L 9.01,7L 13.01,7C 14.11,7 15.01,7.89 15.01,9M 19.01,3L 5.01,3C 3.91,3 3.01,3.9 3.01,5L 3.01,19C 3.01,20.1 3.91,21 5.01,21L 19.01,21C 20.11,21 21.01,20.1 21.01,19L 21.01,5C 21.01,3.9 20.11,3 19.01,3 Z ' })
                )
            );
        }
    }]);

    return MdiNumeric3Box;
}(React.Component);

exports.default = MdiNumeric3Box;
module.exports = exports['default'];