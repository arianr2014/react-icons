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

var MdiBarcode = function (_React$Component) {
    _inherits(MdiBarcode, _React$Component);

    function MdiBarcode() {
        _classCallCheck(this, MdiBarcode);

        return _possibleConstructorReturn(this, (MdiBarcode.__proto__ || Object.getPrototypeOf(MdiBarcode)).apply(this, arguments));
    }

    _createClass(MdiBarcode, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 2,6L 4,6L 4,18L 2,18L 2,6 Z M 5,6.00001L 6,6.00001L 6,18L 5,18L 5,6.00001 Z M 7,6.00001L 10,6.00001L 10,18L 7,18L 7,6.00001 Z M 11,6L 12,6L 12,18L 11,18L 11,6 Z M 14,6L 16,6L 16,18L 14,18L 14,6 Z M 17,6L 20,6L 20,18L 17,18L 17,6 Z M 21,6L 22,6L 22,18L 21,18L 21,6 Z ' })
                )
            );
        }
    }]);

    return MdiBarcode;
}(React.Component);

exports.default = MdiBarcode;
module.exports = exports['default'];