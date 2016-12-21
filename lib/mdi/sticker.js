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

var MdiSticker = function (_React$Component) {
    _inherits(MdiSticker, _React$Component);

    function MdiSticker() {
        _classCallCheck(this, MdiSticker);

        return _possibleConstructorReturn(this, (MdiSticker.__proto__ || Object.getPrototypeOf(MdiSticker)).apply(this, arguments));
    }

    _createClass(MdiSticker, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 12.1217,18.4609L 18.2995,12.2839C 16.94,12.586 15.3144,13.2031 14.0651,14.457C 13.0403,15.487 12.3905,16.8281 12.1217,18.4609 Z M 20.7541,9.99574L 21.0455,10.0013C 21.44,10.0201 21.7877,10.2701 21.9296,10.6393C 22.0728,11.0084 21.9843,11.4271 21.7044,11.7071L 11.7044,21.707C 11.5136,21.8984 11.2577,22 10.9973,22L 10.6367,21.9323C 10.2675,21.7904 10.0175,21.4427 9.99864,21.0482C 9.83717,17.6576 10.733,14.9609 12.6608,13.0339C 15.4925,10.202 19.6193,9.99574 20.7541,9.99574 Z M 12,1.99734C 16.52,1.99734 20.3387,4.996 21.5773,9.112L 19.9869,8.99747L 19.4187,9.012C 18.236,6.072 15.3573,3.99734 11.9947,3.99734C 7.576,3.99734 3.99467,7.57867 3.99467,11.9973C 3.99467,15.36 6.07067,18.2387 9.01067,19.4227C 8.972,20.1333 9.00267,20.8533 9.108,21.5733C 4.99467,20.332 2,16.5147 2,11.9973C 2,6.47467 6.47733,1.99734 12,1.99734 Z ' })
                )
            );
        }
    }]);

    return MdiSticker;
}(React.Component);

exports.default = MdiSticker;
module.exports = exports['default'];