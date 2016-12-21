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

var MdiWhiteBalanceIrradescent = function (_React$Component) {
    _inherits(MdiWhiteBalanceIrradescent, _React$Component);

    function MdiWhiteBalanceIrradescent() {
        _classCallCheck(this, MdiWhiteBalanceIrradescent);

        return _possibleConstructorReturn(this, (MdiWhiteBalanceIrradescent.__proto__ || Object.getPrototypeOf(MdiWhiteBalanceIrradescent)).apply(this, arguments));
    }

    _createClass(MdiWhiteBalanceIrradescent, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 4.962,19.9498L 6.757,18.1548L 5.343,16.7408L 3.548,18.5348M 3.548,4.46078L 5.343,6.25577L 6.757,4.84177L 4.962,3.04677M 20.451,18.5348L 18.656,16.7408L 17.242,18.1548L 19.037,19.9498M 12.999,22.4478L 12.999,19.4978L 10.999,19.4978L 10.999,22.4478C 11.315,22.4498 12.999,22.4478 12.999,22.4478 Z M 19.037,3.04677L 17.242,4.84177L 18.656,6.25577L 20.451,4.46078M 10.999,3.49776L 12.999,3.49776L 12.999,0.547766L 10.999,0.547766M 4.999,14.4978L 18.999,14.4978L 18.999,8.49776L 4.999,8.49776L 4.999,14.4978 Z ' })
                )
            );
        }
    }]);

    return MdiWhiteBalanceIrradescent;
}(React.Component);

exports.default = MdiWhiteBalanceIrradescent;
module.exports = exports['default'];