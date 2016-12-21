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

var MdiCreditCardOff = function (_React$Component) {
    _inherits(MdiCreditCardOff, _React$Component);

    function MdiCreditCardOff() {
        _classCallCheck(this, MdiCreditCardOff);

        return _possibleConstructorReturn(this, (MdiCreditCardOff.__proto__ || Object.getPrototypeOf(MdiCreditCardOff)).apply(this, arguments));
    }

    _createClass(MdiCreditCardOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 0.933331,4.20183L 2.21044,2.93335L 20,20.7229L 18.7315,22L 16.7296,19.998L 3.99939,19.998C 2.89437,19.998 1.99939,19.1041 1.99939,17.998L 2.0094,5.99805C 2.0094,5.78059 2.04361,5.57133 2.10697,5.37546L 0.933331,4.20183 Z M 19.9994,7.99805L 19.9994,5.99805L 7.82074,5.99805L 5.82074,3.99805L 19.9994,3.99805C 21.1044,3.99805 21.9994,4.89201 21.9994,5.99805L 21.9994,17.998C 21.9994,18.5965 21.7374,19.1329 21.3218,19.4991L 19.8207,17.998L 19.9994,17.998L 19.9994,11.998L 13.8207,11.998L 9.82073,7.99805L 19.9994,7.99805 Z M 3.99939,7.99805L 4.72956,7.99805L 3.99939,7.26787L 3.99939,7.99805 Z M 3.99939,11.9981L 3.99939,17.998L 14.7296,17.998L 8.72957,11.9981L 3.99939,11.9981 Z ' })
                )
            );
        }
    }]);

    return MdiCreditCardOff;
}(React.Component);

exports.default = MdiCreditCardOff;
module.exports = exports['default'];