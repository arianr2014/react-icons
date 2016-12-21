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

var MdiNumeric0BoxMultipleOutline = function (_React$Component) {
    _inherits(MdiNumeric0BoxMultipleOutline, _React$Component);

    function MdiNumeric0BoxMultipleOutline() {
        _classCallCheck(this, MdiNumeric0BoxMultipleOutline);

        return _possibleConstructorReturn(this, (MdiNumeric0BoxMultipleOutline.__proto__ || Object.getPrototypeOf(MdiNumeric0BoxMultipleOutline)).apply(this, arguments));
    }

    _createClass(MdiNumeric0BoxMultipleOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 21,17L 21,3L 7,3L 7,17L 21,17 Z M 21,1.00001C 22.1,1.00001 23,1.9 23,3.00001L 23,17C 23,18.1 22.1,19 21,19L 7,19C 5.9,19 5,18.1 5,17L 5,3.00001C 5,1.9 5.9,1.00001 7,1.00001L 21,1.00001 Z M 3,5.00001L 3,21L 19,21L 19,23L 3,23C 1.9,23 1,22.1 1,21L 1,5.00001L 3,5.00001 Z M 13,5L 15,5C 16.1046,5 17,5.89543 17,7L 17,13C 17,14.1046 16.1046,15 15,15L 13,15C 11.8954,15 11,14.1046 11,13L 11,7C 11,5.89543 11.8954,5 13,5 Z M 13,7L 13,13L 15,13L 15,7L 13,7 Z ' })
                )
            );
        }
    }]);

    return MdiNumeric0BoxMultipleOutline;
}(React.Component);

exports.default = MdiNumeric0BoxMultipleOutline;
module.exports = exports['default'];