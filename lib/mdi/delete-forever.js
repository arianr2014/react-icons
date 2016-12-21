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

var MdiDeleteForever = function (_React$Component) {
    _inherits(MdiDeleteForever, _React$Component);

    function MdiDeleteForever() {
        _classCallCheck(this, MdiDeleteForever);

        return _possibleConstructorReturn(this, (MdiDeleteForever.__proto__ || Object.getPrototypeOf(MdiDeleteForever)).apply(this, arguments));
    }

    _createClass(MdiDeleteForever, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 6,19C 6,20.1 6.9,21 8,21L 16,21C 17.1,21 18,20.1 18,19L 18,7L 6,7L 6,19 Z M 8.46,11.88L 9.87,10.47L 12,12.59L 14.12,10.47L 15.53,11.88L 13.41,14L 15.53,16.12L 14.12,17.53L 12,15.41L 9.88,17.53L 8.47,16.12L 10.59,14L 8.46,11.88 Z M 15.5,4L 14.5,3L 9.5,3L 8.5,4L 5,4L 5,6L 19,6L 19,4L 15.5,4 Z ' })
                )
            );
        }
    }]);

    return MdiDeleteForever;
}(React.Component);

exports.default = MdiDeleteForever;
module.exports = exports['default'];