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

var MdiTicketPercent = function (_React$Component) {
    _inherits(MdiTicketPercent, _React$Component);

    function MdiTicketPercent() {
        _classCallCheck(this, MdiTicketPercent);

        return _possibleConstructorReturn(this, (MdiTicketPercent.__proto__ || Object.getPrototypeOf(MdiTicketPercent)).apply(this, arguments));
    }

    _createClass(MdiTicketPercent, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 4,4C 2.89543,4 2,4.8954 2,6L 2,10C 3.11,10 4,10.9 4,12C 4,13.1046 3.10457,14 2,14L 2,18C 2,19.1046 2.89543,20 4,20L 20,20C 21.1046,20 22,19.1046 22,18L 22,14C 20.8954,14 20,13.1046 20,12C 20,10.89 20.9,10 22,10L 22,6C 22,4.89 21.1,4 20,4L 4,4 Z M 15.498,7L 17,8.502L 8.50195,17L 7,15.498L 15.498,7 Z M 8.8125,7.043C 9.79034,7.043 10.584,7.8347 10.584,8.8125C 10.584,9.7903 9.79034,10.584 8.8125,10.584C 7.83466,10.584 7.04297,9.7903 7.04297,8.8125C 7.04297,7.8347 7.83466,7.043 8.8125,7.043 Z M 15.1875,13.416C 16.1653,13.416 16.957,14.2097 16.957,15.1875C 16.957,16.1653 16.1653,16.957 15.1875,16.957C 14.2097,16.957 13.416,16.1653 13.416,15.1875C 13.416,14.2097 14.2097,13.416 15.1875,13.416 Z ' })
                )
            );
        }
    }]);

    return MdiTicketPercent;
}(React.Component);

exports.default = MdiTicketPercent;
module.exports = exports['default'];