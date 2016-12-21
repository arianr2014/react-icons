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

var MdiShredder = function (_React$Component) {
    _inherits(MdiShredder, _React$Component);

    function MdiShredder() {
        _classCallCheck(this, MdiShredder);

        return _possibleConstructorReturn(this, (MdiShredder.__proto__ || Object.getPrototypeOf(MdiShredder)).apply(this, arguments));
    }

    _createClass(MdiShredder, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 6,3L 6,7L 8,7L 8,5L 16,5L 16,7L 18,7L 18,3L 6,3 Z M 5,8C 3.34,8 2,9.34 2,11L 2,17L 5,17L 5,14L 19,14L 19,17L 22,17L 22,11C 22,9.34 20.66,8 19,8L 5,8 Z M 18,10C 18.55,10 19,10.45 19,11C 19,11.55 18.55,12 18,12C 17.45,12 17,11.55 17,11C 17,10.45 17.45,10 18,10 Z M 7,16L 7,21L 9,21L 9,16L 7,16 Z M 11,16L 11,20L 13,20L 13,16L 11,16 Z M 15,16L 15,21L 17,21L 17,16L 15,16 Z ' })
                )
            );
        }
    }]);

    return MdiShredder;
}(React.Component);

exports.default = MdiShredder;
module.exports = exports['default'];