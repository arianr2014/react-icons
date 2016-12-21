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

var MdiHelpCircle = function (_React$Component) {
    _inherits(MdiHelpCircle, _React$Component);

    function MdiHelpCircle() {
        _classCallCheck(this, MdiHelpCircle);

        return _possibleConstructorReturn(this, (MdiHelpCircle.__proto__ || Object.getPrototypeOf(MdiHelpCircle)).apply(this, arguments));
    }

    _createClass(MdiHelpCircle, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 15.0661,11.2518L 14.1711,12.1697C 13.4471,12.8937 12.9991,13.4977 12.9991,14.9977L 10.9991,14.9977L 10.9991,14.4977C 10.9991,13.3937 11.4471,12.3937 12.1711,11.6697L 13.4141,10.4117C 13.7751,10.0497 13.9991,9.54974 13.9991,8.99774C 13.9991,7.89374 13.1041,6.99774 11.9991,6.99774C 10.8951,6.99774 9.99908,7.89374 9.99908,8.99774L 7.99908,8.99774C 7.99908,6.78876 9.7901,4.99774 11.9991,4.99774C 14.2091,4.99774 15.9991,6.78876 15.9991,8.99774C 15.9991,9.87775 15.6431,10.6747 15.0661,11.2518 Z M 12.9991,18.9977L 10.9991,18.9977L 10.9991,16.9977L 12.9991,16.9977M 11.9991,1.99774C 6.4761,1.99774 1.99908,6.47473 1.99908,11.9977C 1.99908,17.5217 6.4761,21.9977 11.9991,21.9977C 17.5231,21.9977 21.9991,17.5217 21.9991,11.9977C 21.9991,6.47473 17.5231,1.99774 11.9991,1.99774 Z ' })
                )
            );
        }
    }]);

    return MdiHelpCircle;
}(React.Component);

exports.default = MdiHelpCircle;
module.exports = exports['default'];