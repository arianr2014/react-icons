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

var MdiDebugStepOver = function (_React$Component) {
    _inherits(MdiDebugStepOver, _React$Component);

    function MdiDebugStepOver() {
        _classCallCheck(this, MdiDebugStepOver);

        return _possibleConstructorReturn(this, (MdiDebugStepOver.__proto__ || Object.getPrototypeOf(MdiDebugStepOver)).apply(this, arguments));
    }

    _createClass(MdiDebugStepOver, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 12,14C 13.1046,14 14,14.8954 14,16C 14,17.1046 13.1046,18 12,18C 10.8954,18 10,17.1046 10,16C 10,14.8954 10.8954,14 12,14 Z M 23.4613,8.86483L 21.8706,15.7547L 14.9808,14.164L 18.7972,11.7792C 17.3853,9.5103 14.869,8 12,8C 8.05024,8 4.76903,10.8624 4.11755,14.6259L 2.14761,14.2786C 2.96352,9.57603 7.06414,6 12,6C 15.5843,6 18.7281,7.88575 20.4936,10.7192L 23.4613,8.86483 Z ' })
                )
            );
        }
    }]);

    return MdiDebugStepOver;
}(React.Component);

exports.default = MdiDebugStepOver;
module.exports = exports['default'];