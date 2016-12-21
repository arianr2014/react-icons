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

var MdiGhost = function (_React$Component) {
    _inherits(MdiGhost, _React$Component);

    function MdiGhost() {
        _classCallCheck(this, MdiGhost);

        return _possibleConstructorReturn(this, (MdiGhost.__proto__ || Object.getPrototypeOf(MdiGhost)).apply(this, arguments));
    }

    _createClass(MdiGhost, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 12,2C 7.02944,2 3,6.0294 3,11L 3,22L 6,19L 9,22L 12,19L 15,22L 18,19L 21,22L 21,11C 21,6.0294 16.9706,2 12,2 Z M 9,8C 10.1046,8 11,8.8954 11,10C 11,11.1046 10.1046,12 9,12C 7.89543,12 7,11.1046 7,10C 7,8.8954 7.89543,8 9,8 Z M 15,8C 16.1046,8 17,8.8954 17,10C 17,11.1046 16.1046,12 15,12C 13.8954,12 13,11.1046 13,10C 13,8.8954 13.8954,8 15,8 Z ' })
                )
            );
        }
    }]);

    return MdiGhost;
}(React.Component);

exports.default = MdiGhost;
module.exports = exports['default'];