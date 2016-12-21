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

var MdiCandle = function (_React$Component) {
    _inherits(MdiCandle, _React$Component);

    function MdiCandle() {
        _classCallCheck(this, MdiCandle);

        return _possibleConstructorReturn(this, (MdiCandle.__proto__ || Object.getPrototypeOf(MdiCandle)).apply(this, arguments));
    }

    _createClass(MdiCandle, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 12.5,2C 10.8431,2 9.5,5.3431 9.5,7C 9.5,8.6569 10.8431,10 12.5,10C 14.1569,10 15.5,8.6569 15.5,7C 15.5,5.3431 14.1569,2 12.5,2 Z M 12.5,6.5C 13.0523,6.5 13.5,6.9477 13.5,7.5C 13.5,8.0523 13.0523,8.5 12.5,8.5C 11.9477,8.5 11.5,8.0523 11.5,7.5C 11.5,6.9477 11.9477,6.5 12.5,6.5 Z M 10,11C 9.446,11 9,11.446 9,12L 9,20L 7,20C 6.44772,20 6,19.5523 6,19L 6,18C 6,17.446 5.554,17 5,17C 4.446,17 4,17.446 4,18L 4,19C 4,20.6568 5.34315,22 7,22L 19,22C 19.554,22 20,21.554 20,21C 20,20.446 19.554,20 19,20L 16,20L 16,12C 16,11.446 15.554,11 15,11L 10,11 Z ' })
                )
            );
        }
    }]);

    return MdiCandle;
}(React.Component);

exports.default = MdiCandle;
module.exports = exports['default'];