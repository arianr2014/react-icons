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

var MdiCashMultiple = function (_React$Component) {
    _inherits(MdiCashMultiple, _React$Component);

    function MdiCashMultiple() {
        _classCallCheck(this, MdiCashMultiple);

        return _possibleConstructorReturn(this, (MdiCashMultiple.__proto__ || Object.getPrototypeOf(MdiCashMultiple)).apply(this, arguments));
    }

    _createClass(MdiCashMultiple, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 5,6L 23,6L 23,18L 5,18L 5,6 Z M 14,9.00001C 15.6568,9.00001 17,10.3432 17,12C 17,13.6569 15.6568,15 14,15C 12.3431,15 11,13.6569 11,12C 11,10.3432 12.3431,9.00001 14,9.00001 Z M 9,8C 9,9.10458 8.10457,10 7,10L 7,14C 8.10456,14 8.99999,14.8954 8.99999,16L 19,16C 19,14.8954 19.8954,14 21,14L 21,10C 19.8954,10 19,9.10458 19,8.00001L 9,8 Z M 1,10L 3,10L 3,20L 19,20L 19,22L 1,22L 1,10 Z ' })
                )
            );
        }
    }]);

    return MdiCashMultiple;
}(React.Component);

exports.default = MdiCashMultiple;
module.exports = exports['default'];