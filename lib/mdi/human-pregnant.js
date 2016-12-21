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

var MdiHumanPregnant = function (_React$Component) {
    _inherits(MdiHumanPregnant, _React$Component);

    function MdiHumanPregnant() {
        _classCallCheck(this, MdiHumanPregnant);

        return _possibleConstructorReturn(this, (MdiHumanPregnant.__proto__ || Object.getPrototypeOf(MdiHumanPregnant)).apply(this, arguments));
    }

    _createClass(MdiHumanPregnant, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 9,4C 9,2.89 9.89,2 11,2C 12.11,2 13,2.89 13,4C 13,5.11 12.11,6 11,6C 9.89,6 9,5.11 9,4 Z M 16,13C 15.99,11.66 15.17,10.49 14,10C 14,8.34 12.66,7 11,7C 9.34,7 8,8.34 8,10L 8,17L 10,17L 10,22L 13,22L 13,17L 16,17L 16,13 Z ' })
                )
            );
        }
    }]);

    return MdiHumanPregnant;
}(React.Component);

exports.default = MdiHumanPregnant;
module.exports = exports['default'];