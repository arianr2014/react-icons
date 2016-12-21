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

var MdiVoice = function (_React$Component) {
    _inherits(MdiVoice, _React$Component);

    function MdiVoice() {
        _classCallCheck(this, MdiVoice);

        return _possibleConstructorReturn(this, (MdiVoice.__proto__ || Object.getPrototypeOf(MdiVoice)).apply(this, arguments));
    }

    _createClass(MdiVoice, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 9,5C 11.2091,5 13,6.7909 13,9C 13,11.2091 11.2091,13 9,13C 6.79086,13 5,11.2091 5,9C 5,6.7909 6.79086,5 9,5 Z M 9,15C 11.67,15 17,16.34 17,19L 17,21L 1,21L 1,19C 1,16.34 6.33,15 9,15 Z M 16.76,5.36C 18.78,7.56 18.78,10.61 16.76,12.63L 15.08,10.94C 15.92,9.76 15.92,8.23 15.08,7.05L 16.76,5.36 Z M 20.07,2C 23.98,6.05 23.97,12.11 20.07,16L 18.44,14.37C 21.21,11.19 21.21,6.65 18.44,3.63L 20.07,2 Z ' })
                )
            );
        }
    }]);

    return MdiVoice;
}(React.Component);

exports.default = MdiVoice;
module.exports = exports['default'];