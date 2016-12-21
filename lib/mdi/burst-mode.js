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

var MdiBurstMode = function (_React$Component) {
    _inherits(MdiBurstMode, _React$Component);

    function MdiBurstMode() {
        _classCallCheck(this, MdiBurstMode);

        return _possibleConstructorReturn(this, (MdiBurstMode.__proto__ || Object.getPrototypeOf(MdiBurstMode)).apply(this, arguments));
    }

    _createClass(MdiBurstMode, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 1,5L 3,5L 3,19L 1,19L 1,5 Z M 5,5L 7,5L 7,19L 5,19L 5,5 Z M 22,5L 10,5C 9.45,5 9,5.45 9,6L 9,18C 9,18.55 9.45,19 10,19L 22,19C 22.55,19 23,18.55 23,18L 23,6C 23,5.45 22.55,5 22,5 Z M 11,17L 13.5,13.85L 15.29,16L 17.79,12.78L 21,17L 11,17 Z ' })
                )
            );
        }
    }]);

    return MdiBurstMode;
}(React.Component);

exports.default = MdiBurstMode;
module.exports = exports['default'];