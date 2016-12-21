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

var MdiViolin = function (_React$Component) {
    _inherits(MdiViolin, _React$Component);

    function MdiViolin() {
        _classCallCheck(this, MdiViolin);

        return _possibleConstructorReturn(this, (MdiViolin.__proto__ || Object.getPrototypeOf(MdiViolin)).apply(this, arguments));
    }

    _createClass(MdiViolin, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 11,2C 10.446,2 10,2.446 10,3L 10,5L 10,9C 10,9.2771 10.2229,9.5 10.5,9.5L 12,9.5C 12.277,9.5 12.5,9.723 12.5,10C 12.5,10.277 12.277,10.5 12,10.5L 10.5,10.5C 9.73438,10.5 9,9.7656 9,9L 9,5.1562C 7.2731,5.5995 6,7.131 6,9L 6,10.5C 7.38071,10.5 8.5,11.6193 8.5,13C 8.5,14.3807 7.38071,15.5 6,15.5L 6,17C 6,19.77 8.23,22 11,22L 13,22C 15.77,22 18,19.77 18,17L 18,15.5C 16.6193,15.5 15.5,14.3807 15.5,13C 15.5,11.6193 16.6193,10.5 18,10.5L 18,9C 18,6.784 16.216,5 14,5L 14,3C 14,2.446 13.554,2 13,2L 11,2 Z M 10.75,16.5L 13.25,16.5L 12.75,20L 11.25,20L 10.75,16.5 Z ' })
                )
            );
        }
    }]);

    return MdiViolin;
}(React.Component);

exports.default = MdiViolin;
module.exports = exports['default'];