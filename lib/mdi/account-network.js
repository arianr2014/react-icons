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

var MdiAccountNetwork = function (_React$Component) {
    _inherits(MdiAccountNetwork, _React$Component);

    function MdiAccountNetwork() {
        _classCallCheck(this, MdiAccountNetwork);

        return _possibleConstructorReturn(this, (MdiAccountNetwork.__proto__ || Object.getPrototypeOf(MdiAccountNetwork)).apply(this, arguments));
    }

    _createClass(MdiAccountNetwork, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 13,16L 13,18L 14,18C 14.5523,18 15,18.4477 15,19L 22,19L 22,21L 15,21C 15,21.5523 14.5523,22 14,22L 10,22C 9.44772,22 9.00001,21.5523 9.00001,21L 2,21L 2,19L 9.00001,19C 9.00001,18.4477 9.44772,18 10,18L 11,18L 11,16L 5,16L 5,14.5C 5,12.567 8.13401,11 12,11C 15.866,11 19,12.567 19,14.5L 19,16L 13,16 Z M 12,2C 13.933,2 15.5,3.567 15.5,5.5C 15.5,7.433 13.933,9 12,9C 10.067,9 8.5,7.433 8.5,5.5C 8.5,3.567 10.067,2 12,2 Z ' })
                )
            );
        }
    }]);

    return MdiAccountNetwork;
}(React.Component);

exports.default = MdiAccountNetwork;
module.exports = exports['default'];