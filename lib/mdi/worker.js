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

var MdiWorker = function (_React$Component) {
    _inherits(MdiWorker, _React$Component);

    function MdiWorker() {
        _classCallCheck(this, MdiWorker);

        return _possibleConstructorReturn(this, (MdiWorker.__proto__ || Object.getPrototypeOf(MdiWorker)).apply(this, arguments));
    }

    _createClass(MdiWorker, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 12,15C 7.58,15 4.00001,16.79 4.00001,19L 4.00001,21L 20,21L 20,19C 20,16.79 16.42,15 12,15 Z M 8,9C 8,11.209 9.791,13 12,13C 14.209,13 16,11.209 16,9M 11.5,2C 11.195,2 11,2.21 11,2.5L 11,5.5L 10,5.5L 10,3C 10,3 7.75,3.859 7.75,6.75C 7.75,6.75 7,6.892 7,8L 17,8C 16.95,6.892 16.25,6.75 16.25,6.75C 16.25,3.859 14,3 14,3L 14,5.5L 13,5.5L 13,2.5C 13,2.21 12.805,2 12.5,2L 11.5,2 Z ' })
                )
            );
        }
    }]);

    return MdiWorker;
}(React.Component);

exports.default = MdiWorker;
module.exports = exports['default'];