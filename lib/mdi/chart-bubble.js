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

var MdiChartBubble = function (_React$Component) {
    _inherits(MdiChartBubble, _React$Component);

    function MdiChartBubble() {
        _classCallCheck(this, MdiChartBubble);

        return _possibleConstructorReturn(this, (MdiChartBubble.__proto__ || Object.getPrototypeOf(MdiChartBubble)).apply(this, arguments));
    }

    _createClass(MdiChartBubble, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 7.2,11.2C 8.96731,11.2 10.4,12.6327 10.4,14.4C 10.4,16.1673 8.96731,17.6 7.2,17.6C 5.43269,17.6 4,16.1673 4,14.4C 4,12.6327 5.43269,11.2 7.2,11.2 Z M 14.8,16C 15.9046,16 16.8,16.8954 16.8,18C 16.8,19.1046 15.9046,20 14.8,20C 13.6954,20 12.8,19.1046 12.8,18C 12.8,16.8954 13.6954,16 14.8,16 Z M 15.2,4C 17.851,4 20,6.149 20,8.8C 20,11.451 17.851,13.6 15.2,13.6C 12.549,13.6 10.4,11.451 10.4,8.8C 10.4,6.149 12.549,4 15.2,4 Z ' })
                )
            );
        }
    }]);

    return MdiChartBubble;
}(React.Component);

exports.default = MdiChartBubble;
module.exports = exports['default'];