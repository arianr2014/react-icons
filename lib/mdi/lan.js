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

var MdiLan = function (_React$Component) {
    _inherits(MdiLan, _React$Component);

    function MdiLan() {
        _classCallCheck(this, MdiLan);

        return _possibleConstructorReturn(this, (MdiLan.__proto__ || Object.getPrototypeOf(MdiLan)).apply(this, arguments));
    }

    _createClass(MdiLan, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 10,2C 8.89199,2 8,2.892 8,4L 8,7C 8,8.108 8.89199,9 10,9L 11,9L 11,11L 2,11L 2,13L 6,13L 6,15L 5,15C 3.89199,15 3,15.892 3,17L 3,20C 3,21.108 3.89199,22 5,22L 9,22C 10.108,22 11,21.108 11,20L 11,17C 11,15.892 10.108,15 9,15L 8,15L 8,13L 16,13L 16,15L 15,15C 13.892,15 13,15.892 13,17L 13,20C 13,21.108 13.892,22 15,22L 19,22C 20.108,22 21,21.108 21,20L 21,17C 21,15.892 20.108,15 19,15L 18,15L 18,13L 22,13L 22,11L 13,11L 13,9L 14,9C 15.108,9 16,8.108 16,7L 16,4C 16,2.892 15.108,2 14,2L 10,2 Z M 10,4L 14,4L 14,7L 10,7L 10,4 Z M 5,17L 9,17L 9,20L 5,20L 5,17 Z M 15,17L 19,17L 19,20L 15,20L 15,17 Z ' })
                )
            );
        }
    }]);

    return MdiLan;
}(React.Component);

exports.default = MdiLan;
module.exports = exports['default'];