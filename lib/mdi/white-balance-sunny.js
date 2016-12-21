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

var MdiWhiteBalanceSunny = function (_React$Component) {
    _inherits(MdiWhiteBalanceSunny, _React$Component);

    function MdiWhiteBalanceSunny() {
        _classCallCheck(this, MdiWhiteBalanceSunny);

        return _possibleConstructorReturn(this, (MdiWhiteBalanceSunny.__proto__ || Object.getPrototypeOf(MdiWhiteBalanceSunny)).apply(this, arguments));
    }

    _createClass(MdiWhiteBalanceSunny, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 3.54769,18.5352L 4.9617,19.9502L 6.75669,18.1552L 5.34271,16.7412M 10.9997,22.4482C 11.3157,22.4502 12.9997,22.4482 12.9997,22.4482L 12.9997,19.4982L 10.9997,19.4982M 11.9997,5.49817C 8.68569,5.49817 5.9997,8.18416 5.9997,11.4982C 5.9997,14.8112 8.68569,17.4982 11.9997,17.4982C 15.3127,17.4982 17.9997,14.8112 17.9997,11.4982C 17.9997,8.18416 15.3127,5.49817 11.9997,5.49817 Z M 19.9997,12.4982L 22.9997,12.4982L 22.9997,10.4982L 19.9997,10.4982M 17.2417,18.1552L 19.0367,19.9502L 20.4507,18.5352L 18.6557,16.7412M 20.4507,4.46117L 19.0367,3.04616L 17.2417,4.84116L 18.6557,6.25516M 12.9997,0.548162L 10.9997,0.548162L 10.9997,3.49817L 12.9997,3.49817M 3.99971,10.4982L 0.999705,10.4982L 0.999705,12.4982L 3.99971,12.4982M 6.75669,4.84116L 4.9617,3.04616L 3.54769,4.46117L 5.34271,6.25516L 6.75669,4.84116 Z ' })
                )
            );
        }
    }]);

    return MdiWhiteBalanceSunny;
}(React.Component);

exports.default = MdiWhiteBalanceSunny;
module.exports = exports['default'];