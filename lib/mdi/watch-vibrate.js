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

var MdiWatchVibrate = function (_React$Component) {
    _inherits(MdiWatchVibrate, _React$Component);

    function MdiWatchVibrate() {
        _classCallCheck(this, MdiWatchVibrate);

        return _possibleConstructorReturn(this, (MdiWatchVibrate.__proto__ || Object.getPrototypeOf(MdiWatchVibrate)).apply(this, arguments));
    }

    _createClass(MdiWatchVibrate, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 3,17.0055L 3,7.00555L 5,7.00555L 5,17.0055L 3,17.0055 Z M 19,17.0056L 19,7.00555L 21,7.00555L 21,17.0056L 19,17.0056 Z M 22,9.00555L 24,9.00555L 24,15.0056L 22,15.0056L 22,9.00555 Z M 1.27157e-006,15.0056L 1.27157e-006,9.00555L 2,9.00555L 2,15.0056L 1.27157e-006,15.0056 Z M 17.9594,11.9743C 17.9594,13.8749 17.0689,15.5736 15.677,16.6662L 14.9661,20.954L 8.9796,20.954L 8.2687,16.6662C 6.87683,15.5736 5.98633,13.8749 5.98633,11.9743C 5.98633,10.0661 6.87683,8.37485 8.2687,7.28225L 8.9796,2.99445L 14.9661,2.99445L 15.677,7.28225C 17.0689,8.37485 17.9594,10.0661 17.9594,11.9743 Z M 7.48297,11.9743C 7.48297,14.4539 9.49316,16.4641 11.9729,16.4641C 14.4526,16.4641 16.4628,14.4539 16.4628,11.9743C 16.4628,9.49455 14.4526,7.48435 11.9729,7.48435C 9.49316,7.48435 7.48296,9.49455 7.48297,11.9743 Z ' })
                )
            );
        }
    }]);

    return MdiWatchVibrate;
}(React.Component);

exports.default = MdiWatchVibrate;
module.exports = exports['default'];