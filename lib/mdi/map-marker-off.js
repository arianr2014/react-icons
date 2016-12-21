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

var MdiMapMarkerOff = function (_React$Component) {
    _inherits(MdiMapMarkerOff, _React$Component);

    function MdiMapMarkerOff() {
        _classCallCheck(this, MdiMapMarkerOff);

        return _possibleConstructorReturn(this, (MdiMapMarkerOff.__proto__ || Object.getPrototypeOf(MdiMapMarkerOff)).apply(this, arguments));
    }

    _createClass(MdiMapMarkerOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 16.3734,16.0998L 11.7464,11.4727L 11.6354,11.3617L 3.2714,2.99874L 1.9994,4.27175L 5.1774,7.44973C 5.0644,7.94771 4.9994,8.46474 4.9994,8.9977C 4.9994,14.2477 11.9994,21.9977 11.9994,21.9977C 11.9994,21.9977 13.6674,20.1467 15.3744,17.6467L 18.7264,20.9977L 19.9994,19.7248M 11.9994,6.4977C 13.3804,6.4977 14.4994,7.61776 14.4994,8.9977C 14.4994,9.7347 14.1744,10.3907 13.6674,10.8477L 17.2994,14.4798C 18.2764,12.6207 18.9994,10.6817 18.9994,8.9977C 18.9994,5.13173 15.8644,1.9977 11.9994,1.9977C 10.0204,1.9977 8.2364,2.82271 6.9634,4.14376L 10.1494,7.32973C 10.6064,6.82271 11.2631,6.4977 11.9994,6.4977 Z ' })
                )
            );
        }
    }]);

    return MdiMapMarkerOff;
}(React.Component);

exports.default = MdiMapMarkerOff;
module.exports = exports['default'];