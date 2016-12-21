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

var MdiInvertColors = function (_React$Component) {
    _inherits(MdiInvertColors, _React$Component);

    function MdiInvertColors() {
        _classCallCheck(this, MdiInvertColors);

        return _possibleConstructorReturn(this, (MdiInvertColors.__proto__ || Object.getPrototypeOf(MdiInvertColors)).apply(this, arguments));
    }

    _createClass(MdiInvertColors, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 11.9994,19.5834L 11.9994,19.5834C 10.3964,19.5834 8.89038,18.9595 7.75739,17.8254C 6.62338,16.6924 5.99939,15.1865 5.99939,13.5834C 5.99939,11.9814 6.62338,10.4744 7.75739,9.34143L 12.0004,5.09845M 17.6564,7.92645L 12.0004,2.26947L 11.9994,2.27045L 6.34338,7.92645C 3.21838,11.0515 3.21838,16.1165 6.34338,19.2404C 7.90439,20.8024 9.95139,21.5834 11.9994,21.5834C 14.0474,21.5834 16.0954,20.8024 17.6564,19.2404C 20.7804,16.1165 20.7804,11.0505 17.6564,7.92645 Z ' })
                )
            );
        }
    }]);

    return MdiInvertColors;
}(React.Component);

exports.default = MdiInvertColors;
module.exports = exports['default'];