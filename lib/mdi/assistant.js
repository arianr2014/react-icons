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

var MdiAssistant = function (_React$Component) {
    _inherits(MdiAssistant, _React$Component);

    function MdiAssistant() {
        _classCallCheck(this, MdiAssistant);

        return _possibleConstructorReturn(this, (MdiAssistant.__proto__ || Object.getPrototypeOf(MdiAssistant)).apply(this, arguments));
    }

    _createClass(MdiAssistant, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 18.9988,2.0025L 5,2.0025C 3.90125,2.0025 2.9975,2.9 2.9975,3.99875L 2.9975,17.9975C 2.9975,19.1013 3.90125,20 5,20L 8.99875,20L 12.0025,22.9975L 15,20L 18.9988,20C 20.0975,20 21.0013,19.1013 21.0013,17.9975L 21.0013,3.99875C 21.0013,2.9 20.0975,2.0025 18.9988,2.0025 Z M 13.8812,12.8812L 12.0025,17.0025L 10.1225,12.8812L 6.00125,11.0012L 10.1225,9.12125L 12.0025,5L 13.8812,9.12125L 17.9975,11.0012' })
                )
            );
        }
    }]);

    return MdiAssistant;
}(React.Component);

exports.default = MdiAssistant;
module.exports = exports['default'];