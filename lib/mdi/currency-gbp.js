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

var MdiCurrencyGbp = function (_React$Component) {
    _inherits(MdiCurrencyGbp, _React$Component);

    function MdiCurrencyGbp() {
        _classCallCheck(this, MdiCurrencyGbp);

        return _possibleConstructorReturn(this, (MdiCurrencyGbp.__proto__ || Object.getPrototypeOf(MdiCurrencyGbp)).apply(this, arguments));
    }

    _createClass(MdiCurrencyGbp, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 6.5,21L 6.5,19.75C 7.43564,19.2867 8.23869,18.5681 8.80695,17.6977C 9.3752,16.8272 9.66705,15.8458 9.6825,14.7535L 9.65503,13.7698L 9.57267,13L 7,13L 7,11L 9.3996,11C 9.25123,10.1734 9.16241,9.30583 9.13317,8.24808C 9.15869,6.61071 9.6418,5.33069 10.5825,4.40801C 11.5232,3.48534 12.7682,3.016 14.3177,3C 15.0313,3.00594 15.6367,3.07181 16.134,3.19762C 16.6313,3.32342 17.0239,3.47355 17.3117,3.64798L 16.7624,5.39007C 16.5163,5.24693 16.1912,5.12097 15.7872,5.01217C 15.3832,4.90337 14.8934,4.84611 14.3177,4.84038C 13.2544,4.86157 12.483,5.1902 12.0035,5.82629C 11.5239,6.46238 11.2882,7.2788 11.2962,8.27557L 11.3992,9.7723L 11.6042,11L 15.5,11L 15.5,13L 11.7903,13C 11.8845,14.0111 11.839,14.9976 11.6539,15.9596C 11.3467,17.1644 10.7397,18.1779 9.83292,19L 18,19L 18,21L 6.5,21 Z ' })
                )
            );
        }
    }]);

    return MdiCurrencyGbp;
}(React.Component);

exports.default = MdiCurrencyGbp;
module.exports = exports['default'];