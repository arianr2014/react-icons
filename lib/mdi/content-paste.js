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

var MdiContentPaste = function (_React$Component) {
    _inherits(MdiContentPaste, _React$Component);

    function MdiContentPaste() {
        _classCallCheck(this, MdiContentPaste);

        return _possibleConstructorReturn(this, (MdiContentPaste.__proto__ || Object.getPrototypeOf(MdiContentPaste)).apply(this, arguments));
    }

    _createClass(MdiContentPaste, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 19,20L 5,20L 5,4L 7,4L 7,7L 17,7L 17,4L 19,4M 12,2C 12.55,2 13,2.45 13,3C 13,3.55 12.55,4 12,4C 11.45,4 11,3.55 11,3C 11,2.45 11.45,2 12,2 Z M 19,2L 14.82,2C 14.4,0.840004 13.3,1.90735e-006 12,1.90735e-006C 10.7,1.90735e-006 9.6,0.840004 9.18,2L 5,2C 3.9,2 3,2.9 3,4L 3,20C 3,21.1 3.9,22 5,22L 19,22C 20.1,22 21,21.1 21,20L 21,4C 21,2.9 20.1,2 19,2 Z ' })
                )
            );
        }
    }]);

    return MdiContentPaste;
}(React.Component);

exports.default = MdiContentPaste;
module.exports = exports['default'];