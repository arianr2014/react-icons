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

var MdiArrowExpand = function (_React$Component) {
    _inherits(MdiArrowExpand, _React$Component);

    function MdiArrowExpand() {
        _classCallCheck(this, MdiArrowExpand);

        return _possibleConstructorReturn(this, (MdiArrowExpand.__proto__ || Object.getPrototypeOf(MdiArrowExpand)).apply(this, arguments));
    }

    _createClass(MdiArrowExpand, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'miter', d: 'M 10.0002,20.9998L 10.0002,18.9998L 6.4102,18.9998L 10.9102,14.4998L 9.5,13.0898L 5,17.5898L 5,14L 3,14L 3,21L 10.0002,20.9998 Z M 14.5,10.9104L 19,6.4104L 19,10.0002L 21,10.0002L 21,3L 14,3L 14,5L 17.59,5L 13.09,9.5L 14.5,10.9104 Z ' })
                )
            );
        }
    }]);

    return MdiArrowExpand;
}(React.Component);

exports.default = MdiArrowExpand;
module.exports = exports['default'];