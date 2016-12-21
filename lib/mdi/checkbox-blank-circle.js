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

var MdiCheckboxBlankCircle = function (_React$Component) {
    _inherits(MdiCheckboxBlankCircle, _React$Component);

    function MdiCheckboxBlankCircle() {
        _classCallCheck(this, MdiCheckboxBlankCircle);

        return _possibleConstructorReturn(this, (MdiCheckboxBlankCircle.__proto__ || Object.getPrototypeOf(MdiCheckboxBlankCircle)).apply(this, arguments));
    }

    _createClass(MdiCheckboxBlankCircle, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 11.9994,1.99807C 6.47639,1.99807 1.99939,6.47507 1.99939,11.9981C 1.99939,17.5211 6.47639,21.9981 11.9994,21.9981C 17.5214,21.9981 21.9994,17.5211 21.9994,11.9981C 21.9994,6.47507 17.5214,1.99807 11.9994,1.99807 Z ' })
                )
            );
        }
    }]);

    return MdiCheckboxBlankCircle;
}(React.Component);

exports.default = MdiCheckboxBlankCircle;
module.exports = exports['default'];