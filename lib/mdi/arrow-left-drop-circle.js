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

var MdiArrowLeftDropCircle = function (_React$Component) {
    _inherits(MdiArrowLeftDropCircle, _React$Component);

    function MdiArrowLeftDropCircle() {
        _classCallCheck(this, MdiArrowLeftDropCircle);

        return _possibleConstructorReturn(this, (MdiArrowLeftDropCircle.__proto__ || Object.getPrototypeOf(MdiArrowLeftDropCircle)).apply(this, arguments));
    }

    _createClass(MdiArrowLeftDropCircle, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'miter', d: 'M 22,12C 22,17.5228 17.5228,22 12,22C 6.47715,22 2,17.5228 2,12C 2,6.47715 6.47715,2 12,2C 17.5228,2 22,6.47715 22,12 Z M 14,7L 8.99999,12L 14,17L 14,7 Z ' })
                )
            );
        }
    }]);

    return MdiArrowLeftDropCircle;
}(React.Component);

exports.default = MdiArrowLeftDropCircle;
module.exports = exports['default'];