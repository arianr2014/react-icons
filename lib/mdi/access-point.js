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

var MdiAccessPoint = function (_React$Component) {
    _inherits(MdiAccessPoint, _React$Component);

    function MdiAccessPoint() {
        _classCallCheck(this, MdiAccessPoint);

        return _possibleConstructorReturn(this, (MdiAccessPoint.__proto__ || Object.getPrototypeOf(MdiAccessPoint)).apply(this, arguments));
    }

    _createClass(MdiAccessPoint, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'miter', d: 'M 4.93359,4.9336C 3.12247,6.7447 2,9.2445 2,12C 2,14.7555 3.12247,17.2553 4.93359,19.0664L 6.33789,17.6621C 4.89166,16.2159 4,14.2151 4,12C 4,9.78516 4.89166,7.7841 6.33789,6.3379L 4.93359,4.9336 Z M 19.0664,4.9336L 17.6621,6.3379C 19.1083,7.7841 20,9.78516 20,12C 20,14.2151 19.1083,16.2159 17.6621,17.6621L 19.0664,19.0664C 20.8775,17.2553 22,14.7555 22,12C 22,9.2445 20.8775,6.7447 19.0664,4.9336 Z M 7.76172,7.7617C 6.67445,8.849 6,10.3491 6,12C 6,13.651 6.67445,15.151 7.76172,16.2383L 9.16797,14.832C 8.44559,14.1097 8,13.1105 8,12C 8,10.8895 8.44559,9.8903 9.16797,9.168L 7.76172,7.7617 Z M 16.2383,7.7617L 14.832,9.168C 15.5544,9.8903 16,10.8895 16,12C 16,13.1105 15.5544,14.1097 14.832,14.832L 16.2383,16.2383C 17.3255,15.151 18,13.651 18,12C 18,10.3491 17.3255,8.849 16.2383,7.7617 Z M 12,10C 10.8954,10 10,10.8954 10,12C 10,13.1046 10.8954,14 12,14C 13.1046,14 14,13.1046 14,12C 14,10.8954 13.1046,10 12,10 Z ' })
                )
            );
        }
    }]);

    return MdiAccessPoint;
}(React.Component);

exports.default = MdiAccessPoint;
module.exports = exports['default'];