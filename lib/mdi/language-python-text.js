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

var MdiLanguagePythonText = function (_React$Component) {
    _inherits(MdiLanguagePythonText, _React$Component);

    function MdiLanguagePythonText() {
        _classCallCheck(this, MdiLanguagePythonText);

        return _possibleConstructorReturn(this, (MdiLanguagePythonText.__proto__ || Object.getPrototypeOf(MdiLanguagePythonText)).apply(this, arguments));
    }

    _createClass(MdiLanguagePythonText, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 2,5.6896C 8.92303,1.07425 11.095,7.01179 11.276,10.2697C 11.457,13.5276 8.28954,17.6352 4.30768,14.9203L 4.30768,20.3049L 2,18.7664L 2,5.6896 Z M 4.2172,7.39647L 4.2172,12.7809C 7.83709,14.9529 9.08137,13.1656 9.08137,10.0887C 9.08137,5.74484 6.57012,5.58652 4.2172,7.39647 Z M 15.0768,4.15115C 15.0768,4.15115 14.8958,7.63509 15.0768,11.074C 15.4388,14.5129 19.6922,11.8433 19.6922,11.8433L 19.6922,4.92038L 22,5.20186L 22,14.4439C 22,20.5977 15.8461,20.3049 15.8461,20.3049L 15.0767,17.9972C 20.4614,17.9972 19.7827,14.4326 19.7827,14.4326C 13.2669,16.9665 12.7692,12.6126 12.7692,12.6126L 12.7692,5.6896L 15.0768,4.15115 Z ' })
                )
            );
        }
    }]);

    return MdiLanguagePythonText;
}(React.Component);

exports.default = MdiLanguagePythonText;
module.exports = exports['default'];