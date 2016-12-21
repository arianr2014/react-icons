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

var MdiFolderMultipleOutline = function (_React$Component) {
    _inherits(MdiFolderMultipleOutline, _React$Component);

    function MdiFolderMultipleOutline() {
        _classCallCheck(this, MdiFolderMultipleOutline);

        return _possibleConstructorReturn(this, (MdiFolderMultipleOutline.__proto__ || Object.getPrototypeOf(MdiFolderMultipleOutline)).apply(this, arguments));
    }

    _createClass(MdiFolderMultipleOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 22,4C 23.1,4 24,4.9 24,6L 24,16C 24,17.1 23.1,18 22,18L 6,18C 4.9,18 4,17.1 4,16L 4.01,4C 4.01,2.9 4.9,2 6,2L 12,2L 14,4L 22,4 Z M 2,6.00001L 2,20L 20,20L 20,22L 2,22C 0.900001,22 -3.97364e-008,21.1 -3.97364e-008,20L 0.0100021,11L -3.97364e-008,11L -3.97364e-008,6.00001L 2,6.00001 Z M 6,6L 6,16L 22,16L 22,6L 6,6 Z ' })
                )
            );
        }
    }]);

    return MdiFolderMultipleOutline;
}(React.Component);

exports.default = MdiFolderMultipleOutline;
module.exports = exports['default'];