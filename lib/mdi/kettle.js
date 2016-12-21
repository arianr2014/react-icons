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

var MdiKettle = function (_React$Component) {
    _inherits(MdiKettle, _React$Component);

    function MdiKettle() {
        _classCallCheck(this, MdiKettle);

        return _possibleConstructorReturn(this, (MdiKettle.__proto__ || Object.getPrototypeOf(MdiKettle)).apply(this, arguments));
    }

    _createClass(MdiKettle, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 12.5,3C 7.80558,3 4,5.6863 4,9L 4,9C 4.00296,10.1852 4.50316,11.3433 5.4375,12.3281C 4.53045,13.5211 4,14.9555 4,16.5C 4.01019,17.6409 4,18.8295 4,20C 4,21.108 4.89199,22 6,22L 19,22C 20.108,22 21,21.108 21,20C 20.9958,18.85 21,17.6105 21,16.5C 20.9984,15.2768 20.6578,14.0726 20.0078,12.9922L 22,11L 19,8L 16.9043,10.0957C 15.5773,9.3821 14.054,9.0031 12.5,9C 10.653,9 8.94885,9.5254 7.55469,10.4082C 7.1932,9.9694 7.00361,9.4881 7,9C 6.99999,7.2051 9.46242,5.75 12.5,5.75L 12.5,5.75C 13.9304,5.7515 15.3035,6.0821 16.3281,6.6719L 18.3496,4.6504C 16.7712,3.5917 14.6774,3.001 12.5,3 Z M 12.5,11C 12.841,11 13.1732,11.0353 13.5,11.0859C 10.3862,11.5681 8,14.2511 8,17.5L 8,20L 6,20L 6,17.5C 6,13.9101 8.91015,11 12.5,11 Z ' })
                )
            );
        }
    }]);

    return MdiKettle;
}(React.Component);

exports.default = MdiKettle;
module.exports = exports['default'];