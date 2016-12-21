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

var MdiFormatHeader6 = function (_React$Component) {
    _inherits(MdiFormatHeader6, _React$Component);

    function MdiFormatHeader6() {
        _classCallCheck(this, MdiFormatHeader6);

        return _possibleConstructorReturn(this, (MdiFormatHeader6.__proto__ || Object.getPrototypeOf(MdiFormatHeader6)).apply(this, arguments));
    }

    _createClass(MdiFormatHeader6, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 3,4L 5,4L 5,10L 9,10L 9,4L 11,4L 11,18L 9,18L 9,12L 5,12L 5,18L 3,18L 3,4 Z M 15,4L 19,4C 20.1046,4 21,4.89543 21,6L 21,7L 19,7L 19,6L 15,6L 15,10L 19,10C 20.1046,10 21,10.8954 21,12L 21,16C 21,17.1046 20.1046,18 19,18L 15,18C 13.8954,18 13,17.1046 13,16L 13,6C 13,4.89543 13.8954,4 15,4 Z M 15,12L 15,16L 19,16L 19,12L 15,12 Z ' })
                )
            );
        }
    }]);

    return MdiFormatHeader6;
}(React.Component);

exports.default = MdiFormatHeader6;
module.exports = exports['default'];