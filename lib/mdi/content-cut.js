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

var MdiContentCut = function (_React$Component) {
    _inherits(MdiContentCut, _React$Component);

    function MdiContentCut() {
        _classCallCheck(this, MdiContentCut);

        return _possibleConstructorReturn(this, (MdiContentCut.__proto__ || Object.getPrototypeOf(MdiContentCut)).apply(this, arguments));
    }

    _createClass(MdiContentCut, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 19,3L 13,9L 15,11L 22,4L 22,3M 12,12.5C 11.72,12.5 11.5,12.28 11.5,12C 11.5,11.72 11.72,11.5 12,11.5C 12.28,11.5 12.5,11.72 12.5,12C 12.5,12.28 12.28,12.5 12,12.5 Z M 6,20C 4.9,20 4,19.11 4,18C 4,16.89 4.9,16 6,16C 7.1,16 8,16.89 8,18C 8,19.11 7.1,20 6,20 Z M 6,8C 4.9,8 4,7.11 4,6C 4,4.89 4.9,4 6,4C 7.1,4 8,4.89 8,6C 8,7.11 7.1,8 6,8 Z M 9.64,7.64C 9.87,7.14 10,6.59 10,6C 10,3.79 8.21,2 6,2C 3.79,2 2,3.79 2,6C 2,8.21 3.79,10 6,10C 6.59,10 7.14,9.87 7.64,9.64L 10,12L 7.64,14.36C 7.14,14.13 6.59,14 6,14C 3.79,14 2,15.79 2,18C 2,20.21 3.79,22 6,22C 8.21,22 10,20.21 10,18C 10,17.41 9.87,16.86 9.64,16.36L 12,14L 19,21L 22,21L 22,20L 9.64,7.64 Z ' })
                )
            );
        }
    }]);

    return MdiContentCut;
}(React.Component);

exports.default = MdiContentCut;
module.exports = exports['default'];