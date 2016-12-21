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

var MdiAirplaneOff = function (_React$Component) {
    _inherits(MdiAirplaneOff, _React$Component);

    function MdiAirplaneOff() {
        _classCallCheck(this, MdiAirplaneOff);

        return _possibleConstructorReturn(this, (MdiAirplaneOff.__proto__ || Object.getPrototypeOf(MdiAirplaneOff)).apply(this, arguments));
    }

    _createClass(MdiAirplaneOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 3.1464,5.27132L 8.1324,10.2573L 2.1464,13.9983L 2.1464,15.9983L 10.1464,13.4983L 10.1464,18.9983L 8.1464,20.4983L 8.1464,21.9983L 11.6464,20.9983L 15.1464,21.9983L 15.1464,20.4983L 13.1464,18.9983L 13.1464,15.2713L 18.8734,20.9983L 20.1454,19.7253L 4.4194,3.99834M 13.1464,8.99834L 13.1464,3.49834C 13.1464,2.66933 12.4744,1.99834 11.6464,1.99834C 10.8184,1.99834 10.1464,2.66933 10.1464,3.49834L 10.1464,7.18032L 17.9734,15.0063L 21.1464,15.9983L 21.1464,13.9983L 13.1464,8.99834 Z ' })
                )
            );
        }
    }]);

    return MdiAirplaneOff;
}(React.Component);

exports.default = MdiAirplaneOff;
module.exports = exports['default'];