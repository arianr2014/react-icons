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

var MdiCommentCheckOutline = function (_React$Component) {
    _inherits(MdiCommentCheckOutline, _React$Component);

    function MdiCommentCheckOutline() {
        _classCallCheck(this, MdiCommentCheckOutline);

        return _possibleConstructorReturn(this, (MdiCommentCheckOutline.__proto__ || Object.getPrototypeOf(MdiCommentCheckOutline)).apply(this, arguments));
    }

    _createClass(MdiCommentCheckOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 9,22C 8.44772,22 8,21.5523 8,21L 7.99999,18L 4,18C 2.89543,18 2,17.1046 2,16L 2.0094,3.99808C 2.0094,2.89308 2.89538,1.99809 3.99939,1.99809L 19.9994,1.99809C 21.1034,1.99809 21.9994,2.89308 21.9994,3.99808L 21.9994,15.9981C 21.9994,17.1021 21.1034,17.9981 19.9994,17.9981L 13.904,17.9997L 10.1979,21.7058C 10.0053,21.8984 9.75368,21.996 9.50124,21.9986L 9.5,22L 9,22 Z M 9.99999,16L 9.99999,19.0753L 13.0753,16L 20,16L 20,4.00003L 3.99999,4.00003L 3.99999,16L 9.99999,16 Z M 16.4999,8.00007L 11,13.5L 7.5,10L 8.91421,8.58581L 11,10.6716L 15.0857,6.58586L 16.4999,8.00007 Z ' })
                )
            );
        }
    }]);

    return MdiCommentCheckOutline;
}(React.Component);

exports.default = MdiCommentCheckOutline;
module.exports = exports['default'];