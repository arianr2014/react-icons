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

var MdiTwitterCircle = function (_React$Component) {
    _inherits(MdiTwitterCircle, _React$Component);

    function MdiTwitterCircle() {
        _classCallCheck(this, MdiTwitterCircle);

        return _possibleConstructorReturn(this, (MdiTwitterCircle.__proto__ || Object.getPrototypeOf(MdiTwitterCircle)).apply(this, arguments));
    }

    _createClass(MdiTwitterCircle, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 17.7074,9.32817C 18.1864,8.92817 18.7474,8.45117 18.9994,7.92117C 18.5894,8.12517 18.1044,8.25817 17.5604,8.33217C 18.0584,7.96717 18.4664,7.51417 18.6764,6.86317C 18.1634,7.13517 17.6314,7.38317 16.9744,7.51017C 15.4244,5.63017 11.7124,7.14817 12.3664,9.94517C 9.75942,9.78517 8.17042,8.60517 6.84942,7.15617C 6.0961,8.38116 6.75141,10.2302 7.64242,10.7362C 7.18142,10.7092 6.83343,10.5662 6.49842,10.4142C 6.54442,11.9532 7.39342,12.6872 8.58142,13.0862C 8.21842,13.1642 7.81742,13.1822 7.43743,13.1152C 7.80542,14.1932 8.58342,14.8632 9.90142,14.9922C 9.00842,15.7562 7.34342,16.2932 5.99942,16.0782C 7.14543,16.8072 8.46442,17.3922 10.2824,17.3102C 14.6904,17.1112 17.6434,13.9472 17.7074,9.32817 Z M 12,2.00001C 17.5228,2.00001 22,6.47716 22,12C 22,17.5229 17.5228,22 12,22C 6.47715,22 2,17.5229 2,12C 2,6.47716 6.47715,2.00001 12,2.00001 Z ' })
                )
            );
        }
    }]);

    return MdiTwitterCircle;
}(React.Component);

exports.default = MdiTwitterCircle;
module.exports = exports['default'];