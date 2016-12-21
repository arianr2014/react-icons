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

var MdiAirConditioner = function (_React$Component) {
    _inherits(MdiAirConditioner, _React$Component);

    function MdiAirConditioner() {
        _classCallCheck(this, MdiAirConditioner);

        return _possibleConstructorReturn(this, (MdiAirConditioner.__proto__ || Object.getPrototypeOf(MdiAirConditioner)).apply(this, arguments));
    }

    _createClass(MdiAirConditioner, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 6.58634,0.663198C 8.93171,-1.1498 11.4675,1.0575 12.0406,4.4995C 12.469,4.5051 12.8937,4.6204 13.2695,4.8396C 13.7859,4.2399 14.2525,3.4175 14.0743,2.5125C 13.6495,0.354998 16.0583,-1.3896 18.3504,1.5756C 20.1645,3.9224 17.9535,6.4598 14.508,7.0309C 14.5021,7.4621 14.385,7.8894 14.1627,8.2669C 14.7613,8.7788 15.5783,9.2374 16.4768,9.0605C 18.6343,8.6357 20.3789,11.0444 17.4136,13.3366C 15.0673,15.1503 12.5304,12.9405 11.9587,9.4962C 11.5329,9.4873 11.1116,9.37 10.739,9.1503C 10.2193,9.7508 9.74651,10.5773 9.92568,11.4873C 10.3504,13.6448 7.94174,15.3894 5.64959,12.4241C 3.83219,10.073 6.05462,7.5306 9.51103,6.9657C 9.51677,6.5394 9.63113,6.1169 9.84843,5.7425C 9.24896,5.2267 8.42724,4.7613 7.52319,4.9393C 5.36571,5.364 3.62106,2.9553 6.58634,0.663198 Z M 5,16L 7,16C 8.10457,16 9,16.8954 9,18L 9,24L 7,24L 7,22L 5,22L 5,24L 3,24L 3,18C 3,16.8954 3.89543,16 5,16 Z M 5,18L 5,20L 7,20L 7,18L 5,18 Z M 12.9297,16L 15,16L 12.0703,24L 10,24L 12.9297,16 Z M 18,16L 21,16L 21,18L 18,18L 18,22L 21,22L 21,24L 18,24C 16.8954,24 16,23.1046 16,22L 16,18C 16,16.8954 16.8954,16 18,16 Z ' })
                )
            );
        }
    }]);

    return MdiAirConditioner;
}(React.Component);

exports.default = MdiAirConditioner;
module.exports = exports['default'];