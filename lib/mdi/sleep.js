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

var MdiSleep = function (_React$Component) {
    _inherits(MdiSleep, _React$Component);

    function MdiSleep() {
        _classCallCheck(this, MdiSleep);

        return _possibleConstructorReturn(this, (MdiSleep.__proto__ || Object.getPrototypeOf(MdiSleep)).apply(this, arguments));
    }

    _createClass(MdiSleep, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 23,12L 17,12L 17,10L 20.3892,6L 17,6L 17,4L 23,4L 23,6L 19.6188,10L 23,10L 23,12 Z M 15,16L 9,16L 9,14L 12.3892,10L 9,10L 9,8L 15,8L 15,10L 11.6188,14L 15,14L 15,16 Z M 7,20L 1,20L 1,18L 4.38919,14L 1,14L 1,12L 6.99999,12L 6.99999,14L 3.61879,18L 7,18L 7,20 Z ' })
                )
            );
        }
    }]);

    return MdiSleep;
}(React.Component);

exports.default = MdiSleep;
module.exports = exports['default'];