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

var MdiMicroscope = function (_React$Component) {
    _inherits(MdiMicroscope, _React$Component);

    function MdiMicroscope() {
        _classCallCheck(this, MdiMicroscope);

        return _possibleConstructorReturn(this, (MdiMicroscope.__proto__ || Object.getPrototypeOf(MdiMicroscope)).apply(this, arguments));
    }

    _createClass(MdiMicroscope, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 9.46484,6.2812L 11.0488,9.0234C 8.47394,9.2567 6.50157,11.4146 6.5,14C 6.5,16.7614 8.73858,19 11.5,19C 13.5503,19 15.3124,17.7659 16.084,16L 13.5,16L 13.5,14L 21.5,14L 21.5,16L 19.248,16C 18.8433,17.5724 17.9725,18.9578 16.7917,20L 19.5,20L 19.5,22L 3.5,22L 3.5,20L 6.20835,20C 4.54751,18.5341 3.5,16.3894 3.5,14C 3.50819,10.3723 5.95644,7.2041 9.46484,6.2812 Z M 12.741,2.06941L 13.491,3.3684L 14.3571,2.8684L 17.8571,8.9306L 14.3929,10.9306L 10.8929,4.8684L 11.759,4.3684L 11.009,3.0694L 12.741,2.06941 Z ' })
                )
            );
        }
    }]);

    return MdiMicroscope;
}(React.Component);

exports.default = MdiMicroscope;
module.exports = exports['default'];