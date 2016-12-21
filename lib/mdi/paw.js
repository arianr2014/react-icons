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

var MdiPaw = function (_React$Component) {
    _inherits(MdiPaw, _React$Component);

    function MdiPaw() {
        _classCallCheck(this, MdiPaw);

        return _possibleConstructorReturn(this, (MdiPaw.__proto__ || Object.getPrototypeOf(MdiPaw)).apply(this, arguments));
    }

    _createClass(MdiPaw, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 8.35032,3.0111C 9.5285,2.83244 10.7791,4.12476 11.1424,5.89749C 11.5067,7.67022 10.8456,9.25139 9.66746,9.43005C 8.48829,9.60872 7.23864,8.31639 6.87437,6.54366C 6.51109,4.77192 7.17214,3.18976 8.35032,3.0111 Z M 15.5106,3.01081C 16.6888,3.18947 17.3499,4.77163 16.9866,6.54336C 16.6223,8.31609 15.3727,9.60842 14.1935,9.42976C 13.0153,9.2511 12.3542,7.66993 12.7185,5.8972C 13.0818,4.12447 14.3324,2.83214 15.5106,3.01081 Z M 3.02111,7.59539C 4.14371,7.10704 5.69112,7.98448 6.47724,9.55472C 7.26236,11.125 6.98841,12.7945 5.86582,13.2818C 4.74223,13.7702 3.1958,12.8927 2.40969,11.3225C 1.62456,9.75224 1.89851,8.08373 3.02111,7.59539 Z M 20.9789,7.59539C 22.1015,8.08373 22.3754,9.75224 21.5903,11.3225C 20.8042,12.8927 19.2578,13.7702 18.1342,13.2828C 17.0116,12.7945 16.7376,11.125 17.5228,9.55472C 18.3089,7.98447 19.8563,7.10704 20.9789,7.59539 Z M 19.3319,18.3794C 19.3736,19.3203 18.652,20.3635 17.7934,20.7506C 15.979,21.5685 13.8777,19.8682 11.8876,19.8682C 9.89754,19.8682 7.76153,21.6429 5.98185,20.7506C 5.01211,20.2643 4.31334,18.96 4.44336,17.8831C 4.62401,16.3853 6.41163,15.5932 7.4707,14.5193C 8.87916,13.0929 9.88364,10.4388 11.8876,10.4388C 13.8916,10.4388 14.9458,13.0453 16.3046,14.5193C 17.4133,15.7213 19.2585,16.7456 19.3319,18.3794 Z ' })
                )
            );
        }
    }]);

    return MdiPaw;
}(React.Component);

exports.default = MdiPaw;
module.exports = exports['default'];