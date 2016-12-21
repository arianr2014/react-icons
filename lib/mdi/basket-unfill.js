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

var MdiBasketUnfill = function (_React$Component) {
    _inherits(MdiBasketUnfill, _React$Component);

    function MdiBasketUnfill() {
        _classCallCheck(this, MdiBasketUnfill);

        return _possibleConstructorReturn(this, (MdiBasketUnfill.__proto__ || Object.getPrototypeOf(MdiBasketUnfill)).apply(this, arguments));
    }

    _createClass(MdiBasketUnfill, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 3.00001,10L 6.00001,10L 6.00001,7.00001L 3.00001,7.00001L 3.00001,10 Z M 5,5L 8,5L 8,2.00001L 5,2.00001L 5,5 Z M 8.00001,10L 11,10L 11,7.00001L 8.00001,7.00001L 8.00001,10 Z M 17,1.00001L 12,6.00001L 15,6.00001L 15,10L 19,10L 19,6.00001L 22,6.00001L 17,1.00001 Z M 7.5,22C 6.71932,22 6.0431,21.5527 5.71367,20.9004L 5.70778,20.902L 3.10119,13.4388L 3.00001,13C 3.00001,12.4477 3.44772,12 4.00001,12L 20,12C 20.5522,12 21,12.4477 21,13L 20.9581,13.2874L 18.2863,20.9004C 17.9569,21.5527 17.2807,22 16.5,22L 7.5,22 Z M 7.60718,20L 16.3908,20L 18.5746,14L 5.42336,14L 7.60718,20 Z ' })
                )
            );
        }
    }]);

    return MdiBasketUnfill;
}(React.Component);

exports.default = MdiBasketUnfill;
module.exports = exports['default'];