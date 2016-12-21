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

var MdiPeople = function (_React$Component) {
    _inherits(MdiPeople, _React$Component);

    function MdiPeople() {
        _classCallCheck(this, MdiPeople);

        return _possibleConstructorReturn(this, (MdiPeople.__proto__ || Object.getPrototypeOf(MdiPeople)).apply(this, arguments));
    }

    _createClass(MdiPeople, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 8,5C 9.65685,5 11,6.34315 11,8C 11,9.65686 9.65685,11 8,11C 6.34315,11 5,9.65686 5,8C 5,6.34315 6.34315,5 8,5 Z M 16,5.00001C 17.6568,5.00001 19,6.34315 19,8.00001C 19,9.65686 17.6568,11 16,11C 14.3431,11 13,9.65686 13,8.00001C 13,6.34315 14.3431,5.00001 16,5.00001 Z M 8,13C 11.866,13 15,14.3431 15,16L 15,19L 1,19L 1,16C 1,14.3431 4.13401,13 8,13 Z M 16,13C 19.866,13 23,14.3431 23,16L 23,19L 17,19L 17,16C 17,14.8825 16.3402,13.8507 15.2251,13.0182L 16,13 Z ' })
                )
            );
        }
    }]);

    return MdiPeople;
}(React.Component);

exports.default = MdiPeople;
module.exports = exports['default'];