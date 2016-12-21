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

var MdiShuffle = function (_React$Component) {
    _inherits(MdiShuffle, _React$Component);

    function MdiShuffle() {
        _classCallCheck(this, MdiShuffle);

        return _possibleConstructorReturn(this, (MdiShuffle.__proto__ || Object.getPrototypeOf(MdiShuffle)).apply(this, arguments));
    }

    _createClass(MdiShuffle, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 14.83,13.41L 13.42,14.82L 16.55,17.95L 14.5,20L 20,20L 20,14.5L 17.96,16.54L 14.83,13.41 Z M 14.5,4L 16.54,6.04L 4,18.59L 5.41,20L 17.96,7.46L 20,9.5L 20,4M 10.59,9.17L 5.41,4L 4,5.41L 9.17,10.58L 10.59,9.17 Z ' })
                )
            );
        }
    }]);

    return MdiShuffle;
}(React.Component);

exports.default = MdiShuffle;
module.exports = exports['default'];