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

var MdiCollage = function (_React$Component) {
    _inherits(MdiCollage, _React$Component);

    function MdiCollage() {
        _classCallCheck(this, MdiCollage);

        return _possibleConstructorReturn(this, (MdiCollage.__proto__ || Object.getPrototypeOf(MdiCollage)).apply(this, arguments));
    }

    _createClass(MdiCollage, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 5,2.9978C 3.89125,2.9978 2.9975,3.89136 2.9975,5L 2.9975,18.9988C 2.9975,20.1075 3.89125,21.0012 5,21.0012L 11.0013,21.0012L 11.0013,2.9978M 12.9975,2.9978L 12.9975,11.0012L 21.0013,11.0012L 21.0013,5C 21.0013,3.89136 20.1075,2.9978 18.9988,2.9978M 12.9975,12.9975L 12.9975,21.0012L 18.9988,21.0012C 20.1075,21.0012 21.0013,20.1075 21.0013,18.9988L 21.0013,12.9975' })
                )
            );
        }
    }]);

    return MdiCollage;
}(React.Component);

exports.default = MdiCollage;
module.exports = exports['default'];