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

var MdiBroom = function (_React$Component) {
    _inherits(MdiBroom, _React$Component);

    function MdiBroom() {
        _classCallCheck(this, MdiBroom);

        return _possibleConstructorReturn(this, (MdiBroom.__proto__ || Object.getPrototypeOf(MdiBroom)).apply(this, arguments));
    }

    _createClass(MdiBroom, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 19.364,2.72182L 20.7782,4.13604L 15.06,9.85422C 16.1322,11.386 16.2802,13.2354 15.3836,14.4392L 9.06075,8.11639C 10.2646,7.21981 12.114,7.36782 13.6458,8.44001L 19.364,2.72182 Z M 5.92893,17.5711C 3.91724,15.5594 2.68981,13.1559 2.34612,10.9243L 7.23001,8.83123L 14.6688,16.27L 12.5757,21.1539C 10.3441,20.8102 7.94062,19.5828 5.92893,17.5711 Z ' })
                )
            );
        }
    }]);

    return MdiBroom;
}(React.Component);

exports.default = MdiBroom;
module.exports = exports['default'];