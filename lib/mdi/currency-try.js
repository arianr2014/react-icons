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

var MdiCurrencyTry = function (_React$Component) {
    _inherits(MdiCurrencyTry, _React$Component);

    function MdiCurrencyTry() {
        _classCallCheck(this, MdiCurrencyTry);

        return _possibleConstructorReturn(this, (MdiCurrencyTry.__proto__ || Object.getPrototypeOf(MdiCurrencyTry)).apply(this, arguments));
    }

    _createClass(MdiCurrencyTry, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 19,12C 19,16.9706 14.9706,21 10,21L 8,21L 8,12.773L 5,13.865L 5,11.7366L 8,10.6447L 8,8.87162L 5,9.96353L 5,7.83518L 8,6.74327L 8,3L 10,3L 10,6.01533L 15,4.19548L 15,6.32383L 10,8.14368L 10,9.91675L 15,8.09689L 15,10.2252L 10,12.0451L 10,19C 13.866,19 17,15.866 17,12L 19,12 Z ' })
                )
            );
        }
    }]);

    return MdiCurrencyTry;
}(React.Component);

exports.default = MdiCurrencyTry;
module.exports = exports['default'];