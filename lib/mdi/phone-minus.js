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

var MdiPhoneMinus = function (_React$Component) {
    _inherits(MdiPhoneMinus, _React$Component);

    function MdiPhoneMinus() {
        _classCallCheck(this, MdiPhoneMinus);

        return _possibleConstructorReturn(this, (MdiPhoneMinus.__proto__ || Object.getPrototypeOf(MdiPhoneMinus)).apply(this, arguments));
    }

    _createClass(MdiPhoneMinus, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 3.99875,2.9978C 3.4475,2.9978 2.9975,3.4475 2.9975,3.99875C 2.9975,13.3887 10.61,20.9963 20,20.9963C 20.5518,20.9963 21.0013,20.5512 21.0013,20L 21.0013,16.4988C 21.0013,15.9475 20.5518,15.4975 20,15.4975C 18.755,15.4975 17.5537,15.2975 16.4262,14.9313C 16.0837,14.8187 15.6888,14.9025 15.41,15.1763L 13.2125,17.3775C 10.3762,15.9375 8.06625,13.6225 6.62125,10.7912L 8.82375,8.58375C 9.09625,8.31 9.18,7.915 9.0675,7.56875C 8.70125,6.445 8.49625,5.24375 8.49625,3.99875C 8.49625,3.4475 8.05125,2.9978 7.5,2.9978M 12.9975,6.00125L 12.9975,7.9975L 21.0013,7.9975L 21.0013,6.00125' })
                )
            );
        }
    }]);

    return MdiPhoneMinus;
}(React.Component);

exports.default = MdiPhoneMinus;
module.exports = exports['default'];