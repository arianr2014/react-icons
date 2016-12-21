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

var MdiFloppy = function (_React$Component) {
    _inherits(MdiFloppy, _React$Component);

    function MdiFloppy() {
        _classCallCheck(this, MdiFloppy);

        return _possibleConstructorReturn(this, (MdiFloppy.__proto__ || Object.getPrototypeOf(MdiFloppy)).apply(this, arguments));
    }

    _createClass(MdiFloppy, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 4.5,22L 2,19.5L 2,4.00001C 2,2.89544 2.89543,2.00001 4,2.00001L 20,2.00001C 21.1046,2.00001 22,2.89544 22,4.00001L 22,20C 22,21.1046 21.1046,22 20,22L 17,22L 17,15C 17,14.4477 16.5523,14 16,14L 7,14C 6.44771,14 6,14.4477 6,15L 6,22L 4.5,22 Z M 5,4.00001L 5,10C 5,10.5523 5.44771,11 5.99999,11L 18,11C 18.5523,11 19,10.5523 19,10L 19,4.00001L 5,4.00001 Z M 7.99999,16L 11,16L 11,20L 7.99999,20L 7.99999,16 Z M 20,4L 20,5L 21,5L 21,4L 20,4 Z ' })
                )
            );
        }
    }]);

    return MdiFloppy;
}(React.Component);

exports.default = MdiFloppy;
module.exports = exports['default'];