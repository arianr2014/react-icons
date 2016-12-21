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

var MdiKeyboardVariant = function (_React$Component) {
    _inherits(MdiKeyboardVariant, _React$Component);

    function MdiKeyboardVariant() {
        _classCallCheck(this, MdiKeyboardVariant);

        return _possibleConstructorReturn(this, (MdiKeyboardVariant.__proto__ || Object.getPrototypeOf(MdiKeyboardVariant)).apply(this, arguments));
    }

    _createClass(MdiKeyboardVariant, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 6,16L 18,16L 18,18L 6,18L 6,16 Z M 5.99999,13L 5.99999,15L 2,15L 2,13L 5.99999,13 Z M 6.99999,15L 6.99999,13L 9.99998,13L 9.99998,15L 6.99999,15 Z M 11,15L 11,13L 13,13L 13,15L 11,15 Z M 14,15L 14,13L 17,13L 17,15L 14,15 Z M 18,15L 18,13L 22,13L 22,15L 18,15 Z M 2,10L 4.99999,10L 4.99999,12L 2,12L 2,10 Z M 19,12L 19,10L 22,10L 22,12L 19,12 Z M 18,12L 16,12L 16,10L 18,10L 18,12 Z M 7.99999,12L 5.99999,12L 5.99999,10L 7.99999,10L 7.99999,12 Z M 12,12L 9,12L 9,10L 12,10L 12,12 Z M 15,12L 13,12L 13,10L 15,10L 15,12 Z M 2,9.00001L 2,7.00001L 4,7.00001L 4,9.00001L 2,9.00001 Z M 5,9.00001L 5,7.00001L 7,7.00001L 7,9.00001L 5,9.00001 Z M 8,9L 8,7.00001L 10,7.00001L 10,9L 8,9 Z M 11,9L 11,7L 13,7L 13,9L 11,9 Z M 14,9L 14,7L 16,7L 16,9L 14,9 Z M 17,9L 17,7L 22,7L 22,9L 17,9 Z ' })
                )
            );
        }
    }]);

    return MdiKeyboardVariant;
}(React.Component);

exports.default = MdiKeyboardVariant;
module.exports = exports['default'];