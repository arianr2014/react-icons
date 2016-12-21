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

var MdiWeatherSnowy = function (_React$Component) {
    _inherits(MdiWeatherSnowy, _React$Component);

    function MdiWeatherSnowy() {
        _classCallCheck(this, MdiWeatherSnowy);

        return _possibleConstructorReturn(this, (MdiWeatherSnowy.__proto__ || Object.getPrototypeOf(MdiWeatherSnowy)).apply(this, arguments));
    }

    _createClass(MdiWeatherSnowy, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 6,14C 6.55229,14 7,14.4477 7,15C 7,15.5523 6.55228,16 6,16C 3.23858,16 1,13.7614 1,11C 1,8.23919 3.23758,6.00099 5.99817,6C 6.97773,3.65105 9.29605,2.00001 12,2.00001C 15.4328,2.00001 18.2441,4.66115 18.4835,8.03304L 19,8C 21.2091,8 23,9.79086 23,12C 23,14.2091 21.2091,16 19,16L 18,16C 17.4477,16 17,15.5523 17,15C 17,14.4477 17.4477,14 18,14L 19,14C 20.1046,14 21,13.1046 21,12C 21,10.8954 20.1046,10 19,10L 17,10L 17,9C 17,6.23858 14.7614,4 12,4C 9.51284,4 7.44982,5.816 7.06456,8.19437C 6.73372,8.06877 6.37489,8 6,8C 4.34315,8 3,9.34315 3,11C 3,12.6569 4.34315,14 6,14 Z M 7.87748,18.0694L 10.0682,17.4824L 8.46447,15.8787C 8.07395,15.4882 8.07395,14.855 8.46447,14.4645C 8.85499,14.0739 9.48816,14.0739 9.87868,14.4645L 11.4824,16.0681L 12.0693,13.8775C 12.2123,13.344 12.7606,13.0274 13.2941,13.1704C 13.8276,13.3133 14.1441,13.8617 14.0012,14.3951L 13.4142,16.5858L 15.6049,15.9988C 16.1383,15.8559 16.6867,16.1724 16.8296,16.7059C 16.9726,17.2394 16.656,17.7877 16.1225,17.9307L 13.9319,18.5176L 15.5355,20.1213C 15.9261,20.5118 15.9261,21.145 15.5355,21.5355C 15.145,21.9261 14.5118,21.9261 14.1213,21.5355L 12.5176,19.9318L 11.9306,22.1225C 11.7877,22.656 11.2394,22.9726 10.7059,22.8296C 10.1724,22.6867 9.85585,22.1383 9.99879,21.6049L 10.5858,19.4142L 8.39511,20.0012C 7.86165,20.1441 7.31331,19.8276 7.17037,19.2941C 7.02743,18.7606 7.34401,18.2123 7.87748,18.0694 Z ' })
                )
            );
        }
    }]);

    return MdiWeatherSnowy;
}(React.Component);

exports.default = MdiWeatherSnowy;
module.exports = exports['default'];