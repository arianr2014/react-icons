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

var MdiBriefcaseChecked = function (_React$Component) {
    _inherits(MdiBriefcaseChecked, _React$Component);

    function MdiBriefcaseChecked() {
        _classCallCheck(this, MdiBriefcaseChecked);

        return _possibleConstructorReturn(this, (MdiBriefcaseChecked.__proto__ || Object.getPrototypeOf(MdiBriefcaseChecked)).apply(this, arguments));
    }

    _createClass(MdiBriefcaseChecked, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 10.5,17.5L 7,14L 8.414,12.586L 10.5,14.672L 15.676,9.496L 17.09,10.91M 10,4L 14,4L 14,6L 10,6M 20,6L 16,6L 16,4L 14,2L 10,2L 8,4L 8,6L 4,6C 2.89401,6 2.01099,6.89499 2.01099,8L 2,19C 2,20.105 2.89401,21 4,21L 20,21C 21.105,21 22,20.105 22,19L 22,8C 22,6.89499 21.105,6 20,6 Z ' })
                )
            );
        }
    }]);

    return MdiBriefcaseChecked;
}(React.Component);

exports.default = MdiBriefcaseChecked;
module.exports = exports['default'];