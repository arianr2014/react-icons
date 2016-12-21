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

var MdiGoogleGlass = function (_React$Component) {
    _inherits(MdiGoogleGlass, _React$Component);

    function MdiGoogleGlass() {
        _classCallCheck(this, MdiGoogleGlass);

        return _possibleConstructorReturn(this, (MdiGoogleGlass.__proto__ || Object.getPrototypeOf(MdiGoogleGlass)).apply(this, arguments));
    }

    _createClass(MdiGoogleGlass, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 12.9994,10.9981L 12.9994,13.4981L 18.8684,13.4981C 18.2554,17.0051 15.5074,19.4981 11.9994,19.4981C 7.8634,19.4981 4.4994,16.1341 4.4994,11.9981C 4.4994,7.86208 7.8634,4.49807 11.9994,4.49807C 14.0864,4.49807 15.8994,5.38607 17.1594,6.83907L 18.9344,5.06307C 17.2434,3.17608 14.8264,1.99807 11.9994,1.99807C 6.4764,1.99807 1.9994,6.47506 1.9994,11.9981C 1.9994,17.5211 6.4764,21.9981 11.9994,21.9981C 17.5214,21.9981 21.4994,17.5211 21.4994,11.9981L 21.4994,10.9981L 12.9994,10.9981 Z ' })
                )
            );
        }
    }]);

    return MdiGoogleGlass;
}(React.Component);

exports.default = MdiGoogleGlass;
module.exports = exports['default'];