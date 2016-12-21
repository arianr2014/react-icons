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

var MdiAltimeter = function (_React$Component) {
    _inherits(MdiAltimeter, _React$Component);

    function MdiAltimeter() {
        _classCallCheck(this, MdiAltimeter);

        return _possibleConstructorReturn(this, (MdiAltimeter.__proto__ || Object.getPrototypeOf(MdiAltimeter)).apply(this, arguments));
    }

    _createClass(MdiAltimeter, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 7,3L 7,5L 17,5L 17,3L 7,3 Z M 9,7L 9,9L 15,9L 15,7L 9,7 Z M 1.99805,7.9648L 1.99805,16.0352L 6.0332,12L 1.99805,7.9648 Z M 22.0332,7.9648L 17.998,12L 22.0332,16.0352L 22.0332,7.9648 Z M 7,11L 7,13L 17,13L 17,11L 7,11 Z M 9,15L 9,17L 15,17L 15,15L 9,15 Z M 7,19L 7,21L 17,21L 17,19L 7,19 Z ' })
                )
            );
        }
    }]);

    return MdiAltimeter;
}(React.Component);

exports.default = MdiAltimeter;
module.exports = exports['default'];