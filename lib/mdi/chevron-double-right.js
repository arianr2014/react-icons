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

var MdiChevronDoubleRight = function (_React$Component) {
    _inherits(MdiChevronDoubleRight, _React$Component);

    function MdiChevronDoubleRight() {
        _classCallCheck(this, MdiChevronDoubleRight);

        return _possibleConstructorReturn(this, (MdiChevronDoubleRight.__proto__ || Object.getPrototypeOf(MdiChevronDoubleRight)).apply(this, arguments));
    }

    _createClass(MdiChevronDoubleRight, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 5.586,7.41398L 7,6L 13,12L 7,18L 5.586,16.586L 10.172,12L 5.586,7.41398 Z M 11.586,7.41399L 13,6.00001L 19,12L 13,18L 11.586,16.586L 16.172,12L 11.586,7.41399 Z ' })
                )
            );
        }
    }]);

    return MdiChevronDoubleRight;
}(React.Component);

exports.default = MdiChevronDoubleRight;
module.exports = exports['default'];