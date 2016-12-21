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

var MdiPawOff = function (_React$Component) {
    _inherits(MdiPawOff, _React$Component);

    function MdiPawOff() {
        _classCallCheck(this, MdiPawOff);

        return _possibleConstructorReturn(this, (MdiPawOff.__proto__ || Object.getPrototypeOf(MdiPawOff)).apply(this, arguments));
    }

    _createClass(MdiPawOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 2,4.26848L 3.27711,3.00001L 21.5,21.2229L 20.2315,22.5L 18.2251,20.4936C 18.0875,20.5964 17.9425,20.6834 17.7934,20.7506C 15.979,21.5685 13.8777,19.8682 11.8876,19.8682C 9.89754,19.8682 7.76153,21.6429 5.98185,20.7506C 5.01211,20.2643 4.31334,18.96 4.44336,17.8831C 4.62401,16.3853 6.41163,15.5932 7.4707,14.5193C 8.20901,13.7716 8.83632,12.6865 9.55477,11.8232L 2,4.26848 Z M 8.35032,3.0111C 9.5285,2.83244 10.7791,4.12476 11.1424,5.89749C 11.3178,6.75097 11.2555,7.56005 11.0123,8.18959L 7.02505,4.20236C 7.29074,3.55092 7.75438,3.10147 8.35032,3.0111 Z M 15.5106,3.01081C 16.6888,3.18947 17.3499,4.77163 16.9866,6.54337C 16.6223,8.3161 15.3727,9.60842 14.1935,9.42976C 13.0153,9.2511 12.3542,7.66993 12.7185,5.8972C 13.0818,4.12447 14.3324,2.83215 15.5106,3.01081 Z M 3.02111,7.59539C 4.1437,7.10705 5.69112,7.98448 6.47724,9.55473C 7.26236,11.125 6.98841,12.7945 5.86582,13.2818C 4.74222,13.7702 3.1958,12.8927 2.40968,11.3225C 1.62456,9.75225 1.89851,8.08374 3.02111,7.59539 Z M 20.9789,7.59539C 22.1015,8.08374 22.3754,9.75225 21.5903,11.3225C 20.8042,12.8927 19.2578,13.7702 18.1342,13.2828C 17.0116,12.7945 16.7376,11.125 17.5228,9.55472C 18.3089,7.98448 19.8563,7.10704 20.9789,7.59539 Z ' })
                )
            );
        }
    }]);

    return MdiPawOff;
}(React.Component);

exports.default = MdiPawOff;
module.exports = exports['default'];