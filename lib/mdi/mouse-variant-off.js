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

var MdiMouseVariantOff = function (_React$Component) {
    _inherits(MdiMouseVariantOff, _React$Component);

    function MdiMouseVariantOff() {
        _classCallCheck(this, MdiMouseVariantOff);

        return _possibleConstructorReturn(this, (MdiMouseVariantOff.__proto__ || Object.getPrototypeOf(MdiMouseVariantOff)).apply(this, arguments));
    }

    _createClass(MdiMouseVariantOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 2,5.26848L 3.27711,4L 20,20.7229L 18.7315,22L 17.2942,20.5627C 16.4211,22.0226 14.8247,23 13,23C 10.2386,23 7.99999,20.7614 7.99999,18L 7.99999,16.9C 5.71775,16.4367 4,14.419 4,12L 4,9.00001L 5.73154,9.00001L 2,5.26848 Z M 14,7.00001L 10,7.00001L 10,2.10004C 12.2822,2.5633 14,4.58105 14,7.00001 Z M 7.99999,2.10005L 7.99999,6.17731L 5.37692,3.55424C 6.06899,2.82678 6.97788,2.30752 7.99999,2.10005 Z M 14,12L 13.997,12.1743L 10.8227,9.00002L 14,9.00002L 14,12 Z M 10,16.9L 10,18C 10,19.6569 11.3431,21 13,21C 14.2793,21 15.3717,20.1992 15.803,19.0715L 12.3988,15.6672C 11.7395,16.2785 10.9151,16.7142 10,16.9 Z M 16,13C 16,10.7909 17.7909,9.00001 20,9.00001L 22,9.00001L 21,10L 22,11L 20,11C 18.8954,11 18,11.8954 18,13L 18,16.1773L 16,14.1773L 16,13 Z ' })
                )
            );
        }
    }]);

    return MdiMouseVariantOff;
}(React.Component);

exports.default = MdiMouseVariantOff;
module.exports = exports['default'];