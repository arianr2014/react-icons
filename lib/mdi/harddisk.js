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

var MdiHarddisk = function (_React$Component) {
    _inherits(MdiHarddisk, _React$Component);

    function MdiHarddisk() {
        _classCallCheck(this, MdiHarddisk);

        return _possibleConstructorReturn(this, (MdiHarddisk.__proto__ || Object.getPrototypeOf(MdiHarddisk)).apply(this, arguments));
    }

    _createClass(MdiHarddisk, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 6,2L 18,2C 19.1046,2 20,2.89543 20,4L 20,20C 20,21.1046 19.1046,22 18,22L 6,22C 4.89543,22 4,21.1046 4,20L 4,4C 4,2.89543 4.89543,2 6,2 Z M 12,4.00001C 8.68629,4.00001 5.99999,6.6863 5.99999,10C 5.99999,13.3137 8.68629,16 12.1022,15.9992L 11.2221,13.7674C 10.946,13.2891 11.1099,12.6775 11.5882,12.4013L 12.4542,11.9013C 12.9325,11.6252 13.5441,11.7891 13.8202,12.2674L 15.7446,14.6884C 17.1194,13.5889 18,11.8973 18,10C 18,6.6863 15.3137,4.00001 12,4.00001 Z M 12,9.00001C 12.5523,9.00001 13,9.44773 13,10C 13,10.5523 12.5523,11 12,11C 11.4477,11 11,10.5523 11,10C 11,9.44773 11.4477,9.00001 12,9.00001 Z M 7,18C 6.44771,18 6,18.4477 6,19C 6,19.5523 6.44771,20 7,20C 7.55228,20 8,19.5523 8,19C 8,18.4477 7.55228,18 7,18 Z M 12.0882,13.2674L 14.5757,19.5759L 17.1738,18.0759L 12.9542,12.7674L 12.0882,13.2674 Z ' })
                )
            );
        }
    }]);

    return MdiHarddisk;
}(React.Component);

exports.default = MdiHarddisk;
module.exports = exports['default'];