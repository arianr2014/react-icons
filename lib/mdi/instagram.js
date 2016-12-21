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

var MdiInstagram = function (_React$Component) {
    _inherits(MdiInstagram, _React$Component);

    function MdiInstagram() {
        _classCallCheck(this, MdiInstagram);

        return _possibleConstructorReturn(this, (MdiInstagram.__proto__ || Object.getPrototypeOf(MdiInstagram)).apply(this, arguments));
    }

    _createClass(MdiInstagram, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 7.8,2.00002L 16.2,2.00002C 19.4032,2.00002 22,4.59677 22,7.80002L 22,16.2C 22,19.4033 19.4032,22 16.2,22L 7.8,22C 4.59675,22 2,19.4033 2,16.2L 2,7.80002C 2,4.59677 4.59675,2.00002 7.8,2.00002 Z M 7.6,4C 5.61177,4 4,5.61178 4,7.6L 4,16.4C 4,18.3882 5.61177,20 7.6,20L 16.4,20C 18.3882,20 20,18.3882 20,16.4L 20,7.6C 20,5.61178 18.3882,4 16.4,4L 7.6,4 Z M 17.25,5.5C 17.9404,5.5 18.5,6.05965 18.5,6.75C 18.5,7.44036 17.9404,8 17.25,8C 16.5596,8 16,7.44036 16,6.75C 16,6.05965 16.5596,5.5 17.25,5.5 Z M 12,7C 14.7614,7 17,9.23858 17,12C 17,14.7614 14.7614,17 12,17C 9.23857,17 7,14.7614 7,12C 7,9.23858 9.23857,7 12,7 Z M 12,9C 10.3431,9 9,10.3432 9,12C 9,13.6569 10.3431,15 12,15C 13.6569,15 15,13.6569 15,12C 15,10.3432 13.6569,9 12,9 Z ' })
                )
            );
        }
    }]);

    return MdiInstagram;
}(React.Component);

exports.default = MdiInstagram;
module.exports = exports['default'];