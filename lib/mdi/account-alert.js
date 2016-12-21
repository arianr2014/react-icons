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

var MdiAccountAlert = function (_React$Component) {
    _inherits(MdiAccountAlert, _React$Component);

    function MdiAccountAlert() {
        _classCallCheck(this, MdiAccountAlert);

        return _possibleConstructorReturn(this, (MdiAccountAlert.__proto__ || Object.getPrototypeOf(MdiAccountAlert)).apply(this, arguments));
    }

    _createClass(MdiAccountAlert, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 10,4C 12.2091,4 14,5.79086 14,8C 14,10.2091 12.2091,12 10,12C 7.79086,12 6,10.2091 6,8C 6,5.79086 7.79086,4 10,4 Z M 10,14C 14.4183,14 18,15.7909 18,18L 18,20L 2,20L 2,18C 2,15.7909 5.58172,14 10,14 Z M 20,12L 20,7L 22,7L 22,12L 20,12 Z M 20,16L 20,14L 22,14L 22,16L 20,16 Z ' })
                )
            );
        }
    }]);

    return MdiAccountAlert;
}(React.Component);

exports.default = MdiAccountAlert;
module.exports = exports['default'];