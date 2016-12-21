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

var MdiCellphoneSettings = function (_React$Component) {
    _inherits(MdiCellphoneSettings, _React$Component);

    function MdiCellphoneSettings() {
        _classCallCheck(this, MdiCellphoneSettings);

        return _possibleConstructorReturn(this, (MdiCellphoneSettings.__proto__ || Object.getPrototypeOf(MdiCellphoneSettings)).apply(this, arguments));
    }

    _createClass(MdiCellphoneSettings, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 16,16L 8,16L 8,4L 16,4M 16,0.0100021L 8,1.90735e-006C 6.9,1.90735e-006 6,0.900002 6,2L 6,18C 6,19.1 6.9,20 8,20L 16,20C 17.1,20 18,19.1 18,18L 18,2C 18,0.900002 17.1,0.0100021 16,0.0100021 Z M 15,24L 17,24L 17,22L 15,22M 11,24L 13,24L 13,22L 11,22M 7,24L 9,24L 9,22L 7,22L 7,24 Z ' })
                )
            );
        }
    }]);

    return MdiCellphoneSettings;
}(React.Component);

exports.default = MdiCellphoneSettings;
module.exports = exports['default'];