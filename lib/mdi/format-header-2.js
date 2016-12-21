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

var MdiFormatHeader2 = function (_React$Component) {
    _inherits(MdiFormatHeader2, _React$Component);

    function MdiFormatHeader2() {
        _classCallCheck(this, MdiFormatHeader2);

        return _possibleConstructorReturn(this, (MdiFormatHeader2.__proto__ || Object.getPrototypeOf(MdiFormatHeader2)).apply(this, arguments));
    }

    _createClass(MdiFormatHeader2, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 3,4L 5,4L 5,10L 9,10L 9,4L 11,4L 11,18L 9,18L 9,12L 5,12L 5,18L 3,18L 3,4 Z M 21,18L 15,18C 13.8954,18 13,17.1046 13,16C 13,15.4728 13.204,14.9933 13.5373,14.636L 18.4142,9.41422C 18.7761,9.05229 19,8.55229 19,8C 19,6.89544 18.1046,6.00001 17,6.00001C 15.8954,6.00001 15,6.89544 15,8L 13,8C 13,5.79086 14.7909,4 17,4C 19.2091,4 21,5.79086 21,8C 21,9.10457 20.5523,10.1046 19.8284,10.8284L 15,16L 21,16L 21,18 Z ' })
                )
            );
        }
    }]);

    return MdiFormatHeader2;
}(React.Component);

exports.default = MdiFormatHeader2;
module.exports = exports['default'];