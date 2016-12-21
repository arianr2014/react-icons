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

var MdiNumeric9PlusBox = function (_React$Component) {
    _inherits(MdiNumeric9PlusBox, _React$Component);

    function MdiNumeric9PlusBox() {
        _classCallCheck(this, MdiNumeric9PlusBox);

        return _possibleConstructorReturn(this, (MdiNumeric9PlusBox.__proto__ || Object.getPrototypeOf(MdiNumeric9PlusBox)).apply(this, arguments));
    }

    _createClass(MdiNumeric9PlusBox, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 21,5L 21,19C 21,20.1 20.1,21 19,21L 5.00001,21C 3.90001,21 3.00001,20.1 3.00001,19L 3.00001,5C 3.00001,3.9 3.90001,3 5.00001,3L 19,3C 20.1,3 21,3.9 21,5 Z M 19,11L 17,11L 17,9.00001L 15,9.00001L 15,11L 13,11L 13,13L 15,13L 15,15L 17,15L 17,13L 19,13L 19,11 Z M 10,7.00001L 8,7.00001C 6.9,7.00001 6,7.89001 6,9.00001L 6,11C 6,12.11 6.9,13 8,13L 10,13L 10,15L 6,15L 6,17L 10,17C 11.1,17 12,16.11 12,15L 12,9.00001C 12,7.89001 11.1,7.00001 10,7.00001 Z M 7.99999,9.00001L 9.99999,9.00001L 9.99999,11L 7.99999,11L 7.99999,9.00001 Z ' })
                )
            );
        }
    }]);

    return MdiNumeric9PlusBox;
}(React.Component);

exports.default = MdiNumeric9PlusBox;
module.exports = exports['default'];