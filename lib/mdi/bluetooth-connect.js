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

var MdiBluetoothConnect = function (_React$Component) {
    _inherits(MdiBluetoothConnect, _React$Component);

    function MdiBluetoothConnect() {
        _classCallCheck(this, MdiBluetoothConnect);

        return _possibleConstructorReturn(this, (MdiBluetoothConnect.__proto__ || Object.getPrototypeOf(MdiBluetoothConnect)).apply(this, arguments));
    }

    _createClass(MdiBluetoothConnect, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 18.9994,9.99807L 16.9994,11.9981L 18.9994,13.9981L 20.9994,11.9981M 14.8784,16.2911L 12.9994,18.1701L 12.9994,14.4121M 12.9994,5.82607L 14.8784,7.70507L 12.9994,9.58407M 17.7064,7.70507L 11.9994,1.99807L 10.9994,1.99807L 10.9994,9.58407L 6.4134,4.99807L 4.9994,6.41207L 10.5854,11.9981L 4.9994,17.5841L 6.4134,18.9981L 10.9994,14.4121L 10.9994,21.9981L 11.9994,21.9981L 17.7064,16.2911L 13.4134,11.9981M 6.9994,11.9981L 4.9994,9.99807L 2.9994,11.9981L 4.9994,13.9981L 6.9994,11.9981 Z ' })
                )
            );
        }
    }]);

    return MdiBluetoothConnect;
}(React.Component);

exports.default = MdiBluetoothConnect;
module.exports = exports['default'];