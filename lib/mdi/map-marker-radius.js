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

var MdiMapMarkerRadius = function (_React$Component) {
    _inherits(MdiMapMarkerRadius, _React$Component);

    function MdiMapMarkerRadius() {
        _classCallCheck(this, MdiMapMarkerRadius);

        return _possibleConstructorReturn(this, (MdiMapMarkerRadius.__proto__ || Object.getPrototypeOf(MdiMapMarkerRadius)).apply(this, arguments));
    }

    _createClass(MdiMapMarkerRadius, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 11.9993,1.99809C 15.3122,1.99809 17.9993,4.66195 17.9993,7.94808C 17.9993,12.4106 11.9993,18.9981 11.9993,18.9981C 11.9993,18.9981 5.99931,12.4106 5.99931,7.94808C 5.99931,4.66195 8.68645,1.99809 11.9993,1.99809 Z M 12,6C 10.8954,6 10,6.89543 10,8C 10,9.10457 10.8954,10 12,10C 13.1046,10 14,9.10457 14,8C 14,6.89543 13.1046,6 12,6 Z M 20,19C 20,21.2091 16.4183,23 12,23C 7.58172,23 4,21.2091 4,19C 4,17.7111 5.21924,16.5646 7.11252,15.833L 7.74559,16.7372C 6.66672,17.1892 6,17.8121 6,18.5C 6,19.8807 8.68629,21 12,21C 15.3137,21 18,19.8807 18,18.5C 18,17.8121 17.3333,17.1892 16.2544,16.7371L 16.8875,15.833C 18.7807,16.5646 20,17.7111 20,19 Z ' })
                )
            );
        }
    }]);

    return MdiMapMarkerRadius;
}(React.Component);

exports.default = MdiMapMarkerRadius;
module.exports = exports['default'];