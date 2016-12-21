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

var MdiEyedropperVariant = function (_React$Component) {
    _inherits(MdiEyedropperVariant, _React$Component);

    function MdiEyedropperVariant() {
        _classCallCheck(this, MdiEyedropperVariant);

        return _possibleConstructorReturn(this, (MdiEyedropperVariant.__proto__ || Object.getPrototypeOf(MdiEyedropperVariant)).apply(this, arguments));
    }

    _createClass(MdiEyedropperVariant, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 6.92,19L 5,17.08L 13.06,9.02L 14.98,10.94M 20.71,5.63L 18.37,3.29C 17.98,2.9 17.35,2.9 16.96,3.29L 13.84,6.41L 11.91,4.5L 10.5,5.91L 11.92,7.33L 3,16.25L 3,21L 7.75,21L 16.67,12.08L 18.09,13.5L 19.5,12.09L 17.58,10.17L 20.7,7.05C 21.1,6.65 21.1,6.02 20.71,5.63 Z ' })
                )
            );
        }
    }]);

    return MdiEyedropperVariant;
}(React.Component);

exports.default = MdiEyedropperVariant;
module.exports = exports['default'];