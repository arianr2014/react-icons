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

var MdiTooltipOutline = function (_React$Component) {
    _inherits(MdiTooltipOutline, _React$Component);

    function MdiTooltipOutline() {
        _classCallCheck(this, MdiTooltipOutline);

        return _possibleConstructorReturn(this, (MdiTooltipOutline.__proto__ || Object.getPrototypeOf(MdiTooltipOutline)).apply(this, arguments));
    }

    _createClass(MdiTooltipOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 4,2L 20,2C 21.1046,2 22,2.89543 22,4L 22,16C 22,17.1046 21.1046,18 20,18L 16,18L 12,22L 8,18L 4,18C 2.89543,18 2,17.1046 2,16L 2,4C 2,2.89543 2.89543,2 4,2 Z M 4,4.00001L 4,16L 8.82843,16L 12,19.1716L 15.1716,16L 20,16L 20,4.00001L 4,4.00001 Z ' })
                )
            );
        }
    }]);

    return MdiTooltipOutline;
}(React.Component);

exports.default = MdiTooltipOutline;
module.exports = exports['default'];