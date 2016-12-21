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

var MdiAccountCheck = function (_React$Component) {
    _inherits(MdiAccountCheck, _React$Component);

    function MdiAccountCheck() {
        _classCallCheck(this, MdiAccountCheck);

        return _possibleConstructorReturn(this, (MdiAccountCheck.__proto__ || Object.getPrototypeOf(MdiAccountCheck)).apply(this, arguments));
    }

    _createClass(MdiAccountCheck, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 9,5C 10.933,5 12.5,6.567 12.5,8.5C 12.5,10.433 10.933,12 9,12C 7.06701,12 5.5,10.433 5.5,8.5C 5.5,6.567 7.06701,5 9,5 Z M 9,13.75C 12.866,13.75 16,15.317 16,17.25L 16,19L 2,19L 2,17.25C 2,15.317 5.13401,13.75 9,13.75 Z M 17,12.6642L 14.25,9.66421L 15.4142,8.5L 17,10.0858L 20.5858,6.5L 21.75,7.91421L 17,12.6642 Z ' })
                )
            );
        }
    }]);

    return MdiAccountCheck;
}(React.Component);

exports.default = MdiAccountCheck;
module.exports = exports['default'];