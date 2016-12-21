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

var MdiBridge = function (_React$Component) {
    _inherits(MdiBridge, _React$Component);

    function MdiBridge() {
        _classCallCheck(this, MdiBridge);

        return _possibleConstructorReturn(this, (MdiBridge.__proto__ || Object.getPrototypeOf(MdiBridge)).apply(this, arguments));
    }

    _createClass(MdiBridge, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 7,14L 7,10.9096C 6.28444,10.5771 5.61422,10.1754 5,9.71425L 5,14L 7,14 Z M 5,18L 3,18L 3,16L 1,16L 1,14L 3,14L 3,7L 5,7L 5,8.4273C 6.80375,10.0187 9.27454,11 12,11C 14.7254,11 17.1962,10.0187 19,8.42729L 19,7L 21,7L 21,14L 23,14L 23,16L 21,16L 21,18L 19,18L 19,16L 5,16L 5,18 Z M 17,10.9096L 17,14L 19,14L 19,9.71425C 18.3858,10.1754 17.7156,10.5771 17,10.9096 Z M 16,14L 16,11.3183C 15.3603,11.5454 14.6914,11.7196 14,11.8351L 14,14L 16,14 Z M 13,14L 13,11.9592L 12,12L 11,11.9592L 11,14L 13,14 Z M 10,14L 10,11.8351C 9.30854,11.7196 8.63971,11.5454 8,11.3183L 8,14L 10,14 Z ' })
                )
            );
        }
    }]);

    return MdiBridge;
}(React.Component);

exports.default = MdiBridge;
module.exports = exports['default'];