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

var MdiPhone = function (_React$Component) {
    _inherits(MdiPhone, _React$Component);

    function MdiPhone() {
        _classCallCheck(this, MdiPhone);

        return _possibleConstructorReturn(this, (MdiPhone.__proto__ || Object.getPrototypeOf(MdiPhone)).apply(this, arguments));
    }

    _createClass(MdiPhone, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 6.6228,10.793C 8.06378,13.624 10.3788,15.938 13.2118,17.378L 15.4118,15.175C 15.6868,14.9 16.0818,14.819 16.4278,14.93C 17.5518,15.297 18.7528,15.498 19.9998,15.498C 20.5518,15.498 20.9998,15.945 20.9998,16.498L 20.9998,19.998C 20.9998,20.551 20.5518,20.998 19.9998,20.998C 10.6108,20.998 2.99878,13.387 2.99878,3.99796C 2.99878,3.44497 3.44678,2.99796 3.99878,2.99796L 7.49878,2.99796C 8.05179,2.99796 8.49878,3.44497 8.49878,3.99796C 8.49878,5.24497 8.6998,6.44597 9.0668,7.56997C 9.1788,7.91596 9.0968,8.31096 8.82278,8.58497L 6.6228,10.793 Z ' })
                )
            );
        }
    }]);

    return MdiPhone;
}(React.Component);

exports.default = MdiPhone;
module.exports = exports['default'];