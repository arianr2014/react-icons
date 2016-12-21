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

var MdiPlayCircleOutline = function (_React$Component) {
    _inherits(MdiPlayCircleOutline, _React$Component);

    function MdiPlayCircleOutline() {
        _classCallCheck(this, MdiPlayCircleOutline);

        return _possibleConstructorReturn(this, (MdiPlayCircleOutline.__proto__ || Object.getPrototypeOf(MdiPlayCircleOutline)).apply(this, arguments));
    }

    _createClass(MdiPlayCircleOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 12,20C 7.589,20 4.00001,16.411 4.00001,12C 4.00001,7.589 7.589,4.00001 12,4.00001C 16.411,4.00001 20,7.589 20,12C 20,16.411 16.411,20 12,20 Z M 12,2.00001C 6.477,2.00001 2.00001,6.477 2.00001,12C 2.00001,17.523 6.477,22 12,22C 17.523,22 22,17.523 22,12C 22,6.477 17.523,2.00001 12,2.00001 Z M 10,16.5L 16,12L 10,7.50001L 10,16.5 Z ' })
                )
            );
        }
    }]);

    return MdiPlayCircleOutline;
}(React.Component);

exports.default = MdiPlayCircleOutline;
module.exports = exports['default'];