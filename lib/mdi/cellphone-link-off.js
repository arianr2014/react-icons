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

var MdiCellphoneLinkOff = function (_React$Component) {
    _inherits(MdiCellphoneLinkOff, _React$Component);

    function MdiCellphoneLinkOff() {
        _classCallCheck(this, MdiCellphoneLinkOff);

        return _possibleConstructorReturn(this, (MdiCellphoneLinkOff.__proto__ || Object.getPrototypeOf(MdiCellphoneLinkOff)).apply(this, arguments));
    }

    _createClass(MdiCellphoneLinkOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 23,8L 17,8C 16.45,8 16,8.45 16,9L 16,13.18L 18,15.18L 18,10L 22,10L 22,17L 19.82,17L 22.82,20L 23,20C 23.55,20 24,19.55 24,19L 24,9C 24,8.45 23.55,8 23,8 Z M 4,6.27L 14.73,17L 4,17L 4,6.27 Z M 1.92,1.65L 0.65,2.92L 2.47,4.74C 2.18,5.08 2,5.52 2,6L 2,17L 0,17L 0,20L 17.73,20L 20.08,22.35L 21.35,21.08L 3.89,3.62L 1.92,1.65 Z M 22,6L 22,4L 6.82,4L 8.82,6L 22,6 Z ' })
                )
            );
        }
    }]);

    return MdiCellphoneLinkOff;
}(React.Component);

exports.default = MdiCellphoneLinkOff;
module.exports = exports['default'];