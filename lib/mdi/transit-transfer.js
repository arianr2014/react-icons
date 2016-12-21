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

var MdiTransitTransfer = function (_React$Component) {
    _inherits(MdiTransitTransfer, _React$Component);

    function MdiTransitTransfer() {
        _classCallCheck(this, MdiTransitTransfer);

        return _possibleConstructorReturn(this, (MdiTransitTransfer.__proto__ || Object.getPrototypeOf(MdiTransitTransfer)).apply(this, arguments));
    }

    _createClass(MdiTransitTransfer, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 16.49,15.5L 22,15.5L 22,17L 16.49,17L 16.49,18.75L 14,16.25L 16.49,13.75L 16.49,15.5 Z M 19.51,19.75L 19.51,18L 22,20.5L 19.51,23L 19.51,21.25L 14,21.25L 14,19.75L 19.51,19.75 Z M 9.5,5.5C 8.4,5.5 7.5,4.6 7.5,3.5C 7.5,2.4 8.4,1.5 9.5,1.5C 10.6,1.5 11.5,2.4 11.5,3.5C 11.5,4.6 10.6,5.5 9.5,5.5 Z M 5.75,8.9L 4,9.65L 4,13L 2,13L 2,8.3L 7.25,6.15C 7.5,6.05 7.75,6 8,6C 8.7,6 9.35,6.35 9.7,6.95L 10.65,8.55C 11.55,10 13.15,11 15,11L 15,13C 12.8,13 10.85,12 9.55,10.4L 8.95,13.4L 11,15.45L 11,23L 9,23L 9,17L 6.85,15L 5.1,23L 3,23L 5.75,8.9 Z ' })
                )
            );
        }
    }]);

    return MdiTransitTransfer;
}(React.Component);

exports.default = MdiTransitTransfer;
module.exports = exports['default'];