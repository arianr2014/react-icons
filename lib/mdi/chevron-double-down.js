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

var MdiChevronDoubleDown = function (_React$Component) {
    _inherits(MdiChevronDoubleDown, _React$Component);

    function MdiChevronDoubleDown() {
        _classCallCheck(this, MdiChevronDoubleDown);

        return _possibleConstructorReturn(this, (MdiChevronDoubleDown.__proto__ || Object.getPrototypeOf(MdiChevronDoubleDown)).apply(this, arguments));
    }

    _createClass(MdiChevronDoubleDown, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 16.586,5.586L 18,7.00001L 12,13L 6,7.00001L 7.41403,5.586L 12,10.172L 16.586,5.586 Z M 16.586,11.586L 18,13L 12,19L 6,13L 7.41402,11.586L 12,16.172L 16.586,11.586 Z ' })
                )
            );
        }
    }]);

    return MdiChevronDoubleDown;
}(React.Component);

exports.default = MdiChevronDoubleDown;
module.exports = exports['default'];