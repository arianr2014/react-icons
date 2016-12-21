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

var MdiAccountSettings = function (_React$Component) {
    _inherits(MdiAccountSettings, _React$Component);

    function MdiAccountSettings() {
        _classCallCheck(this, MdiAccountSettings);

        return _possibleConstructorReturn(this, (MdiAccountSettings.__proto__ || Object.getPrototypeOf(MdiAccountSettings)).apply(this, arguments));
    }

    _createClass(MdiAccountSettings, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 12,4C 14.2091,4 16,5.79086 16,8C 16,10.2091 14.2091,12 12,12C 9.79086,12 8,10.2091 8,8C 8,5.79086 9.79086,4 12,4 Z M 12,14C 16.4183,14 20,15.7909 20,18L 20,20L 4,20L 4,18C 4,15.7909 7.58172,14 12,14 Z M 7,22L 9,22L 9,24L 7,24L 7,22 Z M 11,22L 13,22L 13,24L 11,24L 11,22 Z M 15,22L 17,22L 17,24L 15,24L 15,22 Z ' })
                )
            );
        }
    }]);

    return MdiAccountSettings;
}(React.Component);

exports.default = MdiAccountSettings;
module.exports = exports['default'];