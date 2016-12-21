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

var MdiLockUnlocked = function (_React$Component) {
    _inherits(MdiLockUnlocked, _React$Component);

    function MdiLockUnlocked() {
        _classCallCheck(this, MdiLockUnlocked);

        return _possibleConstructorReturn(this, (MdiLockUnlocked.__proto__ || Object.getPrototypeOf(MdiLockUnlocked)).apply(this, arguments));
    }

    _createClass(MdiLockUnlocked, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 18,8C 19.104,8 20,8.896 20,10L 20,20C 20,21.104 19.104,22 18,22L 6,22C 4.895,22 4,21.104 4,20L 4,10C 4,8.896 4.895,8 6,8L 15,8.00009L 15,6.00009C 15,4.34323 13.6569,3.00009 12,3.00009C 10.3431,3.00009 9,4.34323 9,6.00009L 7,6C 7,3.23902 9.23899,1.00001 12,1.00001C 14.761,1.00001 17,3.23902 17,6L 17,8L 18,8 Z M 12,17C 13.104,17 14,16.104 14,15C 14,13.896 13.104,13 12,13C 10.895,13 10,13.896 10,15C 10,16.104 10.895,17 12,17 Z ' })
                )
            );
        }
    }]);

    return MdiLockUnlocked;
}(React.Component);

exports.default = MdiLockUnlocked;
module.exports = exports['default'];