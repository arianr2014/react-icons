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

var MdiBluetoothTransfer = function (_React$Component) {
    _inherits(MdiBluetoothTransfer, _React$Component);

    function MdiBluetoothTransfer() {
        _classCallCheck(this, MdiBluetoothTransfer);

        return _possibleConstructorReturn(this, (MdiBluetoothTransfer.__proto__ || Object.getPrototypeOf(MdiBluetoothTransfer)).apply(this, arguments));
    }

    _createClass(MdiBluetoothTransfer, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 14.7067,7.707L 10.4137,12L 14.7067,16.293L 8.99965,22L 7.99965,22L 7.99965,14.414L 3.41365,19L 1.99965,17.586L 7.58565,12L 1.99965,6.414L 3.41365,5L 7.99965,9.586L 7.99965,2L 8.99965,2L 14.7067,7.707 Z M 9.99965,5.828L 9.99965,9.586L 11.8786,7.707L 9.99965,5.828 Z M 11.8786,16.293L 9.99965,14.414L 9.99965,18.172L 11.8786,16.293 Z M 22.0003,8.0019L 20.0003,8.0019L 20.0003,11.0019L 18.0003,11.0019L 18.0003,8.0019L 16.0003,8.0019L 19.0003,4.0019L 22.0003,8.0019 Z M 22.0003,16.0019L 19.0003,20.0019L 16.0003,16.0019L 18.0003,16.0019L 18.0003,13.0019L 20.0003,13.0019L 20.0003,16.0019L 22.0003,16.0019 Z ' })
                )
            );
        }
    }]);

    return MdiBluetoothTransfer;
}(React.Component);

exports.default = MdiBluetoothTransfer;
module.exports = exports['default'];