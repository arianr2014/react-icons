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

var MdiTarget = function (_React$Component) {
    _inherits(MdiTarget, _React$Component);

    function MdiTarget() {
        _classCallCheck(this, MdiTarget);

        return _possibleConstructorReturn(this, (MdiTarget.__proto__ || Object.getPrototypeOf(MdiTarget)).apply(this, arguments));
    }

    _createClass(MdiTarget, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 11.0013,2.0025L 11.0013,4.0725C 7.3825,4.53125 4.53125,7.3825 4.0725,11.0012L 2.0025,11.0012L 2.0025,12.9975L 4.0725,12.9975C 4.53125,16.6213 7.3825,19.4675 11.0013,19.9262L 11.0013,22.0025L 12.9975,22.0025L 12.9975,19.9313C 16.6212,19.4675 19.4675,16.6213 19.9263,12.9975L 22.0025,12.9975L 22.0025,11.0012L 19.9312,11.0012C 19.4675,7.3825 16.6212,4.53125 12.9975,4.0725L 12.9975,2.0025M 11.0013,6.08375L 11.0013,7.9975L 12.9975,7.9975L 12.9975,6.08875C 15.5175,6.51375 17.485,8.48625 17.915,11.0012L 16.0012,11.0012L 16.0012,12.9975L 17.91,12.9975C 17.485,15.5175 15.5125,17.485 12.9975,17.915L 12.9975,16.0012L 11.0013,16.0012L 11.0013,17.91C 8.48625,17.485 6.51375,15.5125 6.08375,12.9975L 7.9975,12.9975L 7.9975,11.0012L 6.08875,11.0012C 6.51375,8.48625 8.48625,6.51375 11.0013,6.08375 Z M 12.0025,11.0012C 11.445,11.0012 11.0013,11.445 11.0013,12.0025C 11.0013,12.5538 11.445,12.9975 12.0025,12.9975C 12.5537,12.9975 12.9975,12.5538 12.9975,12.0025C 12.9975,11.445 12.5537,11.0012 12.0025,11.0012 Z ' })
                )
            );
        }
    }]);

    return MdiTarget;
}(React.Component);

exports.default = MdiTarget;
module.exports = exports['default'];