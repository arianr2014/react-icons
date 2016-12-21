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

var MdiTwitter = function (_React$Component) {
    _inherits(MdiTwitter, _React$Component);

    function MdiTwitter() {
        _classCallCheck(this, MdiTwitter);

        return _possibleConstructorReturn(this, (MdiTwitter.__proto__ || Object.getPrototypeOf(MdiTwitter)).apply(this, arguments));
    }

    _createClass(MdiTwitter, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 22.4592,6.01238C 21.6896,6.35373 20.8624,6.58442 19.9944,6.68815C 20.8803,6.15701 21.5609,5.31598 21.8813,4.31378C 21.052,4.80564 20.1336,5.16278 19.156,5.3552C 18.3732,4.52112 17.2579,4 16.0235,4C 13.6534,4 11.7317,5.92147 11.7317,8.29155C 11.7317,8.6279 11.7697,8.95546 11.8429,9.2696C 8.2761,9.0906 5.11376,7.38203 2.9971,4.78551C 2.62766,5.41935 2.41602,6.15656 2.41602,6.94309C 2.41602,8.43204 3.17365,9.74563 4.32524,10.5153C 3.6218,10.4929 2.95997,10.2999 2.3814,9.97846C 2.38099,9.99639 2.38099,10.0143 2.38099,10.0324C 2.38099,12.1118 3.86034,13.8463 5.8236,14.2406C 5.4635,14.3387 5.08435,14.3912 4.69295,14.3912C 4.41641,14.3912 4.14756,14.3642 3.88547,14.3142C 4.43162,16.0191 6.01654,17.26 7.89455,17.2945C 6.42577,18.4457 4.57528,19.1318 2.56454,19.1318C 2.21813,19.1318 1.87652,19.1114 1.54078,19.0717C 3.44004,20.2894 5.69592,21 8.11951,21C 16.0134,21 20.3302,14.4605 20.3302,8.78918C 20.3302,8.60314 20.326,8.41805 20.3177,8.23395C 21.1563,7.62886 21.8839,6.87302 22.4592,6.01238 Z ' })
                )
            );
        }
    }]);

    return MdiTwitter;
}(React.Component);

exports.default = MdiTwitter;
module.exports = exports['default'];