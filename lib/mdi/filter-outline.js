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

var MdiFilterOutline = function (_React$Component) {
    _inherits(MdiFilterOutline, _React$Component);

    function MdiFilterOutline() {
        _classCallCheck(this, MdiFilterOutline);

        return _possibleConstructorReturn(this, (MdiFilterOutline.__proto__ || Object.getPrototypeOf(MdiFilterOutline)).apply(this, arguments));
    }

    _createClass(MdiFilterOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 3,2.00001L 20.9888,2.00001L 21,2.00001L 21,2.01123L 21,4L 20.9207,4L 15,9.92066L 15,22.909L 9,16.909L 9,9.90596L 3.09404,4L 3,4L 3,2.00001 Z M 11,16.0806L 13,18.0806L 13,9L 13.0922,9L 18.0922,4.00001L 5.92247,4.00001L 10.9225,9L 11,9L 11,16.0806 Z ' })
                )
            );
        }
    }]);

    return MdiFilterOutline;
}(React.Component);

exports.default = MdiFilterOutline;
module.exports = exports['default'];