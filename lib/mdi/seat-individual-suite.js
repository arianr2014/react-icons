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

var MdiSeatIndividualSuite = function (_React$Component) {
    _inherits(MdiSeatIndividualSuite, _React$Component);

    function MdiSeatIndividualSuite() {
        _classCallCheck(this, MdiSeatIndividualSuite);

        return _possibleConstructorReturn(this, (MdiSeatIndividualSuite.__proto__ || Object.getPrototypeOf(MdiSeatIndividualSuite)).apply(this, arguments));
    }

    _createClass(MdiSeatIndividualSuite, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 7.0025,12.9975C 8.6525,12.9975 10,11.65 10,10C 10,8.35 8.6525,7.0025 7.0025,7.0025C 5.35125,7.0025 3.99875,8.35 3.99875,10C 3.99875,11.65 5.35125,12.9975 7.0025,12.9975 Z M 18.9988,7.0025L 11.0013,7.0025L 11.0013,13.9987L 2.9975,13.9987L 2.9975,7.0025L 1.00125,7.0025L 1.00125,17.0025L 22.9975,17.0025L 22.9975,11.0012C 22.9975,8.78875 21.2109,7.0025 18.9988,7.0025 Z ' })
                )
            );
        }
    }]);

    return MdiSeatIndividualSuite;
}(React.Component);

exports.default = MdiSeatIndividualSuite;
module.exports = exports['default'];