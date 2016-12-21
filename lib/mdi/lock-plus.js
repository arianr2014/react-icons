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

var MdiLockPlus = function (_React$Component) {
    _inherits(MdiLockPlus, _React$Component);

    function MdiLockPlus() {
        _classCallCheck(this, MdiLockPlus);

        return _possibleConstructorReturn(this, (MdiLockPlus.__proto__ || Object.getPrototypeOf(MdiLockPlus)).apply(this, arguments));
    }

    _createClass(MdiLockPlus, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 18,8L 17,8L 17,6C 17,3.24 14.76,1 12,1C 9.24,1 7,3.24 7,6L 7,8L 6,8C 4.9,8 4,8.9 4,10L 4,20C 4,21.1 4.9,22 6,22L 18,22C 19.1,22 20,21.1 20,20L 20,10C 20,8.9 19.1,8 18,8 Z M 8.9,6C 8.9,4.29 10.29,2.9 12,2.9C 13.71,2.9 15.1,4.29 15.1,6L 15.1,8L 8.9,8L 8.9,6 Z M 16,16L 13,16L 13,19L 11,19L 11,16L 8,16L 8,14L 11,14L 11,11L 13,11L 13,14L 16,14L 16,16 Z ' })
                )
            );
        }
    }]);

    return MdiLockPlus;
}(React.Component);

exports.default = MdiLockPlus;
module.exports = exports['default'];