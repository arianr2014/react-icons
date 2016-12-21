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

var MdiSwapVertical = function (_React$Component) {
    _inherits(MdiSwapVertical, _React$Component);

    function MdiSwapVertical() {
        _classCallCheck(this, MdiSwapVertical);

        return _possibleConstructorReturn(this, (MdiSwapVertical.__proto__ || Object.getPrototypeOf(MdiSwapVertical)).apply(this, arguments));
    }

    _createClass(MdiSwapVertical, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 8.99939,2.99805L 4.99939,6.98804L 7.99939,6.98804L 7.99939,13.998L 9.99939,13.998L 9.99939,6.98804L 12.9994,6.98804M 15.9994,17.0081L 15.9994,9.99805L 13.9994,9.99805L 13.9994,17.0081L 10.9994,17.0081L 14.9994,20.998L 18.9994,17.0081L 15.9994,17.0081 Z ' })
                )
            );
        }
    }]);

    return MdiSwapVertical;
}(React.Component);

exports.default = MdiSwapVertical;
module.exports = exports['default'];