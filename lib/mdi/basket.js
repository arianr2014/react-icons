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

var MdiBasket = function (_React$Component) {
    _inherits(MdiBasket, _React$Component);

    function MdiBasket() {
        _classCallCheck(this, MdiBasket);

        return _possibleConstructorReturn(this, (MdiBasket.__proto__ || Object.getPrototypeOf(MdiBasket)).apply(this, arguments));
    }

    _createClass(MdiBasket, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 5.5,21C 4.71931,21 4.04309,20.5527 3.71366,19.9004L 3.70777,19.902L 1.10118,10.4388L 1,10C 1,9.44772 1.44771,9.00001 2,9.00001L 6.57797,9.00001L 11.1808,2.42643C 11.3617,2.16859 11.6611,2.00001 12,2.00001C 12.344,2.00001 12.6475,2.17375 12.8274,2.43829L 17.422,9.00001L 22,9.00001C 22.5523,9.00001 23,9.44772 23,10L 22.9581,10.2874L 20.2863,19.9004C 19.9569,20.5527 19.2807,21 18.5,21L 5.5,21 Z M 12,4.74346L 9.01952,9.00002L 14.9805,9.00002L 12,4.74346 Z M 12,13C 10.8954,13 10,13.8954 10,15C 10,16.1046 10.8954,17 12,17C 13.1046,17 14,16.1046 14,15C 14,13.8954 13.1046,13 12,13 Z ' })
                )
            );
        }
    }]);

    return MdiBasket;
}(React.Component);

exports.default = MdiBasket;
module.exports = exports['default'];