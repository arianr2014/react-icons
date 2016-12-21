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

var MdiTwitterBox = function (_React$Component) {
    _inherits(MdiTwitterBox, _React$Component);

    function MdiTwitterBox() {
        _classCallCheck(this, MdiTwitterBox);

        return _possibleConstructorReturn(this, (MdiTwitterBox.__proto__ || Object.getPrototypeOf(MdiTwitterBox)).apply(this, arguments));
    }

    _createClass(MdiTwitterBox, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 17.7074,9.32817C 17.6434,13.9472 14.6904,17.1112 10.2824,17.3102C 8.46442,17.3922 7.14542,16.8072 5.99942,16.0782C 7.34342,16.2932 9.00842,15.7562 9.90142,14.9922C 8.58342,14.8632 7.80542,14.1932 7.43742,13.1152C 7.81742,13.1822 8.21842,13.1642 8.58142,13.0862C 7.39342,12.6872 6.54442,11.9532 6.49842,10.4142C 6.83342,10.5662 7.18142,10.7092 7.64242,10.7362C 6.75142,10.2302 6.0961,8.38117 6.84942,7.15617C 8.17042,8.60517 9.75942,9.78517 12.3664,9.94517C 11.7124,7.14817 15.4244,5.63017 16.9744,7.51017C 17.6314,7.38317 18.1634,7.13517 18.6764,6.86317C 18.4664,7.51417 18.0584,7.96717 17.5604,8.33217C 18.1044,8.25817 18.5894,8.12517 18.9994,7.92117C 18.7474,8.45117 18.1864,8.92817 17.7074,9.32817 Z M 19.9994,1.99817L 3.99942,1.99817C 2.89542,1.99817 2.00942,2.89317 2.00942,3.99817L 1.99942,19.9982C 1.99942,21.1022 2.89542,21.9982 3.99942,21.9982L 19.9994,21.9982C 21.1034,21.9982 21.9994,21.1022 21.9994,19.9982L 21.9994,3.99817C 21.9994,2.89317 21.1034,1.99817 19.9994,1.99817 Z ' })
                )
            );
        }
    }]);

    return MdiTwitterBox;
}(React.Component);

exports.default = MdiTwitterBox;
module.exports = exports['default'];