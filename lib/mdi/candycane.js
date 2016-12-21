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

var MdiCandycane = function (_React$Component) {
    _inherits(MdiCandycane, _React$Component);

    function MdiCandycane() {
        _classCallCheck(this, MdiCandycane);

        return _possibleConstructorReturn(this, (MdiCandycane.__proto__ || Object.getPrototypeOf(MdiCandycane)).apply(this, arguments));
    }

    _createClass(MdiCandycane, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 10,10C 10,11.1046 9.10457,12 8,12C 6.89543,12 6,11.1046 6,10L 6,8C 6,7.37389 6.0959,6.77018 6.27382,6.20275L 10,9.92894L 10,10 Z M 12,2.00001C 12.7365,2.00001 13.4421,2.13272 14.094,2.37554L 11.9691,6.00024C 11.1441,6.01274 10.4403,6.52468 10.1466,7.24708L 7.24273,4.34324C 8.33971,2.91823 10.0626,2.00001 12,2.00001 Z M 17.7592,6.31183L 14,10.0711L 14,8C 14,7.62473 13.8966,7.2736 13.7168,6.97352L 15.8251,3.37721C 16.735,4.13092 17.4187,5.14811 17.7592,6.31183 Z M 18,13.0858L 14,17.0858L 14,12.8995L 18,8.89949L 18,13.0858 Z M 18,20C 18,21.1046 17.1046,22 16,22C 14.8954,22 14,21.1046 14,20L 14,19.9142L 18,15.9142L 18,20 Z ' })
                )
            );
        }
    }]);

    return MdiCandycane;
}(React.Component);

exports.default = MdiCandycane;
module.exports = exports['default'];