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

var MdiCarrot = function (_React$Component) {
    _inherits(MdiCarrot, _React$Component);

    function MdiCarrot() {
        _classCallCheck(this, MdiCarrot);

        return _possibleConstructorReturn(this, (MdiCarrot.__proto__ || Object.getPrototypeOf(MdiCarrot)).apply(this, arguments));
    }

    _createClass(MdiCarrot, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 16,10L 15.8,11L 13.5,11C 13.2239,11 13,11.2239 13,11.5C 13,11.7761 13.2239,12 13.5,12L 15.6,12L 14.6,17L 12.5,17C 12.2239,17 12,17.2239 12,17.5C 12,17.7761 12.2239,18 12.5,18L 14.4,18L 14,20C 14,21.1046 13.1046,22 12,22C 10.8954,22 10,21.1046 10,20L 9,15L 10.5,15C 10.7761,15 11,14.7761 11,14.5C 11,14.2239 10.7761,14 10.5,14L 8.8,14L 8,10C 8,8.80286 8.93494,7.7695 10.2871,7.28822L 8.89977,5.27691C 8.5862,4.82228 8.70054,4.19953 9.15517,3.88595C 9.6098,3.57237 10.2325,3.68672 10.5461,4.14134L 11,4.79938L 11,3C 11,2.44772 11.4477,2 12,2C 12.5523,2 13,2.44772 13,3L 13,5.28444L 14.4773,3.54192C 14.8344,3.12065 15.4654,3.06866 15.8867,3.4258C 16.308,3.78294 16.3599,4.41397 16.0028,4.83524L 13.8723,7.34827C 15.138,7.852 16,8.8505 16,10 Z ' })
                )
            );
        }
    }]);

    return MdiCarrot;
}(React.Component);

exports.default = MdiCarrot;
module.exports = exports['default'];