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

var MdiBinoculars = function (_React$Component) {
    _inherits(MdiBinoculars, _React$Component);

    function MdiBinoculars() {
        _classCallCheck(this, MdiBinoculars);

        return _possibleConstructorReturn(this, (MdiBinoculars.__proto__ || Object.getPrototypeOf(MdiBinoculars)).apply(this, arguments));
    }

    _createClass(MdiBinoculars, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 11,6L 13,6L 13,13L 11,13L 11,6 Z M 9,20C 9,20.5523 8.55228,21 8,21L 5,21C 4.44771,21 4,20.5523 4,20L 4,15L 6,6.00001L 10,6.00001L 10,13C 10,13.5523 9.55228,14 9,14L 9,20 Z M 10,5.00001L 7,5.00001L 7,3.00001L 10,3.00001L 10,5.00001 Z M 15,20L 15,14C 14.4477,14 14,13.5523 14,13L 14,6L 18,6L 20,15L 20,20C 20,20.5523 19.5523,21 19,21L 16,21C 15.4477,21 15,20.5523 15,20 Z M 14,5L 14,3L 17,3L 17,5L 14,5 Z ' })
                )
            );
        }
    }]);

    return MdiBinoculars;
}(React.Component);

exports.default = MdiBinoculars;
module.exports = exports['default'];