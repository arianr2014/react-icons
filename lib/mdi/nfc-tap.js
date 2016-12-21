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

var MdiNfcTap = function (_React$Component) {
    _inherits(MdiNfcTap, _React$Component);

    function MdiNfcTap() {
        _classCallCheck(this, MdiNfcTap);

        return _possibleConstructorReturn(this, (MdiNfcTap.__proto__ || Object.getPrototypeOf(MdiNfcTap)).apply(this, arguments));
    }

    _createClass(MdiNfcTap, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 12,10C 13.1046,10 14,10.8954 14,12C 14,13.1046 13.1046,14 12,14C 10.8954,14 10,13.1046 10,12C 10,10.8954 10.8954,10 12,10 Z M 4,4.00001L 11,4.00001C 12.1046,4.00001 13,4.89544 13,6.00001L 13,9.00001L 11,9.00001L 11,6.00001L 4,6.00001L 4,11L 6,11L 6,9L 9,12L 6,15L 6,13L 4,13C 2.89543,13 2,12.1046 2,11L 2,6.00001C 2,4.89544 2.89543,4.00001 4,4.00001 Z M 20,20L 13,20C 11.8954,20 11,19.1046 11,18L 11,15L 13,15L 13,18L 20,18L 20,13L 18,13L 18,15L 15,12L 18,9L 18,11L 20,11C 21.1046,11 22,11.8954 22,13L 22,18C 22,19.1046 21.1046,20 20,20 Z ' })
                )
            );
        }
    }]);

    return MdiNfcTap;
}(React.Component);

exports.default = MdiNfcTap;
module.exports = exports['default'];