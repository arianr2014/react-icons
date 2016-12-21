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

var MdiPhoneLog = function (_React$Component) {
    _inherits(MdiPhoneLog, _React$Component);

    function MdiPhoneLog() {
        _classCallCheck(this, MdiPhoneLog);

        return _possibleConstructorReturn(this, (MdiPhoneLog.__proto__ || Object.getPrototypeOf(MdiPhoneLog)).apply(this, arguments));
    }

    _createClass(MdiPhoneLog, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'fill-rule': 'evenodd', 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 20,15.4975C 20.5518,15.4975 21.0013,15.9475 21.0013,16.4988L 21.0013,20C 21.0013,20.5512 20.5518,20.9963 20,20.9963C 10.61,20.9963 2.9975,13.3887 2.9975,3.99875C 2.9975,3.4475 3.4475,2.9978 3.99875,2.9978L 7.5,2.9978C 8.05125,2.9978 8.50125,3.4475 8.50125,3.99875C 8.50125,5.24375 8.70125,6.445 9.0675,7.56875C 9.18,7.915 9.09625,8.31 8.82375,8.58375L 6.62125,10.7912C 8.06125,13.6225 10.3762,15.9375 13.2125,17.3775L 15.41,15.1763C 15.6888,14.9025 16.0787,14.8187 16.4262,14.9313C 17.5537,15.2975 18.75,15.4975 20,15.4975 Z M 12.0025,2.9978L 13.9987,2.9978L 13.9987,5L 12.0025,5M 15,2.9978L 21.0013,2.9978L 21.0013,5L 15,5M 12.0025,6.00125L 13.9987,6.00125L 13.9987,7.9975L 12.0025,7.9975M 15,6.00125L 21.0013,6.00125L 21.0013,7.9975L 15,7.9975M 12.0025,8.99875L 13.9987,8.99875L 13.9987,11.0012L 12.0025,11.0012M 15,8.99875L 21.0013,8.99875L 21.0013,11.0012L 15,11.0012' })
                )
            );
        }
    }]);

    return MdiPhoneLog;
}(React.Component);

exports.default = MdiPhoneLog;
module.exports = exports['default'];