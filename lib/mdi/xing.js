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

var MdiXing = function (_React$Component) {
    _inherits(MdiXing, _React$Component);

    function MdiXing() {
        _classCallCheck(this, MdiXing);

        return _possibleConstructorReturn(this, (MdiXing.__proto__ || Object.getPrototypeOf(MdiXing)).apply(this, arguments));
    }

    _createClass(MdiXing, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 17.6663,2.0025C 17.2362,2.0025 17.0512,2.27 16.895,2.54875C 16.895,2.54875 10.6787,13.5687 10.4788,13.9312L 14.575,21.45C 14.7163,21.7087 14.9413,22.0025 15.3813,22.0025L 18.2613,22.0025C 18.4375,22.0025 18.5688,21.9338 18.6425,21.8162C 18.7212,21.6937 18.7212,21.5288 18.6375,21.3675L 14.57,13.9213L 20.9575,2.6275C 21.04,2.47125 21.04,2.305 20.9663,2.1825C 20.8936,2.065 20.7563,2.0025 20.5811,2.0025M 5.55125,5.9475C 5.37625,5.9475 5.23,6.01125 5.15625,6.1325C 5.07875,6.255 5.0925,6.41125 5.17625,6.5725L 7.12375,9.96625L 4.0575,15.3713C 3.98,15.5325 3.985,15.6938 4.0575,15.815C 4.13125,15.9375 4.2625,16.015 4.43375,16.015L 7.31875,16.015C 7.75375,16.015 7.95875,15.7225 8.105,15.4538C 8.105,15.4538 11.1038,10.1563 11.2212,9.95125L 9.23875,6.48875C 9.09625,6.235 8.8775,5.9475 8.4325,5.9475' })
                )
            );
        }
    }]);

    return MdiXing;
}(React.Component);

exports.default = MdiXing;
module.exports = exports['default'];