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

var MdiCloudSync = function (_React$Component) {
    _inherits(MdiCloudSync, _React$Component);

    function MdiCloudSync() {
        _classCallCheck(this, MdiCloudSync);

        return _possibleConstructorReturn(this, (MdiCloudSync.__proto__ || Object.getPrototypeOf(MdiCloudSync)).apply(this, arguments));
    }

    _createClass(MdiCloudSync, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 12.0025,3.99875C 15.64,3.99875 18.6725,6.5875 19.35,10.0388C 21.9482,10.22 23.9987,12.3588 23.9987,15C 23.9987,17.7587 21.7578,20 18.9988,20L 6.00125,20C 2.69,20 0,17.31 0,13.9987C 0,10.9087 2.33875,8.35875 5.35125,8.0375C 6.60125,5.64 9.11125,3.99875 12.0025,3.99875 Z M 7.485,9.6925C 6.055,11.4838 6.20125,14.0625 7.8175,15.6838C 8.6625,16.5237 9.81,16.9975 11.0012,16.9925L 11.0012,18.8625L 13.8287,16.035L 11.0012,13.2075L 11.0012,14.995C 10.3375,15 9.7025,14.7362 9.23375,14.2675C 8.39375,13.4275 8.26125,12.1137 8.91625,11.1225L 7.485,9.6925 Z M 9.17,8.965L 10.62,10.415L 12.0025,11.7925L 12.0025,10.005C 12.6612,10 13.3012,10.2638 13.77,10.7325C 14.605,11.5725 14.7362,12.8863 14.0825,13.8775L 15.5125,15.3075C 16.9438,13.515 16.8013,10.9375 15.1812,9.31625C 14.3363,8.47625 13.1937,8.0025 12.0025,8.0075L 12.0025,6.1375L 9.17,8.965 Z ' })
                )
            );
        }
    }]);

    return MdiCloudSync;
}(React.Component);

exports.default = MdiCloudSync;
module.exports = exports['default'];