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

var MdiCreditCardPlus = function (_React$Component) {
    _inherits(MdiCreditCardPlus, _React$Component);

    function MdiCreditCardPlus() {
        _classCallCheck(this, MdiCreditCardPlus);

        return _possibleConstructorReturn(this, (MdiCreditCardPlus.__proto__ || Object.getPrototypeOf(MdiCreditCardPlus)).apply(this, arguments));
    }

    _createClass(MdiCreditCardPlus, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 21,18L 24,18L 24,20L 21,20L 21,23L 19,23L 19,20L 16,20L 16,18L 19,18L 19,15L 21,15L 21,18 Z M 18.9994,7.99805L 18.9994,5.99805L 2.99939,5.99805L 2.99939,7.99805L 18.9994,7.99805 Z M 18.9994,11.9981L 2.99939,11.9981L 2.99939,17.998L 14,17.998L 14,19.998L 2.99939,19.998C 1.89437,19.998 0.999389,19.1041 0.999389,17.998L 1.0094,5.99805C 1.0094,4.89201 1.89437,3.99805 2.99939,3.99805L 18.9994,3.99805C 20.1044,3.99805 20.9994,4.89201 20.9994,5.99805L 20.9994,13L 18.9994,13L 18.9994,11.9981 Z ' })
                )
            );
        }
    }]);

    return MdiCreditCardPlus;
}(React.Component);

exports.default = MdiCreditCardPlus;
module.exports = exports['default'];