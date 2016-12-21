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

var MdiShapeRectanglePlus = function (_React$Component) {
    _inherits(MdiShapeRectanglePlus, _React$Component);

    function MdiShapeRectanglePlus() {
        _classCallCheck(this, MdiShapeRectanglePlus);

        return _possibleConstructorReturn(this, (MdiShapeRectanglePlus.__proto__ || Object.getPrototypeOf(MdiShapeRectanglePlus)).apply(this, arguments));
    }

    _createClass(MdiShapeRectanglePlus, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 19,6L 22,6L 22,8L 19,8L 19,11L 17,11L 17,8L 14,8L 14,6L 17,6L 17,3.00001L 19,3.00001L 19,6 Z M 17,17L 17,14L 19,14L 19,19L 3,19L 3,6.00001L 11,6.00001L 11,8L 5,8L 5,17L 17,17 Z ' })
                )
            );
        }
    }]);

    return MdiShapeRectanglePlus;
}(React.Component);

exports.default = MdiShapeRectanglePlus;
module.exports = exports['default'];