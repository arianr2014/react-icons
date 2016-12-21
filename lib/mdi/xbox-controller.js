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

var MdiXboxController = function (_React$Component) {
    _inherits(MdiXboxController, _React$Component);

    function MdiXboxController() {
        _classCallCheck(this, MdiXboxController);

        return _possibleConstructorReturn(this, (MdiXboxController.__proto__ || Object.getPrototypeOf(MdiXboxController)).apply(this, arguments));
    }

    _createClass(MdiXboxController, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 8.75,15.75C 6.75,15.75 6,18 4,19C 2,19 0.5,16 4.50673,7.50001L 4.75,7.50001L 5.18517,6.66675C 5.18517,6.66675 8,5 9.3259,6.22772L 14.6741,6.22772C 16,5 18.8148,6.66676 18.8148,6.66676L 19.25,7.50001L 19.4933,7.50001C 23.5,16 22,19 20,19C 18,18 17.25,15.75 15.25,15.75L 8.75,15.75 Z M 12,7.00001C 11.4477,7.00001 11,7.44772 11,8C 11,8.55229 11.4477,9 12,9C 12.5523,9 13,8.55229 13,8C 13,7.44772 12.5523,7.00001 12,7.00001 Z ' })
                )
            );
        }
    }]);

    return MdiXboxController;
}(React.Component);

exports.default = MdiXboxController;
module.exports = exports['default'];