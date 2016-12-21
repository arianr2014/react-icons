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

var MdiLooks = function (_React$Component) {
    _inherits(MdiLooks, _React$Component);

    function MdiLooks() {
        _classCallCheck(this, MdiLooks);

        return _possibleConstructorReturn(this, (MdiLooks.__proto__ || Object.getPrototypeOf(MdiLooks)).apply(this, arguments));
    }

    _createClass(MdiLooks, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 12,6C 5.93,6 1,10.93 1,17L 3,17C 3,12.04 7.04,8 12,8C 16.96,8 21,12.04 21,17L 23,17C 23,10.93 18.07,6 12,6 Z M 12,10C 8.14,10 5,13.14 5,17L 7,17C 7,14.24 9.24,12 12,12C 14.76,12 17,14.24 17,17L 19,17C 19,13.14 15.86,10 12,10 Z ' })
                )
            );
        }
    }]);

    return MdiLooks;
}(React.Component);

exports.default = MdiLooks;
module.exports = exports['default'];