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

var MdiHighway = function (_React$Component) {
    _inherits(MdiHighway, _React$Component);

    function MdiHighway() {
        _classCallCheck(this, MdiHighway);

        return _possibleConstructorReturn(this, (MdiHighway.__proto__ || Object.getPrototypeOf(MdiHighway)).apply(this, arguments));
    }

    _createClass(MdiHighway, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 10,2L 8,8L 11,8L 11,2L 10,2 Z M 13,2L 13,8L 16,8L 14,2L 13,2 Z M 2,9L 2,10L 4,10L 4,11L 6,11L 6,10L 18,10L 18.0625,11L 20,11L 20,10L 22,10L 22,9L 2,9 Z M 7,11L 3.34375,22L 11,22L 11,11L 7,11 Z M 13,11L 13,22L 20.6563,22L 17,11L 13,11 Z ' })
                )
            );
        }
    }]);

    return MdiHighway;
}(React.Component);

exports.default = MdiHighway;
module.exports = exports['default'];