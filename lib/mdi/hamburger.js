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

var MdiHamburger = function (_React$Component) {
    _inherits(MdiHamburger, _React$Component);

    function MdiHamburger() {
        _classCallCheck(this, MdiHamburger);

        return _possibleConstructorReturn(this, (MdiHamburger.__proto__ || Object.getPrototypeOf(MdiHamburger)).apply(this, arguments));
    }

    _createClass(MdiHamburger, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 2,16L 22,16L 22,18C 22,19.108 21.108,20 20,20L 4,20C 2.89199,20 2,19.108 2,18L 2,16 Z M 6,4L 18,4C 20.216,4 22,5.784 22,8L 22,10L 2,10L 2,8C 2,5.784 3.784,4 6,4 Z M 4,11L 15,11L 17,13L 19,11L 20,11C 21.108,11 22,11.892 22,13C 22,14.108 21.108,15 20,15L 4,15C 2.892,15 2,14.108 2,13C 2,11.892 2.892,11 4,11 Z ' })
                )
            );
        }
    }]);

    return MdiHamburger;
}(React.Component);

exports.default = MdiHamburger;
module.exports = exports['default'];