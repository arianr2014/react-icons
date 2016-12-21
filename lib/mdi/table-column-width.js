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

var MdiTableColumnWidth = function (_React$Component) {
    _inherits(MdiTableColumnWidth, _React$Component);

    function MdiTableColumnWidth() {
        _classCallCheck(this, MdiTableColumnWidth);

        return _possibleConstructorReturn(this, (MdiTableColumnWidth.__proto__ || Object.getPrototypeOf(MdiTableColumnWidth)).apply(this, arguments));
    }

    _createClass(MdiTableColumnWidth, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 5.00001,8L 19,8C 20.1046,8 21,8.89543 21,10L 21,20C 21,21.1046 20.1046,22 19,22L 5,22C 3.89543,22 3,21.1046 3,20L 3.00001,10C 3.00001,8.89543 3.89544,8 5.00001,8 Z M 5,12L 5,15L 11,15L 11,12L 5,12 Z M 13,12L 13,15L 19,15L 19,12L 13,12 Z M 5,17L 5,20L 11,20L 11,17L 5,17 Z M 13,17L 13,20L 19,20L 19,17L 13,17 Z M 11,2.00001L 21,2.00001L 21,6L 19,6L 19,4.00001L 13,4L 13,6L 11,6L 11,2.00001 Z ' })
                )
            );
        }
    }]);

    return MdiTableColumnWidth;
}(React.Component);

exports.default = MdiTableColumnWidth;
module.exports = exports['default'];