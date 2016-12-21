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

var MdiCash = function (_React$Component) {
    _inherits(MdiCash, _React$Component);

    function MdiCash() {
        _classCallCheck(this, MdiCash);

        return _possibleConstructorReturn(this, (MdiCash.__proto__ || Object.getPrototypeOf(MdiCash)).apply(this, arguments));
    }

    _createClass(MdiCash, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 3,6L 21,6L 21,18L 3,18L 3,6 Z M 12,9.00001C 13.6568,9.00001 15,10.3432 15,12C 15,13.6569 13.6568,15 12,15C 10.3431,15 8.99999,13.6569 8.99999,12C 8.99999,10.3432 10.3431,9.00001 12,9.00001 Z M 7,8.00001C 7,9.10458 6.10456,10 5,10L 4.99999,14C 6.10456,14 6.99999,14.8954 6.99999,16L 17,16C 17,14.8954 17.8954,14 19,14L 19,10C 17.8954,10 17,9.10458 17,8.00002L 7,8.00001 Z ' })
                )
            );
        }
    }]);

    return MdiCash;
}(React.Component);

exports.default = MdiCash;
module.exports = exports['default'];