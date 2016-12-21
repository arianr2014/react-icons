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

var MdiBabyBuggy = function (_React$Component) {
    _inherits(MdiBabyBuggy, _React$Component);

    function MdiBabyBuggy() {
        _classCallCheck(this, MdiBabyBuggy);

        return _possibleConstructorReturn(this, (MdiBabyBuggy.__proto__ || Object.getPrototypeOf(MdiBabyBuggy)).apply(this, arguments));
    }

    _createClass(MdiBabyBuggy, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 13,2L 13,10L 21,10C 21,5.58 17.42,2 13,2 Z M 19.32,15.89C 20.37,14.54 21,12.84 21,11L 6.44,11L 5.49,9L 2,9L 2,11L 4.22,11C 4.22,11 6.11,15.07 6.34,15.42C 5.24,16.01 4.5,17.17 4.5,18.5C 4.5,20.43 6.07,22 8,22C 9.76,22 11.22,20.7 11.46,19L 13.54,19C 13.78,20.7 15.24,22 17,22C 18.93,22 20.5,20.43 20.5,18.5C 20.5,17.46 20.04,16.53 19.32,15.89 Z M 8,20C 7.17,20 6.5,19.33 6.5,18.5C 6.5,17.67 7.17,17 8,17C 8.83,17 9.5,17.67 9.5,18.5C 9.5,19.33 8.83,20 8,20 Z M 17,20C 16.17,20 15.5,19.33 15.5,18.5C 15.5,17.67 16.17,17 17,17C 17.83,17 18.5,17.67 18.5,18.5C 18.5,19.33 17.83,20 17,20 Z ' })
                )
            );
        }
    }]);

    return MdiBabyBuggy;
}(React.Component);

exports.default = MdiBabyBuggy;
module.exports = exports['default'];