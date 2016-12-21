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

var MdiVkBox = function (_React$Component) {
    _inherits(MdiVkBox, _React$Component);

    function MdiVkBox() {
        _classCallCheck(this, MdiVkBox);

        return _possibleConstructorReturn(this, (MdiVkBox.__proto__ || Object.getPrototypeOf(MdiVkBox)).apply(this, arguments));
    }

    _createClass(MdiVkBox, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 5,3L 19,3C 20.1046,3 21,3.89543 21,5L 21,19C 21,20.1046 20.1046,21 19,21L 5,21C 3.89543,21 3,20.1046 3,19L 3,5C 3,3.89543 3.89543,3 5,3 Z M 17.2365,14.0269C 16.0621,12.9373 16.2199,13.1138 17.6368,11.2226C 18.4997,10.0748 18.8468,9.37367 18.7393,9.0739C 18.6348,8.78893 17.9997,8.8619 17.9997,8.8619L 15.8885,8.87669C 15.8885,8.87669 15.7308,8.85401 15.6154,8.92303C 15.503,8.99304 15.43,9.15082 15.43,9.15082C 15.43,9.15082 15.0948,10.0403 14.652,10.7956C 13.7123,12.394 13.3346,12.4749 13.1808,12.3782C 12.8258,12.1475 12.9145,11.4503 12.9145,10.9534C 12.9145,9.40818 13.1502,8.76132 12.456,8.59566C 12.2292,8.54241 12.0596,8.50297 11.4739,8.50001C 10.7196,8.49212 10.0835,8.50001 9.72165,8.67651C 9.47908,8.79583 9.2937,9.05812 9.41005,9.0739C 9.5481,9.08869 9.86463,9.1587 10.0303,9.3855C 10.2492,9.67836 10.2413,10.341 10.2413,10.341C 10.2413,10.341 10.3646,12.1593 9.94845,12.3861C 9.66347,12.5399 9.27496,12.2244 8.43877,10.7759C 8.00786,10.0363 7.68443,9.2159 7.68443,9.2159L 7.51088,8.97727L 7.18745,8.84612L 5.18079,8.85401C 5.18079,8.85401 4.88004,8.85006 4.76861,8.98121C 4.67198,9.10053 4.76073,9.32042 4.76073,9.32042C 4.76073,9.32042 6.33252,12.9561 8.10745,14.8049C 9.73743,16.504 11.5903,16.3107 11.5903,16.3107L 12.4294,16.3107C 12.4294,16.3107 12.6799,16.3649 12.811,16.2269C 12.9303,16.0997 12.9264,15.9379 12.9264,15.9379C 12.9264,15.9379 12.9106,14.8128 13.4313,14.6472C 13.947,14.4815 14.6096,15.7338 15.3107,16.215C 15.8383,16.5769 16.2425,16.5 16.2425,16.5L 18.119,16.4734C 18.119,16.4734 19.0972,16.4113 18.6308,15.6411C 18.5963,15.5751 18.3616,15.0712 17.2365,14.0269 Z ' })
                )
            );
        }
    }]);

    return MdiVkBox;
}(React.Component);

exports.default = MdiVkBox;
module.exports = exports['default'];