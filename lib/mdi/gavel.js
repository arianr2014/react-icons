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

var MdiGavel = function (_React$Component) {
    _inherits(MdiGavel, _React$Component);

    function MdiGavel() {
        _classCallCheck(this, MdiGavel);

        return _possibleConstructorReturn(this, (MdiGavel.__proto__ || Object.getPrototypeOf(MdiGavel)).apply(this, arguments));
    }

    _createClass(MdiGavel, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 2.29721,20.2825L 11.9038,10.6759L 10.4896,9.26168L 9.78248,9.96878C 9.39196,10.3593 8.75879,10.3593 8.36827,9.96878L 7.66116,9.26168C 7.27064,8.87115 7.27064,8.23799 7.66116,7.84746L 13.318,2.19061C 13.7085,1.80009 14.3417,1.80008 14.7322,2.19061L 15.4393,2.89771C 15.8299,3.28824 15.8299,3.92141 15.4393,4.31193L 14.7322,5.01904L 16.1464,6.43325C 16.537,6.04273 17.1701,6.04273 17.5607,6.43325C 17.9512,6.82377 17.9512,7.45694 17.5606,7.84746L 18.9749,9.26167L 19.682,8.55456C 20.0725,8.16404 20.7057,8.16404 21.0962,8.55456L 21.8033,9.26167C 22.1938,9.65219 22.1938,10.2854 21.8033,10.6759L 16.1464,16.3327C 15.7559,16.7233 15.1228,16.7233 14.7322,16.3327L 14.0251,15.6256C 13.6346,15.2351 13.6346,14.6019 14.0251,14.2114L 14.7322,13.5043L 13.318,12.0901L 3.71142,21.6967C 3.3209,22.0872 2.68773,22.0872 2.29721,21.6967C 1.90668,21.3062 1.90668,20.673 2.29721,20.2825 Z M 20,19C 21.1046,19 22,19.8954 22,21L 22,22L 12,22L 12,21C 12,19.8954 12.8954,19 14,19L 20,19 Z ' })
                )
            );
        }
    }]);

    return MdiGavel;
}(React.Component);

exports.default = MdiGavel;
module.exports = exports['default'];