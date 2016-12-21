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

var MdiRemote = function (_React$Component) {
    _inherits(MdiRemote, _React$Component);

    function MdiRemote() {
        _classCallCheck(this, MdiRemote);

        return _possibleConstructorReturn(this, (MdiRemote.__proto__ || Object.getPrototypeOf(MdiRemote)).apply(this, arguments));
    }

    _createClass(MdiRemote, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 12,1.90735e-006C 8.96,1.90735e-006 6.21,1.23 4.22,3.22L 5.63,4.63C 7.26,3.01 9.51,2 12,2C 14.49,2 16.74,3.01 18.36,4.64L 19.77,3.23C 17.79,1.23 15.04,1.90735e-006 12,1.90735e-006 Z M 7.05,6.05L 8.46,7.46C 9.37,6.56 10.62,6 12,6C 13.38,6 14.63,6.56 15.54,7.46L 16.95,6.05C 15.68,4.78 13.93,4 12,4C 10.07,4 8.32,4.78 7.05,6.05 Z M 12,15C 10.9,15 10,14.1 10,13C 10,11.9 10.9,11 12,11C 13.1,11 14,11.9 14,13C 14,14.1 13.1,15 12,15 Z M 15,9L 9,9C 8.45,9 8,9.45 8,10L 8,22C 8,22.55 8.45,23 9,23L 15,23C 15.55,23 16,22.55 16,22L 16,10C 16,9.45 15.55,9 15,9 Z ' })
                )
            );
        }
    }]);

    return MdiRemote;
}(React.Component);

exports.default = MdiRemote;
module.exports = exports['default'];