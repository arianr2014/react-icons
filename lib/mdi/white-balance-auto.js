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

var MdiWhiteBalanceAuto = function (_React$Component) {
    _inherits(MdiWhiteBalanceAuto, _React$Component);

    function MdiWhiteBalanceAuto() {
        _classCallCheck(this, MdiWhiteBalanceAuto);

        return _possibleConstructorReturn(this, (MdiWhiteBalanceAuto.__proto__ || Object.getPrototypeOf(MdiWhiteBalanceAuto)).apply(this, arguments));
    }

    _createClass(MdiWhiteBalanceAuto, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 10.2997,15.9981L 9.5997,13.9981L 6.3997,13.9981L 5.6997,15.9981L 3.7997,15.9981L 6.9997,6.99807L 8.9997,6.99807L 12.1997,15.9981M 21.9997,6.99807L 20.7957,13.2901L 19.2997,6.99807L 17.6997,6.99807L 16.2097,13.2901L 14.9997,6.99807L 14.2387,6.99807C 12.7727,5.17107 10.5247,3.99807 7.9997,3.99807C 3.5817,3.99807 -0.00030009,7.57906 -0.00030009,11.9981C -0.00030009,16.4171 3.5817,19.9981 7.9997,19.9981C 11.1337,19.9981 13.8397,18.1911 15.153,15.5661L 15.2497,15.9981L 16.9997,15.9981L 18.4997,9.89806L 19.9997,15.9981L 21.7497,15.9981L 23.7997,6.99807M 6.8497,12.6481L 9.1497,12.6481L 7.9997,8.99807L 6.8497,12.6481 Z ' })
                )
            );
        }
    }]);

    return MdiWhiteBalanceAuto;
}(React.Component);

exports.default = MdiWhiteBalanceAuto;
module.exports = exports['default'];