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

var MdiCalculatorOff = function (_React$Component) {
    _inherits(MdiCalculatorOff, _React$Component);

    function MdiCalculatorOff() {
        _classCallCheck(this, MdiCalculatorOff);

        return _possibleConstructorReturn(this, (MdiCalculatorOff.__proto__ || Object.getPrototypeOf(MdiCalculatorOff)).apply(this, arguments));
    }

    _createClass(MdiCalculatorOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 1.5,4.76848L 2.77711,3.50001L 21,21.7229L 19.7315,23L 18.2736,21.5421C 17.9277,21.8281 17.4839,22 17,22L 6.99999,22C 5.89543,22 5,21.1046 5,20L 5,8.26848L 1.5,4.76848 Z M 6.99999,2.00002L 17,2.00002C 18.1045,2.00002 19,2.89545 19,4.00002L 19,17.1773L 17,15.1773L 17,14L 15.8227,14L 13,11.1773L 13,10L 11.8227,10L 9.82272,8.00004L 17,8.00004L 17,4.00002L 6.99999,4.00002L 6.99999,5.1773L 5.12505,3.30236C 5.40816,2.5418 6.14081,2.00002 6.99999,2.00002 Z M 6.99999,12L 8.73153,12L 6.99999,10.2685L 6.99999,12 Z M 15,10L 15,12L 17,12L 17,10L 15,10 Z M 6.99999,14L 6.99999,16L 8.99999,16L 8.99999,14L 6.99999,14 Z M 11,16L 12.7315,16L 11,14.2685L 11,16 Z M 6.99999,18L 6.99999,20L 9,20L 9,18L 6.99999,18 Z M 11,18L 11,20L 13,20L 13,18L 11,18 Z M 15,20L 16.7315,20L 15,18.2685L 15,20 Z ' })
                )
            );
        }
    }]);

    return MdiCalculatorOff;
}(React.Component);

exports.default = MdiCalculatorOff;
module.exports = exports['default'];