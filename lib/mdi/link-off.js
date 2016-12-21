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

var MdiLinkOff = function (_React$Component) {
    _inherits(MdiLinkOff, _React$Component);

    function MdiLinkOff() {
        _classCallCheck(this, MdiLinkOff);

        return _possibleConstructorReturn(this, (MdiLinkOff.__proto__ || Object.getPrototypeOf(MdiLinkOff)).apply(this, arguments));
    }

    _createClass(MdiLinkOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 2,5.26848L 3.27711,4L 20,20.7229L 18.7315,22L 14.7297,17.9982L 12.9995,17.9982L 12.9995,16.2679L 9.7297,12.9982L 7.99947,12.9982L 7.99947,11.2679L 5.4885,8.75698C 4.52176,9.50709 3.89945,10.6801 3.89945,11.9982C 3.89945,14.2621 5.73551,16.0981 7.99947,16.0981L 10.9995,16.0981L 10.9995,17.9982L 7.99947,17.9982C 4.68648,17.9982 1.99947,15.3121 1.99947,11.9982C 1.99947,10.1554 2.83033,8.50672 4.13767,7.40615L 2,5.26848 Z M 15.9995,5.99817C 19.3145,5.99817 21.9995,8.68417 21.9995,11.9982C 21.9995,14.2144 20.7986,16.1499 19.0116,17.1889L 17.5976,15.7749C 19.0678,15.1518 20.0995,13.6952 20.0995,11.9982C 20.0995,9.73413 18.2635,7.89811 15.9995,7.89811L 12.9995,7.89811L 12.9995,5.99817L 15.9995,5.99817 Z M 7.99947,5.99817L 10.9995,5.99817L 10.9995,7.89812L 9.7208,7.89812L 7.82339,6.00071L 7.99947,5.99817 Z M 15.9995,10.9982L 15.9995,12.9982L 14.8209,12.9982L 12.8209,10.9982L 15.9995,10.9982 Z ' })
                )
            );
        }
    }]);

    return MdiLinkOff;
}(React.Component);

exports.default = MdiLinkOff;
module.exports = exports['default'];