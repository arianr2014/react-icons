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

var MdiMessageBulletedOff = function (_React$Component) {
    _inherits(MdiMessageBulletedOff, _React$Component);

    function MdiMessageBulletedOff() {
        _classCallCheck(this, MdiMessageBulletedOff);

        return _possibleConstructorReturn(this, (MdiMessageBulletedOff.__proto__ || Object.getPrototypeOf(MdiMessageBulletedOff)).apply(this, arguments));
    }

    _createClass(MdiMessageBulletedOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 1.27,1.73L 2.54313e-006,3L 2.01,5.01L 2,22L 6,18L 15,18L 20.73,23.73L 22,22.46L 1.27,1.73 Z M 8,14L 6,14L 6,12L 8,12L 8,14 Z M 6,11L 6,9L 8,11L 6,11 Z M 20,2L 4.08,2L 10,7.92L 10,6L 18,6L 18,8L 10.08,8L 11.08,9L 18,9L 18,11L 13.08,11L 20.07,17.99C 21.14,17.95 22,17.08 22,16L 22,4C 22,2.9 21.1,2 20,2 Z ' })
                )
            );
        }
    }]);

    return MdiMessageBulletedOff;
}(React.Component);

exports.default = MdiMessageBulletedOff;
module.exports = exports['default'];