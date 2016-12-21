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

var MdiHumanHandsup = function (_React$Component) {
    _inherits(MdiHumanHandsup, _React$Component);

    function MdiHumanHandsup() {
        _classCallCheck(this, MdiHumanHandsup);

        return _possibleConstructorReturn(this, (MdiHumanHandsup.__proto__ || Object.getPrototypeOf(MdiHumanHandsup)).apply(this, arguments));
    }

    _createClass(MdiHumanHandsup, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 5,1C 5.005,3.7 6.5575,6.16125 8.99875,7.31875L 8.99875,22.0025L 11.0013,22.0025L 11.0013,15L 12.9975,15L 12.9975,22.0025L 15,22.0025L 15,7.31375C 17.4413,6.15625 18.9937,3.7 18.9988,1L 17.0025,1C 17.0025,3.76375 14.7612,6 12.0025,6C 9.23875,6 7.0025,3.76375 7.0025,1M 12.0025,1C 10.8938,1 10,1.89375 10,3.0025C 10,4.105 10.8938,4.99875 12.0025,4.99875C 13.105,4.99875 13.9987,4.105 13.9987,3.0025C 13.9987,1.89375 13.105,1 12.0025,1 Z ' })
                )
            );
        }
    }]);

    return MdiHumanHandsup;
}(React.Component);

exports.default = MdiHumanHandsup;
module.exports = exports['default'];