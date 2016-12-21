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

var MdiSword = function (_React$Component) {
    _inherits(MdiSword, _React$Component);

    function MdiSword() {
        _classCallCheck(this, MdiSword);

        return _possibleConstructorReturn(this, (MdiSword.__proto__ || Object.getPrototypeOf(MdiSword)).apply(this, arguments));
    }

    _createClass(MdiSword, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 6.92,5L 5,5L 14,14L 14.98,13.06M 19.96,19.12L 19.12,19.96C 18.73,20.35 18.1,20.35 17.71,19.96L 14.59,16.84L 11.91,19.5L 10.5,18.09L 11.92,16.67L 3,7.75L 3,3L 7.75,3L 16.67,11.92L 18.09,10.5L 19.5,11.91L 16.83,14.58L 19.95,17.7C 20.35,18.1 20.35,18.73 19.96,19.12 Z ' })
                )
            );
        }
    }]);

    return MdiSword;
}(React.Component);

exports.default = MdiSword;
module.exports = exports['default'];