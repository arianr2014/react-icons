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

var MdiSubway = function (_React$Component) {
    _inherits(MdiSubway, _React$Component);

    function MdiSubway() {
        _classCallCheck(this, MdiSubway);

        return _possibleConstructorReturn(this, (MdiSubway.__proto__ || Object.getPrototypeOf(MdiSubway)).apply(this, arguments));
    }

    _createClass(MdiSubway, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 8.5,15C 9.05229,15 9.5,15.4477 9.5,16C 9.5,16.5523 9.05229,17 8.5,17C 7.94772,17 7.5,16.5523 7.5,16C 7.5,15.4477 7.94772,15 8.5,15 Z M 7.01,9L 17.01,9L 17.01,14L 7.01,14L 7.01,9 Z M 15.5,15C 16.0523,15 16.5,15.4477 16.5,16C 16.5,16.5523 16.0523,17 15.5,17C 14.9477,17 14.5,16.5523 14.5,16C 14.5,15.4477 14.9477,15 15.5,15 Z M 18,15.88L 18,9C 18,6.38 15.32,6 12,6C 9,6 6,6.37 6,9L 6,15.88C 6,17.32 7.18,18.5 8.62,18.5L 7.5,19.62L 7.5,20L 9.17,20L 10.67,18.5L 13.5,18.5L 15,20L 16.5,20L 16.5,19.62L 15.37,18.5C 16.82,18.5 18,17.33 18,15.88 Z M 17.8,2.8C 20.47,3.84 22,6.05 22,8.86L 22,22L 2,22L 2,8.86C 2,6.05 3.53,3.84 6.2,2.8C 8,2.09001 10.14,2.00001 12,2.00001C 13.86,2.00001 16,2.09001 17.8,2.8 Z ' })
                )
            );
        }
    }]);

    return MdiSubway;
}(React.Component);

exports.default = MdiSubway;
module.exports = exports['default'];