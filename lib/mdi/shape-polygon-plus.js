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

var MdiShapePolygonPlus = function (_React$Component) {
    _inherits(MdiShapePolygonPlus, _React$Component);

    function MdiShapePolygonPlus() {
        _classCallCheck(this, MdiShapePolygonPlus);

        return _possibleConstructorReturn(this, (MdiShapePolygonPlus.__proto__ || Object.getPrototypeOf(MdiShapePolygonPlus)).apply(this, arguments));
    }

    _createClass(MdiShapePolygonPlus, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 17,15.7L 17,13L 19,13L 19,17L 10,21L 3,14L 7,5L 11,5L 11,7L 8.3,7L 5.4,13.6L 10.4,18.6L 17,15.7 Z M 22,5L 22,7L 19,7L 19,10L 17,10L 17,7L 14,7L 14,5L 17,5L 17,2L 19,2L 19,5L 22,5 Z ' })
                )
            );
        }
    }]);

    return MdiShapePolygonPlus;
}(React.Component);

exports.default = MdiShapePolygonPlus;
module.exports = exports['default'];