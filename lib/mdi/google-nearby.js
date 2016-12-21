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

var MdiGoogleNearby = function (_React$Component) {
    _inherits(MdiGoogleNearby, _React$Component);

    function MdiGoogleNearby() {
        _classCallCheck(this, MdiGoogleNearby);

        return _possibleConstructorReturn(this, (MdiGoogleNearby.__proto__ || Object.getPrototypeOf(MdiGoogleNearby)).apply(this, arguments));
    }

    _createClass(MdiGoogleNearby, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 4.19922,3C 3.57378,3.0005 3.05358,3.482 3.00391,4.1055C 2.99364,8.6637 3,13.2369 3,17.8008C 3.00086,18.4629 3.53709,19 4.19922,19C 4.3124,18.9997 4.42459,18.983 4.5332,18.9512C 8.49161,16.8363 12.5622,14.3798 16.5195,12.084C 16.9391,11.8858 17.2068,11.464 17.207,11C 17.207,10.568 16.9753,10.1702 16.5996,9.957C 12.5034,7.5633 8.21087,5.0698 4.53125,3.0469C 4.42356,3.0159 4.31128,3.0001 4.19922,3 Z M 19.873,6C 19.761,6.0001 19.6507,6.0159 19.543,6.0469C 18.5973,6.5668 17.5344,7.1797 16.5215,7.752C 16.8549,7.9466 17.1922,8.1404 17.5234,8.334C 18.4785,8.8771 19.0743,9.9009 19.0742,11L 19.0742,11.002C 19.0736,12.1838 18.3841,13.2692 17.3164,13.7735C 15.923,14.5939 12.9161,16.3577 11.3184,17.2852C 14.0656,18.8948 16.8245,20.5009 19.5391,21.9512C 19.6477,21.9831 19.7598,21.9997 19.873,22C 20.5352,22 21.0734,21.463 21.0742,20.8008C 21.0742,16.237 21.0786,11.6638 21.0683,7.1055C 21.0187,6.482 20.4985,6.0005 19.873,6 Z ' })
                )
            );
        }
    }]);

    return MdiGoogleNearby;
}(React.Component);

exports.default = MdiGoogleNearby;
module.exports = exports['default'];