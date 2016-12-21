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

var MdiFill = function (_React$Component) {
    _inherits(MdiFill, _React$Component);

    function MdiFill() {
        _classCallCheck(this, MdiFill);

        return _possibleConstructorReturn(this, (MdiFill.__proto__ || Object.getPrototypeOf(MdiFill)).apply(this, arguments));
    }

    _createClass(MdiFill, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 19,11.5C 19,11.5 17,13.667 17,15C 17,16.104 17.896,17 19,17C 20.104,17 21,16.104 21,15C 21,13.667 19,11.5 19,11.5 Z M 14.7187,9.97917L 5.207,10L 10,5.208L 14.7187,9.97917 Z M 16.561,8.939L 7.621,0L 6.207,1.414L 8.586,3.793L 3.439,8.939C 2.854,9.525 2.854,10.475 3.439,11.061L 8.939,16.561C 9.232,16.854 9.616,17 10,17C 10.384,17 10.768,16.854 11.061,16.561L 16.561,11.061C 17.146,10.475 17.146,9.525 16.561,8.939 Z ' }),
                    React.createElement('rect', { x: '0', y: '20', 'stroke-linejoin': 'round', width: '24', height: '4' })
                )
            );
        }
    }]);

    return MdiFill;
}(React.Component);

exports.default = MdiFill;
module.exports = exports['default'];