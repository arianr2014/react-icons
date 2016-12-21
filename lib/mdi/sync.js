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

var MdiSync = function (_React$Component) {
    _inherits(MdiSync, _React$Component);

    function MdiSync() {
        _classCallCheck(this, MdiSync);

        return _possibleConstructorReturn(this, (MdiSync.__proto__ || Object.getPrototypeOf(MdiSync)).apply(this, arguments));
    }

    _createClass(MdiSync, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 12,18C 8.69,18 6,15.31 6,12C 6,10.99 6.25,10.03 6.7,9.2L 5.24,7.74C 4.46,8.97 4,10.43 4,12C 4,16.42 7.58,20 12,20L 12,23L 16,19L 12,15M 12,4L 12,1L 8,5L 12,9L 12,6C 15.31,6 18,8.69 18,12C 18,13.01 17.75,13.97 17.3,14.8L 18.76,16.26C 19.54,15.03 20,13.57 20,12C 20,7.58 16.42,4 12,4 Z ' })
                )
            );
        }
    }]);

    return MdiSync;
}(React.Component);

exports.default = MdiSync;
module.exports = exports['default'];