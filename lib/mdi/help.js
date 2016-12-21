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

var MdiHelp = function (_React$Component) {
    _inherits(MdiHelp, _React$Component);

    function MdiHelp() {
        _classCallCheck(this, MdiHelp);

        return _possibleConstructorReturn(this, (MdiHelp.__proto__ || Object.getPrototypeOf(MdiHelp)).apply(this, arguments));
    }

    _createClass(MdiHelp, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 10,19L 13,19L 13,22L 10,22L 10,19M 12,2C 17.3536,2.2231 19.6774,7.6179 16.5,11.67C 15.67,12.67 14.33,13.33 13.67,14.17C 13,15 13,16 13,17L 10,17C 10,15.33 10,13.92 10.67,12.92C 11.33,11.92 12.67,11.33 13.5,10.67C 15.9157,8.4301 15.32,5.2567 12,5C 10.3431,5 9,6.3431 9,8L 6,8C 6,4.6863 8.68629,2 12,2 Z ' })
                )
            );
        }
    }]);

    return MdiHelp;
}(React.Component);

exports.default = MdiHelp;
module.exports = exports['default'];