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

var MdiPaperclip = function (_React$Component) {
    _inherits(MdiPaperclip, _React$Component);

    function MdiPaperclip() {
        _classCallCheck(this, MdiPaperclip);

        return _possibleConstructorReturn(this, (MdiPaperclip.__proto__ || Object.getPrototypeOf(MdiPaperclip)).apply(this, arguments));
    }

    _createClass(MdiPaperclip, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 16.5,6L 16.5,17.5C 16.5,19.71 14.71,21.5 12.5,21.5C 10.29,21.5 8.5,19.71 8.5,17.5L 8.5,5C 8.5,3.62 9.62,2.5 11,2.5C 12.38,2.5 13.5,3.62 13.5,5L 13.5,15.5C 13.5,16.05 13.05,16.5 12.5,16.5C 11.95,16.5 11.5,16.05 11.5,15.5L 11.5,6L 10,6L 10,15.5C 10,16.88 11.12,18 12.5,18C 13.88,18 15,16.88 15,15.5L 15,5C 15,2.79 13.21,1 11,1C 8.79,1 7,2.79 7,5L 7,17.5C 7,20.54 9.46,23 12.5,23C 15.54,23 18,20.54 18,17.5L 18,6L 16.5,6 Z ' })
                )
            );
        }
    }]);

    return MdiPaperclip;
}(React.Component);

exports.default = MdiPaperclip;
module.exports = exports['default'];