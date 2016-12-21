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

var MdiAlphabetical = function (_React$Component) {
    _inherits(MdiAlphabetical, _React$Component);

    function MdiAlphabetical() {
        _classCallCheck(this, MdiAlphabetical);

        return _possibleConstructorReturn(this, (MdiAlphabetical.__proto__ || Object.getPrototypeOf(MdiAlphabetical)).apply(this, arguments));
    }

    _createClass(MdiAlphabetical, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 6,11C 7.10456,11 7.99999,11.8954 7.99999,13L 8,17L 4,17C 2.89543,17 2,16.1046 2,15L 2,13C 2,11.8954 2.89543,11 4,11L 6,11 Z M 4,13L 4,15L 6,15L 6,13L 4,13 Z M 20,13L 20,15L 22,15L 22,17L 20,17C 18.8954,17 18,16.1046 18,15L 18,13C 18,11.8954 18.8954,11 20,11L 22,11L 22,13L 20,13 Z M 12,7L 12,11L 14,11C 15.1046,11 16,11.8954 16,13L 16,15C 16,16.1046 15.1046,17 14,17L 12,17C 10.8954,17 10,16.1046 10,15L 10,7L 12,7 Z M 12,15L 14,15L 14,13L 12,13L 12,15 Z ' })
                )
            );
        }
    }]);

    return MdiAlphabetical;
}(React.Component);

exports.default = MdiAlphabetical;
module.exports = exports['default'];