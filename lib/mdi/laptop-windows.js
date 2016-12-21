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

var MdiLaptopWindows = function (_React$Component) {
    _inherits(MdiLaptopWindows, _React$Component);

    function MdiLaptopWindows() {
        _classCallCheck(this, MdiLaptopWindows);

        return _possibleConstructorReturn(this, (MdiLaptopWindows.__proto__ || Object.getPrototypeOf(MdiLaptopWindows)).apply(this, arguments));
    }

    _createClass(MdiLaptopWindows, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 3,4L 21,4C 21.5523,4 22,4.44772 22,5L 22,16C 22,16.5523 21.5523,17 21,17L 22,17L 24,20L 24,21L 0,21L 0,20L 2,17L 3,17C 2.44772,17 2,16.5523 2,16L 2,5C 2,4.44772 2.44772,4 3,4 Z M 4,6L 4,15L 20,15L 20,6L 4,6 Z ' })
                )
            );
        }
    }]);

    return MdiLaptopWindows;
}(React.Component);

exports.default = MdiLaptopWindows;
module.exports = exports['default'];