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

var MdiVisualstudio = function (_React$Component) {
    _inherits(MdiVisualstudio, _React$Component);

    function MdiVisualstudio() {
        _classCallCheck(this, MdiVisualstudio);

        return _possibleConstructorReturn(this, (MdiVisualstudio.__proto__ || Object.getPrototypeOf(MdiVisualstudio)).apply(this, arguments));
    }

    _createClass(MdiVisualstudio, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 17,8.5L 12.2528,12.3209L 17,16L 17,8.5 Z M 4.7,18.4L 2,16.7L 2,7.7L 5,6.7L 9.29898,10.0317L 18,2L 22,4.5L 22,20L 17,22L 9.34352,14.6625L 4.7,18.4 Z M 5,14L 6.86031,12.2828L 5,10.5L 5,14 Z ' })
                )
            );
        }
    }]);

    return MdiVisualstudio;
}(React.Component);

exports.default = MdiVisualstudio;
module.exports = exports['default'];