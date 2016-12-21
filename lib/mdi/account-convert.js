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

var MdiAccountConvert = function (_React$Component) {
    _inherits(MdiAccountConvert, _React$Component);

    function MdiAccountConvert() {
        _classCallCheck(this, MdiAccountConvert);

        return _possibleConstructorReturn(this, (MdiAccountConvert.__proto__ || Object.getPrototypeOf(MdiAccountConvert)).apply(this, arguments));
    }

    _createClass(MdiAccountConvert, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 7.52,21.48L 8.85,20.16L 12.66,23.97L 12,24C 5.71,24 0.559998,19.16 0.0500031,13L 1.55,13C 1.91,16.76 4.25,19.94 7.52,21.48 Z M 16.48,2.52001L 15.15,3.83985L 11.34,0.0300083L 12,7.62939e-006C 18.29,7.62939e-006 23.44,4.83985 23.95,11L 22.45,11C 22.0898,7.24024 19.75,4.07001 16.48,2.52001 Z M 6,17C 6,15 10,13.8999 12,13.8999C 14,13.8999 18,15 18,17L 18,18L 6,18L 6,17 Z M 15,9.00004C 15,10.6581 13.656,12 12,12C 10.344,12 9,10.6581 9,9.00004C 9,7.34404 10.344,6.00004 12,6.00004C 13.656,6.00004 15,7.34404 15,9.00004 Z ' })
                )
            );
        }
    }]);

    return MdiAccountConvert;
}(React.Component);

exports.default = MdiAccountConvert;
module.exports = exports['default'];