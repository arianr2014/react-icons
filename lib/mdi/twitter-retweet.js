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

var MdiTwitterRetweet = function (_React$Component) {
    _inherits(MdiTwitterRetweet, _React$Component);

    function MdiTwitterRetweet() {
        _classCallCheck(this, MdiTwitterRetweet);

        return _possibleConstructorReturn(this, (MdiTwitterRetweet.__proto__ || Object.getPrototypeOf(MdiTwitterRetweet)).apply(this, arguments));
    }

    _createClass(MdiTwitterRetweet, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 6.00001,5.75L 10.25,10L 7,10L 6.99999,16L 13.5,16L 15.5,18L 6.99999,18C 5.89542,18 5,17.1046 5,16L 5,10L 1.75001,10L 6.00001,5.75 Z M 18,18.25L 13.75,14L 17,14L 17,8L 10.5,8.00001L 8.5,6L 17,6C 18.1046,6 19,6.89543 19,8L 19,14L 22.25,14L 18,18.25 Z ' })
                )
            );
        }
    }]);

    return MdiTwitterRetweet;
}(React.Component);

exports.default = MdiTwitterRetweet;
module.exports = exports['default'];