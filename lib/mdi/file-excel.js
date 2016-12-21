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

var MdiFileExcel = function (_React$Component) {
    _inherits(MdiFileExcel, _React$Component);

    function MdiFileExcel() {
        _classCallCheck(this, MdiFileExcel);

        return _possibleConstructorReturn(this, (MdiFileExcel.__proto__ || Object.getPrototypeOf(MdiFileExcel)).apply(this, arguments));
    }

    _createClass(MdiFileExcel, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 6,2L 14,2.00001L 20,8L 20,20C 20,21.1046 19.1046,22 18,22L 6,22C 4.89543,22 4,21.1046 4,20L 4,4C 4,2.89543 4.89543,2 6,2 Z M 13,3.50003L 13,9.00003L 18.5,9.00003L 13,3.50003 Z M 17,11L 13,11L 13,13L 14,13L 12,14.6667L 10,13L 11,13L 11,11L 7,11L 7,13L 8,13L 11,15.5L 8,18L 7,18L 7,20L 11,20L 11,18L 10,18L 12,16.3333L 14,18L 13,18L 13,20L 17,20L 17,18L 16,18L 13,15.5L 16,13L 17,13L 17,11 Z ' })
                )
            );
        }
    }]);

    return MdiFileExcel;
}(React.Component);

exports.default = MdiFileExcel;
module.exports = exports['default'];