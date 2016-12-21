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

var MdiDecimalDecrease = function (_React$Component) {
    _inherits(MdiDecimalDecrease, _React$Component);

    function MdiDecimalDecrease() {
        _classCallCheck(this, MdiDecimalDecrease);

        return _possibleConstructorReturn(this, (MdiDecimalDecrease.__proto__ || Object.getPrototypeOf(MdiDecimalDecrease)).apply(this, arguments));
    }

    _createClass(MdiDecimalDecrease, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 12,17L 15,20L 15,18L 21,18L 21,16L 15,16L 15,14L 12,17 Z M 8.99999,5.00002C 10.6568,5.00002 12,6.34316 12,8.00002L 12,11C 12,12.6569 10.6568,14 9,14C 7.34314,14 6,12.6569 6,11L 5.99999,8.00002C 5.99999,6.34316 7.34314,5.00002 8.99999,5.00002 Z M 8.99999,7.00001C 8.44771,7.00001 7.99999,7.44773 7.99999,8.00001L 8,11C 8,11.5523 8.44771,12 9,12C 9.55228,12 10,11.5523 10,11L 9.99999,8.00001C 9.99999,7.44773 9.55228,7.00001 8.99999,7.00001 Z M 4,12C 4.55228,12 5,12.4477 5,13C 5,13.5523 4.55228,14 4,14C 3.44772,14 3,13.5523 3,13C 3,12.4477 3.44772,12 4,12 Z ' })
                )
            );
        }
    }]);

    return MdiDecimalDecrease;
}(React.Component);

exports.default = MdiDecimalDecrease;
module.exports = exports['default'];