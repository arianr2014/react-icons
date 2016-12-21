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

var MdiTableColumnPlusAfter = function (_React$Component) {
    _inherits(MdiTableColumnPlusAfter, _React$Component);

    function MdiTableColumnPlusAfter() {
        _classCallCheck(this, MdiTableColumnPlusAfter);

        return _possibleConstructorReturn(this, (MdiTableColumnPlusAfter.__proto__ || Object.getPrototypeOf(MdiTableColumnPlusAfter)).apply(this, arguments));
    }

    _createClass(MdiTableColumnPlusAfter, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 11,2.00001C 12.1046,2.00001 13,2.89544 13,4.00001L 13,20C 13,21.1046 12.1046,22 11,22L 2,22L 2,2L 11,2.00001 Z M 4,10L 4,14L 11,14L 11,10L 4,10 Z M 4,16L 4,20L 11,20L 11,16L 4,16 Z M 4,4.00001L 4,8L 11,8L 11,4L 4,4.00001 Z M 15,11L 18,11L 18,8.00001L 20,8.00001L 20,11L 23,11L 23,13L 20,13L 20,16L 18,16L 18,13L 15,13L 15,11 Z ' })
                )
            );
        }
    }]);

    return MdiTableColumnPlusAfter;
}(React.Component);

exports.default = MdiTableColumnPlusAfter;
module.exports = exports['default'];