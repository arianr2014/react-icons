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

var MdiStopCircleOutline = function (_React$Component) {
    _inherits(MdiStopCircleOutline, _React$Component);

    function MdiStopCircleOutline() {
        _classCallCheck(this, MdiStopCircleOutline);

        return _possibleConstructorReturn(this, (MdiStopCircleOutline.__proto__ || Object.getPrototypeOf(MdiStopCircleOutline)).apply(this, arguments));
    }

    _createClass(MdiStopCircleOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 12.0025,2.0025C 6.475,2.0025 2.0025,6.475 2.0025,12.0025C 2.0025,17.525 6.475,22.0025 12.0025,22.0025C 17.525,22.0025 22.0025,17.525 22.0025,12.0025C 22.0025,6.475 17.525,2.0025 12.0025,2.0025 Z M 12.0025,3.99875C 16.4112,3.99875 20,7.5875 20,12.0025C 20,16.4113 16.4112,20 12.0025,20C 7.5875,20 3.99875,16.4113 3.99875,12.0025C 3.99875,7.5875 7.5875,3.99875 12.0025,3.99875 Z M 8.99875,8.99875L 8.99875,15L 15,15L 15,8.99875' })
                )
            );
        }
    }]);

    return MdiStopCircleOutline;
}(React.Component);

exports.default = MdiStopCircleOutline;
module.exports = exports['default'];