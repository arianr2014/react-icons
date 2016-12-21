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

var MdiRotateRight = function (_React$Component) {
    _inherits(MdiRotateRight, _React$Component);

    function MdiRotateRight() {
        _classCallCheck(this, MdiRotateRight);

        return _possibleConstructorReturn(this, (MdiRotateRight.__proto__ || Object.getPrototypeOf(MdiRotateRight)).apply(this, arguments));
    }

    _createClass(MdiRotateRight, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 16.89,15.48L 18.31,16.89C 19.21,15.73 19.76,14.39 19.93,13L 17.91,13C 17.77,13.87 17.43,14.72 16.89,15.48 Z M 13,17.9L 13,19.92C 14.39,19.75 15.74,19.21 16.9,18.31L 15.46,16.87C 14.71,17.41 13.87,17.76 13,17.9 Z M 19.93,11C 19.76,9.61 19.21,8.27 18.31,7.11L 16.89,8.53C 17.43,9.28 17.77,10.13 17.91,11M 15.55,5.55L 11,1L 11,4.07C 7.06,4.56 4,7.92 4,12C 4,16.08 7.05,19.44 11,19.93L 11,17.91C 8.16,17.43 6,14.97 6,12C 6,9.03 8.16,6.57 11,6.09L 11,10L 15.55,5.55 Z ' })
                )
            );
        }
    }]);

    return MdiRotateRight;
}(React.Component);

exports.default = MdiRotateRight;
module.exports = exports['default'];