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

var MdiRouterWireless = function (_React$Component) {
    _inherits(MdiRouterWireless, _React$Component);

    function MdiRouterWireless() {
        _classCallCheck(this, MdiRouterWireless);

        return _possibleConstructorReturn(this, (MdiRouterWireless.__proto__ || Object.getPrototypeOf(MdiRouterWireless)).apply(this, arguments));
    }

    _createClass(MdiRouterWireless, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'miter', d: 'M 4,13L 20,13C 20.5523,13 21,13.4477 21,14L 21,18C 21,18.5523 20.5523,19 20,19L 4,19C 3.44772,19 3,18.5523 3,18L 3,14C 3,13.4477 3.44772,13 4,13 Z M 8.99999,17L 9.99999,17L 9.99999,15L 8.99999,15L 8.99999,17 Z M 5,15L 5,17L 6.99999,17L 6.99999,15L 5,15 Z M 19,6.9336L 17.5957,8.3379C 16.1495,6.89167 14.1484,6.00001 11.9336,6.00001C 9.71849,6.00001 7.71768,6.89167 6.27148,8.3379L 4.86718,6.9336C 6.67828,5.12247 9.17809,4 11.9336,4C 14.6891,4 17.1889,5.12247 19,6.9336 Z M 16.1719,9.76173L 14.7656,11.168C 14.0433,10.4456 13.0441,10 11.9336,10C 10.8231,10 9.82389,10.4456 9.10159,11.168L 7.69531,9.76173C 8.78259,8.67446 10.2826,8 11.9336,8C 13.5845,8 15.0846,8.67446 16.1719,9.76173 Z ' })
                )
            );
        }
    }]);

    return MdiRouterWireless;
}(React.Component);

exports.default = MdiRouterWireless;
module.exports = exports['default'];