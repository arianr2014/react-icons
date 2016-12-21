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

var MdiMapMarkerMultiple = function (_React$Component) {
    _inherits(MdiMapMarkerMultiple, _React$Component);

    function MdiMapMarkerMultiple() {
        _classCallCheck(this, MdiMapMarkerMultiple);

        return _possibleConstructorReturn(this, (MdiMapMarkerMultiple.__proto__ || Object.getPrototypeOf(MdiMapMarkerMultiple)).apply(this, arguments));
    }

    _createClass(MdiMapMarkerMultiple, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '3', 'stroke-linejoin': 'round', d: 'M 14,11.5C 15.381,11.5 16.5,10.381 16.5,9C 16.5,7.61902 15.381,6.5 14,6.5C 12.62,6.5 11.5,7.61902 11.5,9C 11.5,10.381 12.62,11.5 14,11.5 Z M 14,2C 17.865,2 21,5.13399 21,9C 21,14.25 14,22 14,22C 14,22 7,14.25 7,9C 7,5.13399 10.135,2 14,2 Z M 5,9.00001C 4.98437,13.4766 10.0781,19.6641 11.0063,20.8145L 10,22C 10,22 3.00001,14.25 3.00001,9C 3.00001,5.82806 5.11039,3.1489 8.00284,2.28914C 6.15994,3.93719 5,6.33314 5,9.00001 Z ' })
                )
            );
        }
    }]);

    return MdiMapMarkerMultiple;
}(React.Component);

exports.default = MdiMapMarkerMultiple;
module.exports = exports['default'];