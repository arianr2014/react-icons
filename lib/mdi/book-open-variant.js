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

var MdiBookOpenVariant = function (_React$Component) {
    _inherits(MdiBookOpenVariant, _React$Component);

    function MdiBookOpenVariant() {
        _classCallCheck(this, MdiBookOpenVariant);

        return _possibleConstructorReturn(this, (MdiBookOpenVariant.__proto__ || Object.getPrototypeOf(MdiBookOpenVariant)).apply(this, arguments));
    }

    _createClass(MdiBookOpenVariant, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 21,5C 19.89,4.65 18.67,4.5 17.5,4.5C 15.55,4.5 13.45,4.9 12,6C 10.55,4.9 8.45,4.5 6.5,4.5C 4.55,4.5 2.45,4.9 1,6L 1,20.65C 1,20.9 1.25,21.15 1.5,21.15C 1.6,21.15 1.65,21.1 1.75,21.1C 3.1,20.45 5.05,20 6.5,20C 8.45,20 10.55,20.4 12,21.5C 13.35,20.65 15.8,20 17.5,20C 19.15,20 20.85,20.3 22.25,21.05C 22.35,21.1 22.4,21.1 22.5,21.1C 22.75,21.1 23,20.85 23,20.6L 23,6C 22.4,5.55 21.75,5.25 21,5 Z M 21,18.5C 19.9,18.15 18.7,18 17.5,18C 15.8,18 13.35,18.65 12,19.5L 12,8C 13.35,7.15 15.8,6.5 17.5,6.5C 18.7,6.5 19.9,6.65 21,7L 21,18.5 Z ' })
                )
            );
        }
    }]);

    return MdiBookOpenVariant;
}(React.Component);

exports.default = MdiBookOpenVariant;
module.exports = exports['default'];