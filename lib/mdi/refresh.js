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

var MdiRefresh = function (_React$Component) {
    _inherits(MdiRefresh, _React$Component);

    function MdiRefresh() {
        _classCallCheck(this, MdiRefresh);

        return _possibleConstructorReturn(this, (MdiRefresh.__proto__ || Object.getPrototypeOf(MdiRefresh)).apply(this, arguments));
    }

    _createClass(MdiRefresh, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 17.65,6.35C 16.2,4.9 14.21,4 12,4C 7.58,4 4.01,7.58 4.01,12C 4.01,16.42 7.58,20 12,20C 15.73,20 18.84,17.45 19.73,14L 17.65,14C 16.83,16.33 14.61,18 12,18C 8.69,18 6,15.31 6,12C 6,8.69 8.69,6 12,6C 13.66,6 15.14,6.69 16.22,7.78L 13,11L 20,11L 20,4L 17.65,6.35 Z ' })
                )
            );
        }
    }]);

    return MdiRefresh;
}(React.Component);

exports.default = MdiRefresh;
module.exports = exports['default'];