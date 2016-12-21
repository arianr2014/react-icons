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

var MdiFoodApple = function (_React$Component) {
    _inherits(MdiFoodApple, _React$Component);

    function MdiFoodApple() {
        _classCallCheck(this, MdiFoodApple);

        return _possibleConstructorReturn(this, (MdiFoodApple.__proto__ || Object.getPrototypeOf(MdiFoodApple)).apply(this, arguments));
    }

    _createClass(MdiFoodApple, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 20,10C 22,13 17,22 15,22C 13,22 13,21 12,21C 11,21 11,22 9,22C 7,22 2,13 4,10C 5.99999,7.00001 8.99999,7.00001 11,8.00001L 11,4.99999C 5.38138,8.07099 4.10636,3.78446 4.10636,3.78446C 4.10636,3.78446 6.77057,0.192522 11,4.99999L 11,3L 13,3L 13,8.00001C 15,7.00001 18,7.00001 20,10 Z ' })
                )
            );
        }
    }]);

    return MdiFoodApple;
}(React.Component);

exports.default = MdiFoodApple;
module.exports = exports['default'];