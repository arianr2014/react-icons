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

var MdiSpreadsheet = function (_React$Component) {
    _inherits(MdiSpreadsheet, _React$Component);

    function MdiSpreadsheet() {
        _classCallCheck(this, MdiSpreadsheet);

        return _possibleConstructorReturn(this, (MdiSpreadsheet.__proto__ || Object.getPrototypeOf(MdiSpreadsheet)).apply(this, arguments));
    }

    _createClass(MdiSpreadsheet, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 19,3L 5,3C 3.89551,3 3.01025,3.89551 3.01025,5L 3.00244,8L 3,8L 3,19C 3,20.1045 3.89551,21 5,21L 19,21C 20.1045,21 21,20.1045 21,19L 21,5C 21,3.89551 20.1045,3 19,3 Z M 19,11L 11,11L 11,19L 9,19L 9,11L 5,11L 5,9L 9,9L 9,5L 11,5L 11,9L 19,9L 19,11 Z ' })
                )
            );
        }
    }]);

    return MdiSpreadsheet;
}(React.Component);

exports.default = MdiSpreadsheet;
module.exports = exports['default'];