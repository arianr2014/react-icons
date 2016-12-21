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

var MdiRayEndArrow = function (_React$Component) {
    _inherits(MdiRayEndArrow, _React$Component);

    function MdiRayEndArrow() {
        _classCallCheck(this, MdiRayEndArrow);

        return _possibleConstructorReturn(this, (MdiRayEndArrow.__proto__ || Object.getPrototypeOf(MdiRayEndArrow)).apply(this, arguments));
    }

    _createClass(MdiRayEndArrow, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 1,12L 5,16L 5,13L 17.1707,13C 17.5825,14.1652 18.6938,15 20,15C 21.6568,15 23,13.6568 23,12C 23,10.3431 21.6568,9 20,9C 18.6938,9 17.5825,9.8348 17.1707,11L 5,11L 5,8L 1,12 Z ' })
                )
            );
        }
    }]);

    return MdiRayEndArrow;
}(React.Component);

exports.default = MdiRayEndArrow;
module.exports = exports['default'];