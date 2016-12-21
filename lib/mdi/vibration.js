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

var MdiVibration = function (_React$Component) {
    _inherits(MdiVibration, _React$Component);

    function MdiVibration() {
        _classCallCheck(this, MdiVibration);

        return _possibleConstructorReturn(this, (MdiVibration.__proto__ || Object.getPrototypeOf(MdiVibration)).apply(this, arguments));
    }

    _createClass(MdiVibration, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 16,19L 8,19L 8,5L 16,5M 16.5,3L 7.5,3C 6.67,3 6,3.67 6,4.5L 6,19.5C 6,20.33 6.67,21 7.5,21L 16.5,21C 17.33,21 18,20.33 18,19.5L 18,4.5C 18,3.67 17.33,3 16.5,3 Z M 19,17L 21,17L 21,7L 19,7M 22,9L 22,15L 24,15L 24,9M 3,17L 5,17L 5,7L 3,7M 0,15L 2,15L 2,9L 0,9L 0,15 Z ' })
                )
            );
        }
    }]);

    return MdiVibration;
}(React.Component);

exports.default = MdiVibration;
module.exports = exports['default'];