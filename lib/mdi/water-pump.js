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

var MdiWaterPump = function (_React$Component) {
    _inherits(MdiWaterPump, _React$Component);

    function MdiWaterPump() {
        _classCallCheck(this, MdiWaterPump);

        return _possibleConstructorReturn(this, (MdiWaterPump.__proto__ || Object.getPrototypeOf(MdiWaterPump)).apply(this, arguments));
    }

    _createClass(MdiWaterPump, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 19,14.5C 19,14.5 21,16.667 21,18C 21,19.104 20.104,20 19,20C 17.896,20 17,19.104 17,18C 17,16.667 19,14.5 19,14.5 Z M 5,18L 5,9.00001C 3.89543,9.00001 3,8.10458 3,7.00001C 3,5.89544 3.89543,5.00001 5,5.00001L 5.00001,4.00001C 5.00001,2.89544 5.89543,2.00001 7,2.00001L 9.00001,2.00002C 10.1046,2.00002 11,2.89544 11,4.00001L 11,5.00001L 19,5.00001C 20.1046,5.00001 21,5.89544 21,7.00001L 21,9L 21,11C 21.5523,11 22,11.4477 22,12C 22,12.5523 21.5523,13 21,13L 17,13C 16.4477,13 16,12.5523 16,12C 16,11.4477 16.4477,11 17,11L 17,9L 11,9.00001L 11,18L 12,18C 13.1046,18 14,18.8954 14,20L 14,22L 2,22L 2,20C 2,18.8954 2.89543,18 4,18L 5,18 Z ' })
                )
            );
        }
    }]);

    return MdiWaterPump;
}(React.Component);

exports.default = MdiWaterPump;
module.exports = exports['default'];