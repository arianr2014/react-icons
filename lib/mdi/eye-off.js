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

var MdiEyeOff = function (_React$Component) {
    _inherits(MdiEyeOff, _React$Component);

    function MdiEyeOff() {
        _classCallCheck(this, MdiEyeOff);

        return _possibleConstructorReturn(this, (MdiEyeOff.__proto__ || Object.getPrototypeOf(MdiEyeOff)).apply(this, arguments));
    }

    _createClass(MdiEyeOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 11.8344,9.01477L 14.9824,12.1627C 14.9854,12.1068 14.9994,12.0547 14.9994,11.9977C 14.9994,10.3408 13.6564,8.99774 11.9994,8.99774C 11.9424,8.99774 11.8904,9.01172 11.8344,9.01477 Z M 7.52838,9.80072L 9.07538,11.3467C 9.02838,11.5568 8.99939,11.7737 8.99939,11.9977C 8.99939,13.6547 10.3424,14.9977 11.9994,14.9977C 12.2244,14.9977 12.4414,14.9688 12.6504,14.9227L 14.1974,16.4688C 13.5314,16.7968 12.7914,16.9977 11.9994,16.9977C 9.2384,16.9977 6.99939,14.7598 6.99939,11.9977C 6.99939,11.2057 7.20038,10.4667 7.52838,9.80072 Z M 1.99939,4.27075L 4.27838,6.55072L 4.7334,7.00574C 3.0834,8.29773 1.7804,10.0157 0.99939,11.9977C 2.72739,16.3867 6.99738,19.4977 11.9994,19.4977C 13.5494,19.4977 15.0284,19.1978 16.3834,18.6558L 16.8074,19.0787L 19.7264,21.9987L 20.9994,20.7258L 3.2724,2.99872M 11.9994,6.99774C 14.7604,6.99774 16.9994,9.23676 16.9994,11.9977C 16.9994,12.6437 16.8674,13.2568 16.6444,13.8237L 19.5664,16.7457C 21.0744,15.4847 22.2674,13.8577 22.9994,11.9977C 21.2714,7.60876 17.0024,4.49774 11.9994,4.49774C 10.5994,4.49774 9.26038,4.74872 8.01538,5.19574L 10.1734,7.35376C 10.7404,7.13074 11.3534,6.99774 11.9994,6.99774 Z ' })
                )
            );
        }
    }]);

    return MdiEyeOff;
}(React.Component);

exports.default = MdiEyeOff;
module.exports = exports['default'];