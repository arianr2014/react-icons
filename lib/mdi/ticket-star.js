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

var MdiTicketStar = function (_React$Component) {
    _inherits(MdiTicketStar, _React$Component);

    function MdiTicketStar() {
        _classCallCheck(this, MdiTicketStar);

        return _possibleConstructorReturn(this, (MdiTicketStar.__proto__ || Object.getPrototypeOf(MdiTicketStar)).apply(this, arguments));
    }

    _createClass(MdiTicketStar, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 15.577,16.7979L 11.999,14.4979L 8.422,16.7979L 9.499,12.6819L 6.21,9.99187L 10.455,9.74286L 11.999,5.79787L 13.544,9.74286L 17.789,9.99187L 14.499,12.6819M 19.999,11.9979C 19.999,10.8939 20.895,9.99787 21.999,9.99787L 21.999,5.99787C 21.999,4.89387 21.104,3.99787 19.999,3.99787L 3.999,3.99787C 2.895,3.99787 2.01,4.89387 2.01,5.99787L 2.006,9.99886C 3.107,10.0029 3.999,10.8959 3.999,11.9979C 3.999,13.1019 3.106,13.9959 2.003,13.9979L 1.999,17.9979C 1.999,19.1029 2.895,19.9979 3.999,19.9979L 19.999,19.9979C 21.104,19.9979 21.999,19.1029 21.999,17.9979L 21.999,13.9979C 20.895,13.9979 19.999,13.1029 19.999,11.9979 Z ' })
                )
            );
        }
    }]);

    return MdiTicketStar;
}(React.Component);

exports.default = MdiTicketStar;
module.exports = exports['default'];