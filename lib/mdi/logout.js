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

var MdiLogout = function (_React$Component) {
    _inherits(MdiLogout, _React$Component);

    function MdiLogout() {
        _classCallCheck(this, MdiLogout);

        return _possibleConstructorReturn(this, (MdiLogout.__proto__ || Object.getPrototypeOf(MdiLogout)).apply(this, arguments));
    }

    _createClass(MdiLogout, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 16.9999,17.25L 16.9999,14L 9.99998,14L 9.99998,10L 16.9999,10L 16.9999,6.75L 22.2499,12L 16.9999,17.25 Z M 13,2.00002C 14.1046,2.00002 15,2.89545 15,4.00002L 15,8L 13,8L 13,4.00002L 4,4.00004L 4,20L 13,20L 13,16L 15,16L 15,20C 15,21.1046 14.1046,22 13,22L 4,22C 2.89543,22 2,21.1046 2,20L 2,4.00004C 2,2.89547 2.89543,2.00006 4,2.00006L 13,2.00002 Z ' })
                )
            );
        }
    }]);

    return MdiLogout;
}(React.Component);

exports.default = MdiLogout;
module.exports = exports['default'];