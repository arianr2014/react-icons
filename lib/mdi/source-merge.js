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

var MdiSourceMerge = function (_React$Component) {
    _inherits(MdiSourceMerge, _React$Component);

    function MdiSourceMerge() {
        _classCallCheck(this, MdiSourceMerge);

        return _possibleConstructorReturn(this, (MdiSourceMerge.__proto__ || Object.getPrototypeOf(MdiSourceMerge)).apply(this, arguments));
    }

    _createClass(MdiSourceMerge, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '2', 'stroke-linejoin': 'round', d: 'M 7,3.00001C 8.65685,3.00001 10,4.34315 10,6.00001C 10,7.29018 9.18558,8.39013 8.04279,8.8138C 8.58257,13.805 13.0823,14.7692 15.1869,14.9554C 15.611,13.8136 16.7105,13 18,13C 19.6569,13 21,14.3431 21,16C 21,17.6569 19.6569,19 18,19C 16.6871,19 15.5712,18.1566 15.1644,16.9821C 10.912,16.7964 9.43859,15.1939 8,13.3927L 8,15.1707C 9.16519,15.5825 10,16.6938 10,18C 10,19.6569 8.65685,21 7,21C 5.34314,21 4,19.6569 4,18C 4,16.6938 4.83481,15.5825 6,15.1707L 6,8.8293C 4.83481,8.41747 4,7.30622 4,6.00001C 4,4.34315 5.34314,3.00001 7,3.00001 Z M 6.99999,5.00001C 6.44771,5.00001 6,5.44773 6,6.00001C 6,6.5523 6.44771,7.00001 6.99999,7.00001C 7.55228,7.00001 7.99999,6.5523 7.99999,6.00001C 7.99999,5.44773 7.55228,5.00001 6.99999,5.00001 Z M 6.99999,17C 6.44771,17 6,17.4477 6,18C 6,18.5523 6.44771,19 6.99999,19C 7.55228,19 7.99999,18.5523 7.99999,18C 7.99999,17.4477 7.55228,17 6.99999,17 Z M 18,15C 17.4477,15 17,15.4477 17,16C 17,16.5523 17.4477,17 18,17C 18.5523,17 19,16.5523 19,16C 19,15.4477 18.5523,15 18,15 Z ' })
                )
            );
        }
    }]);

    return MdiSourceMerge;
}(React.Component);

exports.default = MdiSourceMerge;
module.exports = exports['default'];