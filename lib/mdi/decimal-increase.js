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

var MdiDecimalIncrease = function (_React$Component) {
    _inherits(MdiDecimalIncrease, _React$Component);

    function MdiDecimalIncrease() {
        _classCallCheck(this, MdiDecimalIncrease);

        return _possibleConstructorReturn(this, (MdiDecimalIncrease.__proto__ || Object.getPrototypeOf(MdiDecimalIncrease)).apply(this, arguments));
    }

    _createClass(MdiDecimalIncrease, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 22,17L 19,20L 19,18L 13,18L 13,16L 19,16L 19,14L 22,17 Z M 8.99999,5.00001C 10.6568,5.00001 12,6.34316 12,8.00001L 12,11C 12,12.6569 10.6568,14 9,14C 7.34314,14 6,12.6569 6,11L 5.99999,8.00001C 5.99999,6.34316 7.34314,5.00001 8.99999,5.00001 Z M 8.99999,7.00001C 8.44771,7.00001 7.99999,7.44773 7.99999,8.00001L 8,11C 8,11.5523 8.44771,12 9,12C 9.55228,12 10,11.5523 10,11L 9.99999,8.00001C 9.99999,7.44773 9.55228,7.00001 8.99999,7.00001 Z M 16,5.00001C 17.6569,5.00001 19,6.34315 19,8L 19,11C 19,12.6569 17.6569,14 16,14C 14.3431,14 13,12.6569 13,11L 13,8C 13,6.34315 14.3431,5.00001 16,5.00001 Z M 16,7C 15.4477,7 15,7.44772 15,8L 15,11C 15,11.5523 15.4477,12 16,12C 16.5523,12 17,11.5523 17,11L 17,8C 17,7.44772 16.5523,7 16,7 Z M 4,12C 4.55228,12 5,12.4477 5,13C 5,13.5523 4.55228,14 4,14C 3.44772,14 3,13.5523 3,13C 3,12.4477 3.44772,12 4,12 Z ' })
                )
            );
        }
    }]);

    return MdiDecimalIncrease;
}(React.Component);

exports.default = MdiDecimalIncrease;
module.exports = exports['default'];