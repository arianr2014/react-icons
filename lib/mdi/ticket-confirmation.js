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

var MdiTicketConfirmation = function (_React$Component) {
    _inherits(MdiTicketConfirmation, _React$Component);

    function MdiTicketConfirmation() {
        _classCallCheck(this, MdiTicketConfirmation);

        return _possibleConstructorReturn(this, (MdiTicketConfirmation.__proto__ || Object.getPrototypeOf(MdiTicketConfirmation)).apply(this, arguments));
    }

    _createClass(MdiTicketConfirmation, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 12.9975,8.50125L 11.0013,8.50125L 11.0013,6.49875L 12.9975,6.49875L 12.9975,8.50125 Z M 12.9975,12.9975L 11.0013,12.9975L 11.0013,11.0012L 12.9975,11.0012L 12.9975,12.9975 Z M 12.9975,17.5L 11.0013,17.5L 11.0013,15.4975L 12.9975,15.4975L 12.9975,17.5 Z M 22.0025,10L 22.0025,6.00125C 22.0025,4.8875 21.0987,3.99875 20,3.99875L 3.99875,3.99875C 2.9,3.99875 2.01125,4.8875 2.01125,6.00125L 2.01125,10C 3.11,10 3.99875,10.8987 3.99875,12.0025C 3.99875,13.1 3.11,13.9987 2.0025,13.9987L 2.0025,17.9975C 2.0025,19.1012 2.9,20 3.99875,20L 20,20C 21.0987,20 22.0025,19.1012 22.0025,17.9975L 22.0025,13.9987C 20.8987,13.9987 20,13.1 20,12.0025C 20,10.8987 20.8987,10 22.0025,10 Z ' })
                )
            );
        }
    }]);

    return MdiTicketConfirmation;
}(React.Component);

exports.default = MdiTicketConfirmation;
module.exports = exports['default'];