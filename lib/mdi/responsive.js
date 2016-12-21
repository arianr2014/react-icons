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

var MdiResponsive = function (_React$Component) {
    _inherits(MdiResponsive, _React$Component);

    function MdiResponsive() {
        _classCallCheck(this, MdiResponsive);

        return _possibleConstructorReturn(this, (MdiResponsive.__proto__ || Object.getPrototypeOf(MdiResponsive)).apply(this, arguments));
    }

    _createClass(MdiResponsive, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 4,6L 4,16L 9.0003,16.0016L 9.0003,12.0019C 9.0003,10.8974 9.89573,10.0019 11.0003,10.0019L 16.0003,10.0019C 17.1049,10.0019 18.0003,10.8974 18.0003,12.0019L 18.0003,16L 20,16L 20,6L 4,6 Z M 5.66918e-011,20L 5.66918e-011,18L 4,18C 2.895,18 2,17.104 2,16L 2,6C 2,4.896 2.895,4 4,4L 20,4C 21.104,4 22,4.896 22,6L 21.99,16C 21.99,17.104 21.104,18 20,18L 24,18L 24,20L 18.0003,20L 18.0003,20.0019C 18.0003,21.1065 17.1049,22.0019 16.0003,22.0019L 11.0003,22.0019C 9.89573,22.0019 9.0003,21.1065 9.0003,20.0019L 9.0003,20.0017L 5.66918e-011,20 Z M 11.5003,20.0019C 11.2242,20.0019 11.0003,20.2258 11.0003,20.5019C 11.0003,20.7781 11.2242,21.0019 11.5003,21.0019C 11.7764,21.0019 12.0003,20.7781 12.0003,20.5019C 12.0003,20.2258 11.7764,20.0019 11.5003,20.0019 Z M 15.5003,20.0019C 15.2242,20.0019 15.0003,20.2258 15.0003,20.5019C 15.0003,20.7781 15.2242,21.0019 15.5003,21.0019C 15.7764,21.0019 16.0003,20.7781 16.0003,20.5019C 16.0003,20.2258 15.7764,20.0019 15.5003,20.0019 Z M 13.0003,20.0019L 13.0003,21.0019L 14.0003,21.0019L 14.0003,20.0019L 13.0003,20.0019 Z M 11.0003,12.0019L 11.0003,19.0019L 16.0003,19.0019L 16.0003,12.0019L 11.0003,12.0019 Z ' })
                )
            );
        }
    }]);

    return MdiResponsive;
}(React.Component);

exports.default = MdiResponsive;
module.exports = exports['default'];