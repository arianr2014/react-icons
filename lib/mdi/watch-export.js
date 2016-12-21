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

var MdiWatchExport = function (_React$Component) {
    _inherits(MdiWatchExport, _React$Component);

    function MdiWatchExport() {
        _classCallCheck(this, MdiWatchExport);

        return _possibleConstructorReturn(this, (MdiWatchExport.__proto__ || Object.getPrototypeOf(MdiWatchExport)).apply(this, arguments));
    }

    _createClass(MdiWatchExport, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 14.0003,11.0009L 19.0107,11.0009L 16.5056,8.49574L 17.9198,7.08153L 22.8391,12.0009L 17.9198,16.9204L 16.5056,15.5062L 19.0107,13.0009L 14.0003,13.0009L 14.0003,11.0009 Z M 12,18C 8.68701,18 6,15.314 6,12C 6,8.686 8.68701,6.00001 12,6.00001C 13.4023,6.00001 14.6921,6.48091 15.7136,7.2868L 17.1302,5.87017L 16.954,5.727L 16,9.53674e-006L 8,9.53674e-006L 7.04501,5.727C 5.19198,7.19198 4,9.455 4,12C 4,14.545 5.19198,16.808 7.04501,18.273L 8,24L 16,24L 16.954,18.273L 17.1291,18.1307L 15.7125,16.7141C 14.6912,17.5194 13.4018,18 12,18 Z ' })
                )
            );
        }
    }]);

    return MdiWatchExport;
}(React.Component);

exports.default = MdiWatchExport;
module.exports = exports['default'];