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

var MdiSeatFlatAngled = function (_React$Component) {
    _inherits(MdiSeatFlatAngled, _React$Component);

    function MdiSeatFlatAngled() {
        _classCallCheck(this, MdiSeatFlatAngled);

        return _possibleConstructorReturn(this, (MdiSeatFlatAngled.__proto__ || Object.getPrototypeOf(MdiSeatFlatAngled)).apply(this, arguments));
    }

    _createClass(MdiSeatFlatAngled, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 22.2513,14.2925L 21.5575,16.1813L 9.19875,11.7088L 11.2788,6.05L 19.8388,9.14C 21.9388,9.9025 23.0175,12.2025 22.2513,14.2925 Z M 1.49875,12.1387L 7.9975,14.4825L 7.9975,18.9988L 16.0012,18.9988L 16.0012,17.3687L 20.5175,18.9988L 21.2109,17.1087L 2.1925,10.2487M 7.3,10.2C 8.78875,9.4825 9.41875,7.69 8.71125,6.20125C 7.98875,4.7125 6.20125,4.0825 4.7025,4.8C 3.2075,5.5075 2.57875,7.3 3.30125,8.79875C 4.00875,10.2875 5.80125,10.9175 7.3,10.2 Z ' })
                )
            );
        }
    }]);

    return MdiSeatFlatAngled;
}(React.Component);

exports.default = MdiSeatFlatAngled;
module.exports = exports['default'];