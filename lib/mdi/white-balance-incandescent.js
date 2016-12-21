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

var MdiWhiteBalanceIncandescent = function (_React$Component) {
    _inherits(MdiWhiteBalanceIncandescent, _React$Component);

    function MdiWhiteBalanceIncandescent() {
        _classCallCheck(this, MdiWhiteBalanceIncandescent);

        return _possibleConstructorReturn(this, (MdiWhiteBalanceIncandescent.__proto__ || Object.getPrototypeOf(MdiWhiteBalanceIncandescent)).apply(this, arguments));
    }

    _createClass(MdiWhiteBalanceIncandescent, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 17.2421,18.1548L 19.0371,19.9498L 20.4511,18.5348L 18.6561,16.7408M 19.9991,12.4978L 22.9991,12.4978L 22.9991,10.4978L 19.9991,10.4978M 14.9991,6.30776L 14.9991,1.49776L 8.99909,1.49776L 8.99909,6.30776C 7.2081,7.34577 5.9991,9.27877 5.9991,11.4978C 5.9991,14.8118 8.68611,17.4978 11.9991,17.4978C 15.3131,17.4978 17.9991,14.8118 17.9991,11.4978C 17.9991,9.27877 16.7911,7.34577 14.9991,6.30776 Z M 3.9991,10.4978L 0.999102,10.4978L 0.999102,12.4978L 3.9991,12.4978M 10.9991,22.4478C 11.3151,22.4498 12.9991,22.4478 12.9991,22.4478L 12.9991,19.4978L 10.9991,19.4978M 3.5481,18.5348L 4.9621,19.9498L 6.7571,18.1548L 5.3431,16.7408L 3.5481,18.5348 Z ' })
                )
            );
        }
    }]);

    return MdiWhiteBalanceIncandescent;
}(React.Component);

exports.default = MdiWhiteBalanceIncandescent;
module.exports = exports['default'];