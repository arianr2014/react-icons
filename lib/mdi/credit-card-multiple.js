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

var MdiCreditCardMultiple = function (_React$Component) {
    _inherits(MdiCreditCardMultiple, _React$Component);

    function MdiCreditCardMultiple() {
        _classCallCheck(this, MdiCreditCardMultiple);

        return _possibleConstructorReturn(this, (MdiCreditCardMultiple.__proto__ || Object.getPrototypeOf(MdiCreditCardMultiple)).apply(this, arguments));
    }

    _createClass(MdiCreditCardMultiple, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 20.9989,7.99902L 20.9989,5.99902L 6.99915,5.99854L 6.99915,7.99854L 20.9989,7.99902 Z M 20.9991,15.9985L 20.9988,10.9993L 6.99902,10.9988L 6.99939,15.998L 20.9991,15.9985 Z M 20.9989,3.99903C 22.1039,3.99903 22.9989,4.89299 22.9989,5.99903L 22.9991,15.9985C 22.9991,17.1046 22.1042,17.9985 20.9991,17.9985L 6.99939,17.998C 5.89437,17.998 4.99939,17.1041 4.99939,15.998L 5.00915,5.99854C 5.00915,4.8925 5.89412,3.99854 6.99915,3.99854L 20.9989,3.99903 Z M 3,20L 18,20L 18,22L 3.00024,21.9995C 1.89522,21.9995 1.00024,21.1055 1.00024,19.9995L 1,9L 3,9L 3,20 Z ' })
                )
            );
        }
    }]);

    return MdiCreditCardMultiple;
}(React.Component);

exports.default = MdiCreditCardMultiple;
module.exports = exports['default'];