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

var MdiCellphoneBasic = function (_React$Component) {
    _inherits(MdiCellphoneBasic, _React$Component);

    function MdiCellphoneBasic() {
        _classCallCheck(this, MdiCellphoneBasic);

        return _possibleConstructorReturn(this, (MdiCellphoneBasic.__proto__ || Object.getPrototypeOf(MdiCellphoneBasic)).apply(this, arguments));
    }

    _createClass(MdiCellphoneBasic, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 15,2C 14.446,2 14,2.446 14,3L 14,6L 10,6C 8.89199,6 8,6.892 8,8L 8,20C 8,21.108 8.89199,22 10,22L 15,22C 16.108,22 17,21.108 17,20L 17,8C 17,7.2589 16.5958,6.621 16,6.2754L 16,3C 16,2.446 15.554,2 15,2 Z M 10,8L 15,8L 15,13L 10,13L 10,8 Z M 10,15L 11,15L 11,16L 10,16L 10,15 Z M 12,15L 13,15L 13,16L 12,16L 12,15 Z M 14,15L 15,15L 15,16L 14,16L 14,15 Z M 10,17L 11,17L 11,18L 10,18L 10,17 Z M 12,17L 13,17L 13,18L 12,18L 12,17 Z M 14,17L 15,17L 15,18L 14,18L 14,17 Z M 10,19L 11,19L 11,20L 10,20L 10,19 Z M 12,19L 13,19L 13,20L 12,20L 12,19 Z M 14,19L 15,19L 15,20L 14,20L 14,19 Z ' })
                )
            );
        }
    }]);

    return MdiCellphoneBasic;
}(React.Component);

exports.default = MdiCellphoneBasic;
module.exports = exports['default'];