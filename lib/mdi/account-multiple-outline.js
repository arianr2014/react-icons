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

var MdiAccountMultipleOutline = function (_React$Component) {
    _inherits(MdiAccountMultipleOutline, _React$Component);

    function MdiAccountMultipleOutline() {
        _classCallCheck(this, MdiAccountMultipleOutline);

        return _possibleConstructorReturn(this, (MdiAccountMultipleOutline.__proto__ || Object.getPrototypeOf(MdiAccountMultipleOutline)).apply(this, arguments));
    }

    _createClass(MdiAccountMultipleOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 16.5,6.5C 17.6,6.5 18.5,7.4 18.5,8.5C 18.5,9.6 17.6,10.5 16.5,10.5C 15.4,10.5 14.5,9.6 14.5,8.5C 14.5,7.4 15.4,6.5 16.5,6.5 Z M 16.5,12C 18.43,12 20,10.43 20,8.5C 20,6.57 18.43,5 16.5,5C 14.57,5 13,6.57 13,8.5C 13,10.43 14.57,12 16.5,12 Z M 7.5,6.5C 8.6,6.5 9.5,7.4 9.5,8.5C 9.5,9.6 8.6,10.5 7.5,10.5C 6.4,10.5 5.5,9.6 5.5,8.5C 5.5,7.4 6.4,6.5 7.5,6.5 Z M 7.5,12C 9.43,12 11,10.43 11,8.5C 11,6.57 9.43,5 7.5,5C 5.57,5 4,6.57 4,8.5C 4,10.43 5.57,12 7.5,12 Z M 21.5,17.5L 14,17.5L 14,16.25C 14,15.79 13.8,15.39 13.48,15.03C 14.36,14.73 15.44,14.5 16.5,14.5C 18.94,14.5 21.5,15.71 21.5,16.25M 12.5,17.5L 2.5,17.5L 2.5,16.25C 2.5,15.71 5.06,14.5 7.5,14.5C 9.94,14.5 12.5,15.71 12.5,16.25M 16.5,13C 15.3,13 13.43,13.34 12,14C 10.57,13.33 8.7,13 7.5,13C 5.33,13 1,14.08 1,16.25L 1,19L 23,19L 23,16.25C 23,14.08 18.67,13 16.5,13 Z ' })
                )
            );
        }
    }]);

    return MdiAccountMultipleOutline;
}(React.Component);

exports.default = MdiAccountMultipleOutline;
module.exports = exports['default'];