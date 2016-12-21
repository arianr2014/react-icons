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

var MdiSaxophone = function (_React$Component) {
    _inherits(MdiSaxophone, _React$Component);

    function MdiSaxophone() {
        _classCallCheck(this, MdiSaxophone);

        return _possibleConstructorReturn(this, (MdiSaxophone.__proto__ || Object.getPrototypeOf(MdiSaxophone)).apply(this, arguments));
    }

    _createClass(MdiSaxophone, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 4,2C 3.44772,2 3,2.4477 3,3C 3,3.5523 3.44772,4 4,4C 5.65685,4 7,5.3431 7,7L 7,8.6562L 7,15.5C 7,19.101 9.899,22 13.5,22C 17.101,22 20,19.101 20,15.5L 20,13C 20.554,13 21,12.554 21,12C 21,11.446 20.554,11 20,11L 14,11C 13.446,11 13,11.446 13,12C 13,12.554 13.446,13 14,13L 14,15C 14,15.554 13.554,16 13,16C 12.446,16 12,15.554 12,15L 12,11C 12.5523,11 13,10.5523 13,10C 13,9.4477 12.5523,9 12,9L 12,8C 12.5523,8 13,7.5523 13,7C 13,6.4477 12.5523,6 12,6L 12,5.5C 12,3.567 10.433,2 8.5,2L 4,2 Z ' })
                )
            );
        }
    }]);

    return MdiSaxophone;
}(React.Component);

exports.default = MdiSaxophone;
module.exports = exports['default'];