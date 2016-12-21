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

var MdiRobot = function (_React$Component) {
    _inherits(MdiRobot, _React$Component);

    function MdiRobot() {
        _classCallCheck(this, MdiRobot);

        return _possibleConstructorReturn(this, (MdiRobot.__proto__ || Object.getPrototypeOf(MdiRobot)).apply(this, arguments));
    }

    _createClass(MdiRobot, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 12,2C 13.1046,2 14,2.89543 14,4C 14,4.74028 13.5978,5.38663 13,5.73244L 13,7.00002L 14,7.00002C 17.866,7.00002 21,10.134 21,14L 22,14C 22.5522,14 23,14.4477 23,15L 23,18C 23,18.5523 22.5522,19 22,19L 21,19L 21,20C 21,21.1046 20.1046,22 19,22L 5,22C 3.89543,22 3,21.1046 3,20L 3,19L 2,19C 1.44771,19 0.999999,18.5523 0.999999,18L 0.999999,15C 0.999999,14.4477 1.44771,14 2,14L 3,14C 3,10.134 6.134,7.00002 10,7.00002L 11,7.00002L 11,5.73244C 10.4022,5.38663 10,4.74028 10,4C 10,2.89543 10.8954,2 12,2 Z M 7.5,13C 6.11929,13 5,14.1193 5,15.5C 5,16.8807 6.11929,18 7.5,18C 8.88071,18 10,16.8807 10,15.5C 10,14.1193 8.88071,13 7.5,13 Z M 16.5,13C 15.1193,13 14,14.1193 14,15.5C 14,16.8807 15.1193,18 16.5,18C 17.8807,18 19,16.8807 19,15.5C 19,14.1193 17.8807,13 16.5,13 Z ' })
                )
            );
        }
    }]);

    return MdiRobot;
}(React.Component);

exports.default = MdiRobot;
module.exports = exports['default'];