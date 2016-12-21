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

var MdiKey = function (_React$Component) {
    _inherits(MdiKey, _React$Component);

    function MdiKey() {
        _classCallCheck(this, MdiKey);

        return _possibleConstructorReturn(this, (MdiKey.__proto__ || Object.getPrototypeOf(MdiKey)).apply(this, arguments));
    }

    _createClass(MdiKey, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 7,14C 5.9,14 5,13.1 5,12C 5,10.9 5.9,10 7,10C 8.1,10 9,10.9 9,12C 9,13.1 8.1,14 7,14 Z M 12.65,10C 11.83,7.67 9.61,6 7,6C 3.69,6 1,8.69 1,12C 1,15.31 3.69,18 7,18C 9.61,18 11.83,16.33 12.65,14L 17,14L 17,18L 21,18L 21,14L 23,14L 23,10L 12.65,10 Z ' })
                )
            );
        }
    }]);

    return MdiKey;
}(React.Component);

exports.default = MdiKey;
module.exports = exports['default'];