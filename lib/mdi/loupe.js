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

var MdiLoupe = function (_React$Component) {
    _inherits(MdiLoupe, _React$Component);

    function MdiLoupe() {
        _classCallCheck(this, MdiLoupe);

        return _possibleConstructorReturn(this, (MdiLoupe.__proto__ || Object.getPrototypeOf(MdiLoupe)).apply(this, arguments));
    }

    _createClass(MdiLoupe, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 12,20C 7.59,20 4,16.41 4,12C 4,7.59 7.59,4 12,4C 16.41,4 20,7.59 20,12C 20,16.41 16.41,20 12,20 Z M 12,2C 6.49,2 2,6.49 2,12C 2,17.51 6.49,22 12,22L 20,22C 21.1,22 22,21.1 22,20L 22,12C 22,6.49 17.51,2 12,2 Z M 13,7L 11,7L 11,11L 7,11L 7,13L 11,13L 11,17L 13,17L 13,13L 17,13L 17,11L 13,11L 13,7 Z ' })
                )
            );
        }
    }]);

    return MdiLoupe;
}(React.Component);

exports.default = MdiLoupe;
module.exports = exports['default'];