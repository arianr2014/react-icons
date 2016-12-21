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

var MdiAccountMinus = function (_React$Component) {
    _inherits(MdiAccountMinus, _React$Component);

    function MdiAccountMinus() {
        _classCallCheck(this, MdiAccountMinus);

        return _possibleConstructorReturn(this, (MdiAccountMinus.__proto__ || Object.getPrototypeOf(MdiAccountMinus)).apply(this, arguments));
    }

    _createClass(MdiAccountMinus, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 14.9994,13.998C 12.3324,13.998 6.99939,15.333 6.99939,17.998L 6.99939,19.998L 22.9994,19.998L 22.9994,17.998C 22.9994,15.333 17.6664,13.998 14.9994,13.998 Z M 0.99939,9.99797L 0.99939,11.998L 8.99939,11.998L 8.99939,9.99797M 14.9994,11.998C 17.2074,11.998 18.9994,10.205 18.9994,7.99797C 18.9994,5.78997 17.2074,3.99797 14.9994,3.99797C 12.7914,3.99797 10.9994,5.78997 10.9994,7.99797C 10.9994,10.205 12.7914,11.998 14.9994,11.998 Z ' })
                )
            );
        }
    }]);

    return MdiAccountMinus;
}(React.Component);

exports.default = MdiAccountMinus;
module.exports = exports['default'];