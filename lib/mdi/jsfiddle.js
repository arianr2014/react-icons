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

var MdiJsfiddle = function (_React$Component) {
    _inherits(MdiJsfiddle, _React$Component);

    function MdiJsfiddle() {
        _classCallCheck(this, MdiJsfiddle);

        return _possibleConstructorReturn(this, (MdiJsfiddle.__proto__ || Object.getPrototypeOf(MdiJsfiddle)).apply(this, arguments));
    }

    _createClass(MdiJsfiddle, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'fill-rule': 'evenodd', 'stroke-linejoin': 'round', d: 'M 20.331,10.7937C 21.8978,11.4365 23,12.9575 23,14.7337C 23,17.0902 21.0601,19 18.6674,19L 5.4,19C 2.98334,18.9632 1,17.0116 1,14.6234C 1,13.026 1.87387,11.6336 3.17382,10.8723C 3.08471,10.5927 3.03737,10.2947 3.03737,9.98612C 3.03737,8.3442 4.38911,7.01306 6.05666,7.01306C 6.7523,7.01306 7.3917,7.24754 7.90243,7.63741C 8.95509,5.46582 11.1991,3.96202 13.8057,3.96202C 17.4204,3.96202 20.3505,6.84764 20.3505,10.4072C 20.3505,10.5375 20.3389,10.6651 20.331,10.7937 Z M 9.21519,10.8544C 7.44648,10.8544 6.01266,12.1168 6.01266,13.674C 6.01266,15.2313 7.44648,16.4937 9.21519,16.4937C 10.2522,16.4937 11.1741,16.0597 11.7593,15.3868L 10.7496,14.249C 10.4189,14.6839 9.77295,14.9885 9.21519,14.9885C 8.42619,14.9885 7.78658,14.4 7.78658,13.674C 7.78658,12.9481 8.42619,12.3596 9.21519,12.3596C 9.686,12.3596 10.1237,12.5949 10.563,12.879C 11.0023,13.163 11.7287,14.1748 12.3063,14.8227C 13.7748,16.2884 14.528,16.4171 15.3975,16.4171C 17.1662,16.4171 18.6,15.1547 18.6,13.5975C 18.6,12.0402 17.1662,10.7778 15.3975,10.7778C 14.3605,10.7778 13.4386,11.2118 12.8533,11.8847L 13.8631,13.0225C 14.1938,12.5876 14.8397,12.283 15.3975,12.283C 16.1865,12.283 16.8261,12.8715 16.8261,13.5975C 16.8261,14.3234 16.1865,14.9119 15.3975,14.9119C 14.9267,14.9119 14.4889,14.6766 14.0496,14.3925C 13.6103,14.1085 12.8839,13.0967 12.3063,12.4488C 10.8379,10.9832 10.0846,10.8544 9.21519,10.8544 Z ' })
                )
            );
        }
    }]);

    return MdiJsfiddle;
}(React.Component);

exports.default = MdiJsfiddle;
module.exports = exports['default'];