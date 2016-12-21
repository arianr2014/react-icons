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

var MdiBlender = function (_React$Component) {
    _inherits(MdiBlender, _React$Component);

    function MdiBlender() {
        _classCallCheck(this, MdiBlender);

        return _possibleConstructorReturn(this, (MdiBlender.__proto__ || Object.getPrototypeOf(MdiBlender)).apply(this, arguments));
    }

    _createClass(MdiBlender, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 8,3C 7.99997,3.3386 8.17138,3.6854 8.48701,3.8762L 12,6L 2.5,6C 1.669,6 1,6.6689 1,7.5C 1,8.3311 1.669,9 2.5,9L 8.40625,9L 2,13C 1.16253,13.5234 1,14.219 1,15C 1,15.9907 1.7676,17 3,17C 3.68997,17 4.39132,16.4869 5,16L 7,14.375C 7.19818,18.6169 10.709,22 15,22C 19.4183,22 23,18.4183 23,14C 23,11.0774 21.4337,8.5208 19.0938,7.125C 19.0616,7.106 19.0333,7.08 19,7.063C 19,7.063 18.9173,7.004 18.8594,6.965C 15.7604,4.877 13.0328,3.7192 9.54791,2.1317C 9.34306,2.0387 9.16125,1.9996 9,2C 8.39875,2 8.00005,2.4629 8,3 Z M 15,9C 17.7614,9 20,11.2386 20,14C 20,16.7613 17.7614,19 15,19C 12.2386,19 10,16.7613 10,14C 10,11.2386 12.2386,9 15,9 Z M 15,10.5C 13.067,10.5 11.5,12.067 11.5,14C 11.5,15.933 13.067,17.5 15,17.5C 16.933,17.5 18.5,15.933 18.5,14C 18.5,12.067 16.933,10.5 15,10.5 Z ' })
                )
            );
        }
    }]);

    return MdiBlender;
}(React.Component);

exports.default = MdiBlender;
module.exports = exports['default'];