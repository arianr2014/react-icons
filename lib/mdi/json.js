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

var MdiJson = function (_React$Component) {
    _inherits(MdiJson, _React$Component);

    function MdiJson() {
        _classCallCheck(this, MdiJson);

        return _possibleConstructorReturn(this, (MdiJson.__proto__ || Object.getPrototypeOf(MdiJson)).apply(this, arguments));
    }

    _createClass(MdiJson, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 5,3L 7,3L 7,5L 5,5L 5,10C 5,11.1046 4.10457,12 3,12C 4.10457,12 5,12.8954 5,14L 5,19L 7,19L 7,21L 5,21C 3.92841,20.7321 3,20.1046 3,19L 3,15C 3,13.8954 2.10457,13 1,13L 0,13L 0,11L 1,11C 2.10457,11 3,10.1046 3,9L 3,5C 3,3.89539 3.89543,3 5,3 Z M 19,3.00001C 20.1046,3.00001 21,3.8954 21,5.00001L 21,9.00001C 21,10.1046 21.8954,11 23,11L 24,11L 24,13L 23,13C 21.8954,13 21,13.8954 21,15L 21,19C 21,20.1046 20.0716,20.7321 19,21L 17,21L 17,19L 19,19L 19,14C 19,12.8954 19.8954,12 21,12C 19.8954,12 19,11.1046 19,10L 19,5.00001L 17,5.00001L 17,3.00001L 19,3.00001 Z M 12,15C 12.5523,15 13,15.4477 13,16C 13,16.5523 12.5523,17 12,17C 11.4477,17 11,16.5523 11,16C 11,15.4477 11.4477,15 12,15 Z M 8,15C 8.55229,15 9,15.4477 9,16C 9,16.5523 8.55228,17 8,17C 7.44772,17 7,16.5523 7,16C 7,15.4477 7.44771,15 8,15 Z M 16,15C 16.5523,15 17,15.4477 17,16C 17,16.5523 16.5523,17 16,17C 15.4477,17 15,16.5523 15,16C 15,15.4477 15.4477,15 16,15 Z ' })
                )
            );
        }
    }]);

    return MdiJson;
}(React.Component);

exports.default = MdiJson;
module.exports = exports['default'];