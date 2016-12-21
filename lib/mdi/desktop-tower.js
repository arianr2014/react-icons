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

var MdiDesktopTower = function (_React$Component) {
    _inherits(MdiDesktopTower, _React$Component);

    function MdiDesktopTower() {
        _classCallCheck(this, MdiDesktopTower);

        return _possibleConstructorReturn(this, (MdiDesktopTower.__proto__ || Object.getPrototypeOf(MdiDesktopTower)).apply(this, arguments));
    }

    _createClass(MdiDesktopTower, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 8,2L 16,2C 17.1046,2 18,2.89543 18,4L 18,20C 18,21.1046 17.1046,22 16,22L 8,22C 6.89543,22 6,21.1046 6,20L 6,4C 6,2.89543 6.89543,2 8,2 Z M 8,4L 8,6L 16,6L 16,4L 8,4 Z M 16,8L 8,8L 8,10L 16,10L 16,8 Z M 16,18L 14,18L 14,20L 16,20L 16,18 Z ' })
                )
            );
        }
    }]);

    return MdiDesktopTower;
}(React.Component);

exports.default = MdiDesktopTower;
module.exports = exports['default'];