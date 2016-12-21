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

var MdiRuler = function (_React$Component) {
    _inherits(MdiRuler, _React$Component);

    function MdiRuler() {
        _classCallCheck(this, MdiRuler);

        return _possibleConstructorReturn(this, (MdiRuler.__proto__ || Object.getPrototypeOf(MdiRuler)).apply(this, arguments));
    }

    _createClass(MdiRuler, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 1.3934,18.364L 3.16117,16.5962L 4.57538,18.0104L 5.63604,16.9497L 4.22183,15.5355L 5.63604,14.1213L 8.11092,16.5962L 9.17157,15.5355L 6.6967,13.0607L 8.11091,11.6465L 9.52513,13.0607L 10.5858,12L 9.17157,10.5858L 10.5858,9.17157L 13.0607,11.6465L 14.1213,10.5858L 11.6464,8.11091L 13.0607,6.69671L 14.4749,8.11092L 15.5355,7.05026L 14.1213,5.63605L 15.5355,4.22183L 18.0104,6.6967L 19.0711,5.63605L 16.5962,3.16117L 18.364,1.3934L 22.6066,5.63604L 5.63604,22.6066L 1.3934,18.364 Z ' })
                )
            );
        }
    }]);

    return MdiRuler;
}(React.Component);

exports.default = MdiRuler;
module.exports = exports['default'];