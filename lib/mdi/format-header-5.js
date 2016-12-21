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

var MdiFormatHeader5 = function (_React$Component) {
    _inherits(MdiFormatHeader5, _React$Component);

    function MdiFormatHeader5() {
        _classCallCheck(this, MdiFormatHeader5);

        return _possibleConstructorReturn(this, (MdiFormatHeader5.__proto__ || Object.getPrototypeOf(MdiFormatHeader5)).apply(this, arguments));
    }

    _createClass(MdiFormatHeader5, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 3,4L 5,4L 5,10L 9,10L 9,4L 11,4L 11,18L 9,18L 9,12L 5,12L 5,18L 3,18L 3,4 Z M 15,4L 20,4.00001L 20,6.00001L 15,6L 15,10L 17,10C 19.2091,10 21,11.7909 21,14C 21,16.2091 19.2091,18 17,18L 15,18C 13.8954,18 13,17.1046 13,16L 13,15L 15,15L 15,16L 17,16C 18.1046,16 19,15.1046 19,14C 19,12.8954 18.1046,12 17,12L 15,12C 13.8954,12 13,11.1046 13,10L 13,6C 13,4.89543 13.8954,4 15,4 Z ' })
                )
            );
        }
    }]);

    return MdiFormatHeader5;
}(React.Component);

exports.default = MdiFormatHeader5;
module.exports = exports['default'];