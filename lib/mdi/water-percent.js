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

var MdiWaterPercent = function (_React$Component) {
    _inherits(MdiWaterPercent, _React$Component);

    function MdiWaterPercent() {
        _classCallCheck(this, MdiWaterPercent);

        return _possibleConstructorReturn(this, (MdiWaterPercent.__proto__ || Object.getPrototypeOf(MdiWaterPercent)).apply(this, arguments));
    }

    _createClass(MdiWaterPercent, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 12.0025,3.2525C 12.0025,3.2525 6.00125,10 6.00125,13.9987C 6.00125,17.315 8.68625,20 12.0025,20C 15.3125,20 17.9975,17.315 17.9975,13.9987C 17.9975,10 12.0025,3.2525 12.0025,3.2525 Z M 14.4675,9.97125L 15.5325,11.03L 9.53125,17.0313L 8.46625,15.9662M 9.75125,10C 10.44,10 11.0013,10.5612 11.0013,11.25C 11.0013,11.9387 10.44,12.5 9.75125,12.5C 9.0575,12.5 8.50125,11.9387 8.50125,11.25C 8.50125,10.5612 9.0575,10 9.75125,10 Z M 14.2475,14.5025C 14.9413,14.5025 15.4975,15.0588 15.4975,15.7525C 15.4975,16.44 14.9413,17.0025 14.2475,17.0025C 13.56,17.0025 12.9975,16.44 12.9975,15.7525C 12.9975,15.0588 13.56,14.5025 14.2475,14.5025 Z ' })
                )
            );
        }
    }]);

    return MdiWaterPercent;
}(React.Component);

exports.default = MdiWaterPercent;
module.exports = exports['default'];