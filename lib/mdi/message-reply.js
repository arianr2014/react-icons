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

var MdiMessageReply = function (_React$Component) {
    _inherits(MdiMessageReply, _React$Component);

    function MdiMessageReply() {
        _classCallCheck(this, MdiMessageReply);

        return _possibleConstructorReturn(this, (MdiMessageReply.__proto__ || Object.getPrototypeOf(MdiMessageReply)).apply(this, arguments));
    }

    _createClass(MdiMessageReply, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 21.9891,3.99805C 21.9891,2.89404 21.1031,1.99805 19.9991,1.99805L 3.99913,1.99805C 2.89512,1.99805 1.99913,2.89404 1.99913,3.99805L 1.99913,15.998C 1.99913,17.1021 2.89512,17.998 3.99913,17.998L 17.9991,17.998L 21.9991,21.998L 21.9891,3.99805 Z ' })
                )
            );
        }
    }]);

    return MdiMessageReply;
}(React.Component);

exports.default = MdiMessageReply;
module.exports = exports['default'];