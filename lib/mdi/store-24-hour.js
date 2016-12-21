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

var MdiStore24Hour = function (_React$Component) {
    _inherits(MdiStore24Hour, _React$Component);

    function MdiStore24Hour() {
        _classCallCheck(this, MdiStore24Hour);

        return _possibleConstructorReturn(this, (MdiStore24Hour.__proto__ || Object.getPrototypeOf(MdiStore24Hour)).apply(this, arguments));
    }

    _createClass(MdiStore24Hour, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 15.9994,11.9981L 14.9994,11.9981L 14.9994,9.99807L 12.9994,9.99807L 12.9994,6.99807L 13.9994,6.99807L 13.9994,8.99807L 14.9994,8.99807L 14.9994,6.99807L 15.9994,6.99807M 10.9994,9.99807L 8.9994,9.99807L 8.9994,10.9981L 10.9994,10.9981L 10.9994,11.9981L 7.9994,11.9981L 7.9994,8.99807L 9.9994,8.99807L 9.9994,7.99807L 7.9994,7.99807L 7.9994,6.99807L 10.9994,6.99807M 18.9994,6.99807L 18.9994,3.99807L 4.9994,3.99807L 4.9994,6.99807L 1.9994,6.99807L 1.9994,19.9981L 9.9994,19.9981L 9.9994,15.9981L 13.9994,15.9981L 13.9994,19.9981L 21.9994,19.9981L 21.9994,6.99807L 18.9994,6.99807 Z ' })
                )
            );
        }
    }]);

    return MdiStore24Hour;
}(React.Component);

exports.default = MdiStore24Hour;
module.exports = exports['default'];