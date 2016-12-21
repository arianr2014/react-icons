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

var MdiShapePlus = function (_React$Component) {
    _inherits(MdiShapePlus, _React$Component);

    function MdiShapePlus() {
        _classCallCheck(this, MdiShapePlus);

        return _possibleConstructorReturn(this, (MdiShapePlus.__proto__ || Object.getPrototypeOf(MdiShapePlus)).apply(this, arguments));
    }

    _createClass(MdiShapePlus, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 2,1.99999L 11,1.99999L 11,11L 2,11L 2,1.99999 Z M 17.5,2.00001C 19.9853,2.00001 22,4.01473 22,6.50001C 22,8.98529 19.9853,11 17.5,11C 15.0147,11 13,8.98529 13,6.50001C 13,4.01473 15.0147,2.00001 17.5,2.00001 Z M 6.5,14L 11,22L 2,22L 6.5,14 Z M 19,17L 22,17L 22,19L 19,19L 19,22L 17,22L 17,19L 14,19L 14,17L 17,17L 17,14L 19,14L 19,17 Z ' })
                )
            );
        }
    }]);

    return MdiShapePlus;
}(React.Component);

exports.default = MdiShapePlus;
module.exports = exports['default'];