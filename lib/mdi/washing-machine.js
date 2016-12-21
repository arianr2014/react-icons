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

var MdiWashingMachine = function (_React$Component) {
    _inherits(MdiWashingMachine, _React$Component);

    function MdiWashingMachine() {
        _classCallCheck(this, MdiWashingMachine);

        return _possibleConstructorReturn(this, (MdiWashingMachine.__proto__ || Object.getPrototypeOf(MdiWashingMachine)).apply(this, arguments));
    }

    _createClass(MdiWashingMachine, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 14.8284,11.1716C 16.3905,12.7337 16.3905,15.2663 14.8284,16.8284C 13.2663,18.3905 10.7337,18.3905 9.17157,16.8284L 14.8284,11.1716 Z M 6,2.00001L 18,2.00001C 19.1046,2.00001 20,2.89543 20,4L 20,20C 20,21.1046 19.1046,22 18,22L 6,22C 4.89543,22 4,21.1046 4,20L 4,4C 4,2.89543 4.89543,2.00001 6,2.00001 Z M 7,4.00001C 6.44771,4.00001 6,4.44772 6,5.00001C 6,5.55229 6.44771,6.00001 7,6.00001C 7.55228,6.00001 8,5.55229 8,5.00001C 8,4.44772 7.55228,4.00001 7,4.00001 Z M 10,4.00001C 9.44771,4.00001 9,4.44772 9,5.00001C 9,5.55229 9.44771,6.00001 10,6.00001C 10.5523,6.00001 11,5.55229 11,5.00001C 11,4.44772 10.5523,4.00001 10,4.00001 Z M 12,8C 8.68629,8 6,10.6863 6,14C 6,17.3137 8.68629,20 12,20C 15.3137,20 18,17.3137 18,14C 18,10.6863 15.3137,8 12,8 Z ' })
                )
            );
        }
    }]);

    return MdiWashingMachine;
}(React.Component);

exports.default = MdiWashingMachine;
module.exports = exports['default'];