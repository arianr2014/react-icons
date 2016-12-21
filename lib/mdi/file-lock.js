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

var MdiFileLock = function (_React$Component) {
    _inherits(MdiFileLock, _React$Component);

    function MdiFileLock() {
        _classCallCheck(this, MdiFileLock);

        return _possibleConstructorReturn(this, (MdiFileLock.__proto__ || Object.getPrototypeOf(MdiFileLock)).apply(this, arguments));
    }

    _createClass(MdiFileLock, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 6,2C 4.89498,2 4.00977,2.896 4.00977,4L 4,20C 4,21.104 4.88623,22 5.99023,22L 18,22C 19.104,22 20,21.104 20,20L 20,8L 14,2L 6,2 Z M 13,3.5L 18.5,9L 13,9L 13,3.5 Z M 12,11.0176C 13.6569,11.0176 15,12.3608 15,14.0176L 15,15.0176L 16,15.0176L 16,19.0176L 8,19.0176L 8,15.0176L 9,15.0176L 9,14.0176C 9,12.3608 10.3431,11.0176 12,11.0176 Z M 12,13.0176C 11.4477,13.0176 11,13.4653 11,14.0176L 11,15.0176L 13,15.0176L 13,14.0176C 13,13.4653 12.5523,13.0176 12,13.0176 Z ' })
                )
            );
        }
    }]);

    return MdiFileLock;
}(React.Component);

exports.default = MdiFileLock;
module.exports = exports['default'];