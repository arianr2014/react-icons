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

var MdiPrinter3d = function (_React$Component) {
    _inherits(MdiPrinter3d, _React$Component);

    function MdiPrinter3d() {
        _classCallCheck(this, MdiPrinter3d);

        return _possibleConstructorReturn(this, (MdiPrinter3d.__proto__ || Object.getPrototypeOf(MdiPrinter3d)).apply(this, arguments));
    }

    _createClass(MdiPrinter3d, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 19,6C 19.553,6 20,5.553 20,5C 20,4.447 19.553,4 19,4C 18.447,4 18,4.447 18,5C 18,5.553 18.447,6 19,6 Z M 19,2.00001C 20.657,2.00001 22,3.343 22,5L 22,11L 18.0006,11L 18.0006,7.00193L 6.00061,7.00193L 6,11L 2,11L 2,5C 2,3.344 3.344,2.00001 5,2.00001L 19,2.00001 Z M 17.9994,18.25C 17.9994,18.6312 17.7861,18.9625 17.4724,19.1313L 12.5657,21.8243C 12.4047,21.9351 12.2096,22 11.9994,22C 11.7891,22 11.594,21.9351 11.433,21.8242L 6.52655,19.1314C 6.21274,18.9627 5.99939,18.6312 5.99939,18.25L 5.99939,13C 5.99939,12.6188 6.21273,12.2873 6.52655,12.1186L 11.433,9.67575C 11.594,9.5649 11.7891,9.5 11.9994,9.5C 12.2096,9.5 12.4047,9.56489 12.5658,9.67573L 17.4724,12.1187C 17.7861,12.2875 17.9994,12.6188 17.9994,13L 17.9994,18.25 Z M 12.0003,11.6509L 9.04063,13L 12.0003,14.5991L 14.9585,13L 12.0003,11.6509 Z M 7.99939,17.6649L 10.9994,19.2866L 10.9994,16.3306L 7.99939,14.709L 7.99939,17.6649 Z M 15.9994,17.6649L 15.9994,14.709L 12.9994,16.3306L 12.9994,19.2875L 15.9994,17.6649 Z ' })
                )
            );
        }
    }]);

    return MdiPrinter3d;
}(React.Component);

exports.default = MdiPrinter3d;
module.exports = exports['default'];