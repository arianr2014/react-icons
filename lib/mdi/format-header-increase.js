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

var MdiFormatHeaderIncrease = function (_React$Component) {
    _inherits(MdiFormatHeaderIncrease, _React$Component);

    function MdiFormatHeaderIncrease() {
        _classCallCheck(this, MdiFormatHeaderIncrease);

        return _possibleConstructorReturn(this, (MdiFormatHeaderIncrease.__proto__ || Object.getPrototypeOf(MdiFormatHeaderIncrease)).apply(this, arguments));
    }

    _createClass(MdiFormatHeaderIncrease, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 4,4L 6,4L 6,10L 10,10L 10,4L 12,4L 12,18L 10,18L 10,12L 6,12L 6,18L 4,18L 4,4 Z M 14.585,7.41376L 18.172,11L 14.585,14.5858L 15.999,15.9998L 21,11L 15.999,5.99976L 14.585,7.41376 Z ' })
                )
            );
        }
    }]);

    return MdiFormatHeaderIncrease;
}(React.Component);

exports.default = MdiFormatHeaderIncrease;
module.exports = exports['default'];