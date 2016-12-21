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

var MdiTruckDelivery = function (_React$Component) {
    _inherits(MdiTruckDelivery, _React$Component);

    function MdiTruckDelivery() {
        _classCallCheck(this, MdiTruckDelivery);

        return _possibleConstructorReturn(this, (MdiTruckDelivery.__proto__ || Object.getPrototypeOf(MdiTruckDelivery)).apply(this, arguments));
    }

    _createClass(MdiTruckDelivery, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 2.9975,3.99875C 1.895,3.99875 1.00125,4.8925 1.00125,5.99625L 1.00125,16.9975L 2.9975,16.9975C 2.9975,18.6575 4.34125,20 6.00125,20C 7.65625,20 8.99875,18.6575 8.99875,16.9975L 15,16.9975C 15,18.6575 16.3425,20 17.9975,20C 19.6587,20 21.0013,18.6575 21.0013,16.9975L 22.9975,16.9975L 22.9975,11.9975L 20,7.9975L 17.0025,7.9975L 17.0025,3.99875M 10,6.00125L 13.9987,10L 10,13.9987L 10,11.0012L 3.99875,11.0012L 3.99875,8.99875L 10,8.99875M 17.0025,9.4975L 19.5025,9.4975L 21.465,11.9975L 17.0025,11.9975M 6.00125,15.4975C 6.82625,15.4975 7.5,16.1712 7.5,16.9975C 7.5,17.8275 6.82625,18.4963 6.00125,18.4963C 5.17125,18.4963 4.5025,17.8275 4.5025,16.9975C 4.5025,16.1712 5.17125,15.4975 6.00125,15.4975 Z M 17.9975,15.4975C 18.8287,15.4975 19.5025,16.1712 19.5025,16.9975C 19.5025,17.8275 18.8287,18.4963 17.9975,18.4963C 17.1725,18.4963 16.4988,17.8275 16.4988,16.9975C 16.4988,16.1712 17.1725,15.4975 17.9975,15.4975 Z ' })
                )
            );
        }
    }]);

    return MdiTruckDelivery;
}(React.Component);

exports.default = MdiTruckDelivery;
module.exports = exports['default'];