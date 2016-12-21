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

var MdiHandPointingRight = function (_React$Component) {
    _inherits(MdiHandPointingRight, _React$Component);

    function MdiHandPointingRight() {
        _classCallCheck(this, MdiHandPointingRight);

        return _possibleConstructorReturn(this, (MdiHandPointingRight.__proto__ || Object.getPrototypeOf(MdiHandPointingRight)).apply(this, arguments));
    }

    _createClass(MdiHandPointingRight, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 21.0006,8.99999C 21.5529,8.99999 22.0006,9.44771 22.0006,9.99999C 22.0006,10.5523 21.5529,11 21.0006,11L 16.5274,11L 16.398,12.2097L 14.2037,17.1461C 13.9826,17.648 13.4663,18 12.864,18L 8.5,18C 7.69706,18 7.00057,17.2727 7.00057,16.5L 7.00057,9.99996C 7.00057,9.61364 7.16349,9.26367 7.42676,9.01033L 11.6275,4.10066L 12.3984,4.83906C 12.5962,5.02872 12.7184,5.29121 12.7184,5.58097L 12.6944,5.80216L 11.0006,8.99996L 21.0006,8.99999 Z M 2,18L 2.00057,9.99996L 5.00057,9.99996L 5.00057,18L 2,18 Z ' })
                )
            );
        }
    }]);

    return MdiHandPointingRight;
}(React.Component);

exports.default = MdiHandPointingRight;
module.exports = exports['default'];