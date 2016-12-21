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

var MdiCloudPrint = function (_React$Component) {
    _inherits(MdiCloudPrint, _React$Component);

    function MdiCloudPrint() {
        _classCallCheck(this, MdiCloudPrint);

        return _possibleConstructorReturn(this, (MdiCloudPrint.__proto__ || Object.getPrototypeOf(MdiCloudPrint)).apply(this, arguments));
    }

    _createClass(MdiCloudPrint, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 12,2C 9.11,2 6.59961,3.6391 5.34961,6.0391C 2.33961,6.3591 1.27157e-006,8.91 1.27157e-006,12C 1.27157e-006,15.31 2.69,18 6,18L 6,22L 18,22L 18,18L 19,18C 21.76,18 24,15.76 24,13C 24,10.36 21.9496,8.2191 19.3496,8.0391C 18.6696,4.5891 15.64,2 12,2 Z M 8,13L 16,13L 16,20L 8,20L 8,13 Z M 9,14L 9,15L 15,15L 15,14L 9,14 Z M 9,16L 9,17L 15,17L 15,16L 9,16 Z M 9,18L 9,19L 15,19L 15,18L 9,18 Z ' })
                )
            );
        }
    }]);

    return MdiCloudPrint;
}(React.Component);

exports.default = MdiCloudPrint;
module.exports = exports['default'];