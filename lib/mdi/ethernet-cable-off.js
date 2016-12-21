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

var MdiEthernetCableOff = function (_React$Component) {
    _inherits(MdiEthernetCableOff, _React$Component);

    function MdiEthernetCableOff() {
        _classCallCheck(this, MdiEthernetCableOff);

        return _possibleConstructorReturn(this, (MdiEthernetCableOff.__proto__ || Object.getPrototypeOf(MdiEthernetCableOff)).apply(this, arguments));
    }

    _createClass(MdiEthernetCableOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 11,3L 13,3L 13,7L 11,7L 11,3 Z M 8,4L 10,4L 10,8L 14,8L 14,4L 16,4L 16,11L 12.8242,11L 8,6.1758L 8,4 Z M 20,20.7229L 18.7315,22L 14,17.2685L 14,22L 10,22L 10,13.2686L 2,5.2686L 3.27711,4L 20,20.7229 Z ' })
                )
            );
        }
    }]);

    return MdiEthernetCableOff;
}(React.Component);

exports.default = MdiEthernetCableOff;
module.exports = exports['default'];