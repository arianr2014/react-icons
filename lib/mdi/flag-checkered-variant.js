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

var MdiFlagCheckeredVariant = function (_React$Component) {
    _inherits(MdiFlagCheckeredVariant, _React$Component);

    function MdiFlagCheckeredVariant() {
        _classCallCheck(this, MdiFlagCheckeredVariant);

        return _possibleConstructorReturn(this, (MdiFlagCheckeredVariant.__proto__ || Object.getPrototypeOf(MdiFlagCheckeredVariant)).apply(this, arguments));
    }

    _createClass(MdiFlagCheckeredVariant, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 6,3C 6.55229,3 7,3.44771 7,4L 7,4.875C 8.0625,4.4375 9.5,4 11,4C 14,4 14,6 16,6C 19,6 20,4 20,4L 20,12C 20,12 19,14 16,14C 13,14 13,12 11,12C 8,12 7,14 7,14L 7,21L 5,21L 5,4C 5,3.44771 5.44771,3 6,3 Z M 11,8.75C 12.221,8.75 13.0693,9.40227 14,9.91037L 14,11.3261C 14.5937,11.6966 15.221,12 16,12C 18,12 18,11.5 18,11.5L 18,10.25C 18,10.25 17,10.5 16,10.5C 15.221,10.5 14.5937,10.2345 14,9.91037L 14,8.57615C 14.5937,8.94661 15.221,9.25001 16,9.25001C 18,9.25001 18,9.00001 18,9.00001L 18,7.50001C 18,7.50001 17,8.00001 16,8C 15.221,8 14.5937,7.6966 14,7.32614L 14,8.57615C 13.0693,7.99546 12.221,7.25 11,7.25L 11,6C 9,6 7,7.25001 7,7.25001L 7,8.50001C 7,8.50001 9.00001,7.25 11,7.25L 11,8.75C 9,8.75 7,10 7,10L 7,11.5C 7,11.5 9,10 11,10L 11,8.75 Z ' })
                )
            );
        }
    }]);

    return MdiFlagCheckeredVariant;
}(React.Component);

exports.default = MdiFlagCheckeredVariant;
module.exports = exports['default'];